import * as THREE from "three";

type MeshProps = {
    textureURL: string,
    color: string,
    positions?: THREE.Vector3,
    rotations?: THREE.Euler,
}

function createMaterial( color: string, textureURL: string ): THREE.Material {
    const gradientTexture = new THREE.TextureLoader().load( textureURL );

    gradientTexture.minFilter = THREE.NearestFilter;
    gradientTexture.magFilter = THREE.NearestFilter;
    gradientTexture.generateMipmaps = false;

    const material = new THREE.MeshToonMaterial ({ 
        color,
        gradientMap: gradientTexture
    })
    return material;
}

function createMesh( geometry: THREE.BufferGeometry, props: MeshProps ) : THREE.Mesh {
    const { color, textureURL, positions, rotations } = props;
    
    const material = createMaterial( color, textureURL );

    const mesh = new THREE.Mesh( geometry, material );

    if (positions) {
        mesh.position.copy(positions);
    }
    if (rotations) {
        mesh.rotation.copy(rotations);
    }

    return mesh;
}

// --- Meshes ---

// Torus
type TorusProps = MeshProps & {
    size?: number;
}

export function createTorus ( props : TorusProps ) {
    const { size } =  props

    const geometry = new THREE.TorusGeometry(
        size || 1,
        size || 1 * 0.4,
        16,
        60
    );
    return createMesh( geometry, props )
}

// Cone
type ConeProps = MeshProps & {
    radius: number;
    height: number;
}

export function createCone ( props : ConeProps ) {
    const { radius, height } =  props

    const geometry = new THREE.ConeGeometry(
        radius || 1,
        height || 2,
        32
    );
    return createMesh( geometry, props )
}

// TorusKnot
type TorusKnotProps = MeshProps & {
    size?: number;
}

export function createTorusKnot ( props : TorusKnotProps ) {
    const { size } =  props

    const geometry = new THREE.TorusKnotGeometry(
        size || 1,
        size ? size * 0.4 : 0.4,
        100,
        16
    );
    return createMesh( geometry, props )
}