import GUI from "lil-gui"

import { getCanvas } from "./three/canvas";
import { createScene } from "./three/scene";
import { createCamera } from "./three/camera";
import { createRenderer } from "./three/renderer";
import { createCube, createAxesHelper } from "./three/objects";
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
const cube = createCube( { size: 1, color: 'red' } );
scene.add(cube);

// --- Setup Axes Helper ---
const axesHelper = createAxesHelper(2);
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
