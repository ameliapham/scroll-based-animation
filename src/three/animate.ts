import * as THREE from "three";

type AnimateParams = {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
};

export function startAnimation( props : AnimateParams ) {
    const { scene, camera, renderer } = props;
    
    const clock = new THREE.Clock();

    function animate() {
        // Update time
        const elapsedTime = clock.getElapsedTime();

        // Update render
        renderer.render(scene, camera);

        // Call animate again on the next frame
        window.requestAnimationFrame(animate);
    }
    animate();
}
