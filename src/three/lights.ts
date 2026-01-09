import * as THREE from "three";

export function createAmbientLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

    return { ambientLight }
}

export function createDirectionalLight() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    return { directionalLight }
}