import * as THREE from "three";

export function setupResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
) {
  window.addEventListener("resize", () => {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}