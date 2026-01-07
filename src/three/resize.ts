import * as THREE from "three";

type ResizeParams = {
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
}

export function setupResize(props : ResizeParams) {
  const { camera, renderer } = props;

  function onResize () {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  window.addEventListener("resize", onResize);

  return () => {
    window.removeEventListener("resize", onResize);
  }
}