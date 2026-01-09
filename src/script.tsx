import GUI from "lil-gui"

import { getCanvas } from "./three/canvas";
import { createScene } from "./three/scene";
import { createCamera } from "./three/camera";
import { createRenderer } from "./three/renderer";
import { createTorus, createCone, createTorusKnot } from "./three/models/meshs";
import { createAmbientLight, createDirectionalLight } from "./three/lights"; 
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

// --- Lights Setup ---
const { ambientLight } = createAmbientLight();
const { directionalLight } = createDirectionalLight();
directionalLight.position.set(1, 1, 0);
scene.add( ambientLight, directionalLight );

// --- Objects ---
const torus = createTorus({ size: 1, color: "#ff5c47ff"});
torus.position.x = -2;
const cone = createCone({ radius: 1, height: 2, color: "#8cb446ff"});
cone.position.x = 2;
const torusKnot = createTorusKnot({ size: 0.8, color: "#3a32cdff"}); 
torusKnot.position.y = 2;
scene.add( torus, cone, torusKnot );

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
