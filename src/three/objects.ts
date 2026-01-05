import * as THREE from "three";

export function createCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 'red' });
    const cube = new THREE.Mesh(geometry, material);
    return cube;
}

export function createAxesHelper(size: number) {
    return new THREE.AxesHelper(size);
}