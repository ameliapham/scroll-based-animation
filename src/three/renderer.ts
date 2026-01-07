import * as THREE from "three";

type RendererParams = {
    canvas: HTMLCanvasElement;
}

export function createRenderer(props: RendererParams): THREE.WebGLRenderer {
    const { canvas } = props;
    
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    return renderer;
}
    