
export function getCanvas (): HTMLCanvasElement {
    const canvas = document.querySelector("canvas.webgl");
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error("Canvas element not found");
    }
    return canvas;
}