import * as THREE from "three";

type CubeParams = {
    size?: number;
    color?: string;
}

export function createCube( props : CubeParams ) {
    const { size, color } = props;

    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const cube = new THREE.Mesh(geometry, material);
    return cube;
}

export function createAxesHelper(size: number) {
    return new THREE.AxesHelper(size);
}