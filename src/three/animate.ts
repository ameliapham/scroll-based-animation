import * as THREE from "three";

type AnimateParams = {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    sectionMeshes: THREE.Object3D[];
};

export function startAnimation( props : AnimateParams ) {
    const { scene, camera, renderer, sectionMeshes } = props;
    
    const clock = new THREE.Clock();

    function animate() {
        // Update time
        const elapsedTime = clock.getElapsedTime();

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
