import * as THREE from "three";

export function startAnimation(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
) {
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
