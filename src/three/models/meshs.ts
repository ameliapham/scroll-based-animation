import * as THREE from "three";

type MeshProps = {
    color: string,
    positions?: THREE.Vector3,
    rotations?: THREE.Euler,
}

function createMaterial( color: string ): THREE.Material {
    const material = new THREE.MeshToonMaterial ({ color })
    return material;
}

function createMesh( geometry: THREE.BufferGeometry, props: MeshProps ) : THREE.Mesh {
    const { color, positions, rotations } = props;
    
    const material = createMaterial( color );

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