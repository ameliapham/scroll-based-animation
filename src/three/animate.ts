import * as THREE from "three";

type AnimateParams = {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    sectionMeshes: THREE.Object3D[];
    objectsDistance?: number;
};

export function startAnimation( props : AnimateParams ) {
    const { scene, camera, renderer, sectionMeshes, objectsDistance } = props;
    
    const clock = new THREE.Clock();

    // Scroll state
    let scrollY = window.scrollY;
    
    window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
    });

    function animate() {
        // Update time
        const elapsedTime = clock.getElapsedTime();

        // Animate camera based on scroll
        camera.position.y = - scrollY / window.innerHeight * (objectsDistance ?? 4); // 4 is the distance between objects

        // Update objects
        for ( const object of sectionMeshes ) {
            object.rotation.x = 0.1 * elapsedTime;
            object.rotation.y = 0.12 * elapsedTime;
        }

        // Update render
        renderer.render(scene, camera);

        // Call animate again on the next frame
        window.requestAnimationFrame(animate);
    }
    animate();
}
