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
//const { ambientLight } = createAmbientLight();
const { directionalLight } = createDirectionalLight();
directionalLight.position.set(2, 3, 1);
directionalLight.target.position.set(0, 0, 0);
scene.add( directionalLight, directionalLight.target );

// --- Objects ---
const meshParams = {
    color : "#db9a18",
    textureURL: "static/textures/gradients/5.jpg",
}

const torus = createTorus({ size: 1, ...meshParams});
torus.position.x = -2;
const cone = createCone({ radius: 1, height: 2, ...meshParams});
cone.position.x = 2;
const torusKnot = createTorusKnot({ size: 0.8, ...meshParams}); 
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
