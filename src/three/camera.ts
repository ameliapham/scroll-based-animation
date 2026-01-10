import * as THREE from "three";

export function createCamera(): THREE.PerspectiveCamera {
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 10;
    return camera;
}