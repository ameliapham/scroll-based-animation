import * as THREE from "three";
import gsap from "gsap";

type AnimateParams = {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    sectionMeshes: THREE.Object3D[];
    objectsDistance: number; // distance between objects
    cameraGroup: THREE.Group; // to apply parallax effect
};

export function startAnimation( props : AnimateParams ) {
    const { scene, camera, renderer, sectionMeshes, objectsDistance, cameraGroup } = props;
    
    const clock = new THREE.Clock();
    let previousTime = 0;

    // Scroll state
    let scrollY = window.scrollY;
    let currentSection = 0;
    
    const onScroll = () => {
        scrollY = window.scrollY;

        const newSection = Math.round( scrollY / window.innerHeight );
        if ( newSection != currentSection ) {
            currentSection = newSection;

            gsap.to(
                sectionMeshes[currentSection].rotation,
                {
                    duration: 1.5,
                    ease: "power2.inOut",
                    x: "+=" + Math.PI * 2,
                    y: "+=" + Math.PI * 2,
                    z: "+=" + Math.PI * 0.5
                }
            )
        }
    }
    window.addEventListener( 'scroll', onScroll );

    // --- Cursor ---
    const cursor = {x: 0,y: 0}

    const onMouseMove = (event: MouseEvent) => {
        cursor.x = ( event.clientX / window.innerWidth ) - 0.5;
        cursor.y = ( event.clientY / window.innerHeight ) - 0.5;
    }
    window.addEventListener( 'mousemove', onMouseMove );


    // Animation loop

    function animate() {
        // Update time
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - previousTime;
        previousTime = elapsedTime;

        // Animate camera based on scroll
        camera.position.y = - scrollY / window.innerHeight * objectsDistance;

        // Animate camera based on cursor
        const parallaxX = cursor.x * 0.5;
        const parallaxY = - cursor.y * 0.5;

        cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * deltaTime * 5;
        cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * deltaTime * 5;

        // Update objects
        for ( const object of sectionMeshes ) {
            object.rotation.x += 0.1 * deltaTime;
            object.rotation.y += 0.12 * deltaTime;
        }

        // Update render
        renderer.render(scene, camera);

        // Call animate again on the next frame
        window.requestAnimationFrame(animate);
    }
    animate();

    return () => {
        window.removeEventListener( 'scroll', onScroll );
        window.removeEventListener( 'mousemove', onMouseMove );
    }
}
