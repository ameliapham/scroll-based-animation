import GUI from "lil-gui"
import * as THREE from "three";

import { getCanvas } from "./three/canvas";
import { createScene } from "./three/scene";
import { createCamera } from "./three/camera";
import { createRenderer } from "./three/renderer";
import { createTorus, createCone, createTorusKnot, createParticles } from "./three/models/meshs";
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
const cameraGroup = new THREE.Group();
scene.add(cameraGroup);

const camera = createCamera();
cameraGroup.add(camera)

// --- Lights Setup ---
//const { ambientLight } = createAmbientLight();
const { directionalLight } = createDirectionalLight();
directionalLight.position.set(2, 3, 1);
directionalLight.target.position.set(0, 0, 0);
scene.add( directionalLight, directionalLight.target );

// --- Objects ---
const meshParams = {
    color : "#feffda",
    textureURL: "static/textures/gradients/3.jpg",
}

const torus = createTorus({ size: 0.8, ...meshParams});
const cone = createCone({ radius: 1, height: 2, ...meshParams});
const torusKnot = createTorusKnot({ size: 0.8, ...meshParams}); 
scene.add( torus, cone, torusKnot );

const sectionMeshes = [ torus, cone, torusKnot ];

const objectsDistance = 4;
torus.position.y = - objectsDistance * 0;
cone.position.y = - objectsDistance * 1;
torusKnot.position.y = - objectsDistance * 2;

torus.position.x = 2;
cone.position.x = - 2;
torusKnot.position.x = 2;

// --- Particles ---
const particles = createParticles({ particleCount: 200, size: 0.03, objectsDistance, sectionMeshes });
scene.add( particles );


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
startAnimation({ scene, camera, renderer, sectionMeshes, objectsDistance, cameraGroup });
