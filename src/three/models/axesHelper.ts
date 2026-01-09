import * as THREE from "three";

type AxesHelperParams = {
    size: number;
}

export function createAxesHelper(props: AxesHelperParams) {
    const { size } = props;
    return new THREE.AxesHelper(size);
}