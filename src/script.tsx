import GUI from "lil-gui"

import { getCanvas } from "./three/canvas";
import { createScene } from "./three/scene";
import { createCamera } from "./three/camera";
import { createRenderer } from "./three/renderer";
import { createTorus } from "./three/models/meshs";
import { createAxesHelper } from "./three/models/axesHelper";
import { setupResize } from "./three/resize";
import { startAnimation } from "./three/animate";

console.log("Hello, Three.js with TypeScript!");

// --- Canvas Setup ---
const canvas = getCanvas();

// --- Scene Setup ---
const scene = createScene();

// --- Camera Setup ---
const camera = createCamera();
scene.add(camera)

// --- Objects ---
const torusProps = {
    size: 1,
    color: 'orange',
}
const torus = createTorus(torusProps);

scene.add( torus );

// --- Setup Axes Helper ---
const axesHelper = createAxesHelper({ size: 2 });
scene.add(axesHelper)

// --- Renderer Setup ---
const renderer = createRenderer({ canvas });

// --- Debug UI ---
const gui = new GUI
gui.close()

// --- Resize ---
setupResize({ camera, renderer });

// --- Render Loop ---
startAnimation({ scene, camera, renderer });
