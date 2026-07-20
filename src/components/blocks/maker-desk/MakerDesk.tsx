import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

import Wrapper from '../../fragments/wrapper';
import {
    DeskCanvas,
    DeskHeader,
    DeskShell,
    ObjectMenu,
    Section,
    SelectionPanel,
} from './MakerDesk.styles';

type DeskItem = {
    id: string;
    label: string;
    description: string;
    href?: string;
};

const deskItems: DeskItem[] = [
    { id: 'camera', label: 'Camera', description: 'Places, details, and passing moments collected through my lens.', href: '/photography' },
    { id: 'laptop', label: 'Laptop', description: 'Products, systems, and experiences shaped with thoughtful teams.', href: '#work-experience-heading' },
    { id: 'notebook', label: 'Notebook', description: 'Notes about the web, accessibility, CSS, and things I am learning.', href: '/blog' },
    { id: 'maker', label: '3D maker', description: 'Small objects taken from an idea to a print, then finished and painted by hand.' },
    { id: 'ticket', label: 'Cinema ticket', description: 'Science fiction, visual storytelling, and a very good excuse for popcorn.' },
];

const palette = {
    black: 0x1a1a1a,
    cream: 0xfbeadb,
    pink: 0xe0399b,
    green: 0x2ea84f,
    yellow: 0xffce2e,
    purple: 0x8c9eec,
    coral: 0xf6a6d6,
};

const material = (color: number) => new THREE.MeshBasicMaterial({ color });

const addOutlinedMesh = (
    group: THREE.Group,
    geometry: THREE.BufferGeometry,
    color: number,
    position: [number, number, number],
    rotation: [number, number, number] = [0, 0, 0],
) => {
    const mesh = new THREE.Mesh(geometry, material(color));
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    group.add(mesh);

    const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({ color: palette.black }),
    );
    edges.position.copy(mesh.position);
    edges.rotation.copy(mesh.rotation);
    group.add(edges);
    return mesh;
};

const createDeskScene = () => {
    const root = new THREE.Group();

    addOutlinedMesh(root, new THREE.BoxGeometry(10, 0.45, 6), palette.cream, [0, -0.4, 0]);

    const laptop = new THREE.Group();
    laptop.userData.itemId = 'laptop';
    addOutlinedMesh(laptop, new THREE.BoxGeometry(3.4, 0.18, 2.1), palette.purple, [0, 0, 0.7]);
    addOutlinedMesh(laptop, new THREE.BoxGeometry(3.4, 2.2, 0.16), palette.black, [0, 1.05, -0.26], [-0.16, 0, 0]);
    addOutlinedMesh(laptop, new THREE.BoxGeometry(2.9, 1.72, 0.04), palette.pink, [0, 1.06, -0.34], [-0.16, 0, 0]);
    laptop.position.set(0.55, 0, -0.75);
    root.add(laptop);

    const camera = new THREE.Group();
    camera.userData.itemId = 'camera';
    addOutlinedMesh(camera, new THREE.BoxGeometry(1.8, 1.15, 0.85), palette.green, [0, 0.35, 0]);
    addOutlinedMesh(camera, new THREE.BoxGeometry(0.65, 0.32, 0.6), palette.yellow, [-0.35, 1.02, 0]);
    addOutlinedMesh(camera, new THREE.CylinderGeometry(0.48, 0.58, 0.52, 20), palette.black, [0.25, 0.35, 0.66], [Math.PI / 2, 0, 0]);
    addOutlinedMesh(camera, new THREE.CylinderGeometry(0.22, 0.22, 0.55, 20), palette.purple, [0.25, 0.35, 0.96], [Math.PI / 2, 0, 0]);
    camera.position.set(-3.25, 0, 0.7);
    camera.rotation.y = 0.15;
    root.add(camera);

    const notebook = new THREE.Group();
    notebook.userData.itemId = 'notebook';
    addOutlinedMesh(notebook, new THREE.BoxGeometry(2.0, 0.18, 2.6), palette.yellow, [0, 0, 0]);
    for (let line = -0.6; line <= 0.7; line += 0.42) {
        addOutlinedMesh(notebook, new THREE.BoxGeometry(1.25, 0.035, 0.045), palette.black, [0.15, 0.12, line]);
    }
    notebook.position.set(3.45, -0.05, -0.2);
    notebook.rotation.y = -0.22;
    root.add(notebook);

    const maker = new THREE.Group();
    maker.userData.itemId = 'maker';
    addOutlinedMesh(maker, new THREE.CylinderGeometry(0.7, 0.88, 0.35, 12), palette.coral, [0, 0, 0]);
    addOutlinedMesh(maker, new THREE.CylinderGeometry(0.48, 0.58, 1.15, 12), palette.pink, [0, 0.7, 0]);
    addOutlinedMesh(maker, new THREE.SphereGeometry(0.45, 12, 8), palette.green, [0, 1.45, 0]);
    addOutlinedMesh(maker, new THREE.ConeGeometry(0.18, 0.55, 8), palette.yellow, [0, 2.02, 0]);
    maker.position.set(-2.1, 0.1, -1.8);
    root.add(maker);

    const ticket = new THREE.Group();
    ticket.userData.itemId = 'ticket';
    addOutlinedMesh(ticket, new THREE.BoxGeometry(2.35, 0.08, 0.9), palette.coral, [0, 0, 0]);
    addOutlinedMesh(ticket, new THREE.BoxGeometry(0.08, 0.05, 0.7), palette.black, [0.52, 0.07, 0]);
    ticket.position.set(2.4, 0.12, 2.0);
    ticket.rotation.y = 0.25;
    root.add(ticket);

    return root;
};

const MakerDesk = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [selectedId, setSelectedId] = useState('maker');
    const selected = deskItems.find((item) => item.id === selectedId) ?? deskItems[0];

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-6, 6, 4, -4, 0.1, 100);
        camera.position.set(8, 8, 9);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        const desk = createDeskScene();
        scene.add(desk);

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        let hovered: THREE.Group | null = null;

        const findItemGroup = (object: THREE.Object3D | null): THREE.Group | null => {
            let current = object;
            while (current && !current.userData.itemId) current = current.parent;
            return current as THREE.Group | null;
        };

        const updatePointer = (event: MouseEvent | PointerEvent) => {
            const rect = renderer.domElement.getBoundingClientRect();
            pointer.set(
                ((event.clientX - rect.left) / rect.width) * 2 - 1,
                -((event.clientY - rect.top) / rect.height) * 2 + 1,
            );
            raycaster.setFromCamera(pointer, camera);
            return findItemGroup(raycaster.intersectObjects(desk.children, true)[0]?.object ?? null);
        };

        const onPointerMove = (event: PointerEvent) => {
            const next = updatePointer(event);
            if (hovered && hovered !== next) hovered.scale.setScalar(1);
            hovered = next;
            if (hovered) hovered.scale.setScalar(1.04);
            renderer.domElement.style.cursor = hovered ? 'pointer' : 'default';
            renderer.render(scene, camera);
        };

        const onPointerLeave = () => {
            hovered?.scale.setScalar(1);
            hovered = null;
            renderer.domElement.style.cursor = 'default';
            renderer.render(scene, camera);
        };

        const onClick = (event: MouseEvent) => {
            const item = updatePointer(event);
            if (item?.userData.itemId) setSelectedId(item.userData.itemId);
        };

        const resize = () => {
            const { width } = mount.getBoundingClientRect();
            const height = Math.max(380, Math.min(620, width * 0.58));
            const aspect = width / height;
            camera.left = -6;
            camera.right = 6;
            camera.top = 6 / aspect;
            camera.bottom = -6 / aspect;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            renderer.render(scene, camera);
        };

        const observer = new ResizeObserver(resize);
        observer.observe(mount);
        renderer.domElement.addEventListener('pointermove', onPointerMove);
        renderer.domElement.addEventListener('pointerleave', onPointerLeave);
        renderer.domElement.addEventListener('click', onClick);
        resize();

        return () => {
            observer.disconnect();
            renderer.domElement.removeEventListener('pointermove', onPointerMove);
            renderer.domElement.removeEventListener('pointerleave', onPointerLeave);
            renderer.domElement.removeEventListener('click', onClick);
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
                    object.geometry.dispose();
                    const sceneMaterial = object.material;
                    if (Array.isArray(sceneMaterial)) {
                        sceneMaterial.forEach((entry) => entry.dispose());
                    } else {
                        sceneMaterial.dispose();
                    }
                }
            });
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, []);

    return (
        <Section aria-labelledby="maker-desk-heading">
            <Wrapper>
                <DeskHeader>
                    <div>
                        <span>One desk, many interests</span>
                        <h2 id="maker-desk-heading">The maker's desk<span>.</span></h2>
                    </div>
                    <p>A small map of what I build, notice, collect, and keep learning.</p>
                </DeskHeader>

                <DeskShell>
                    <DeskCanvas ref={mountRef} aria-hidden="true" />
                    <SelectionPanel aria-live="polite">
                        <span>Selected object</span>
                        <h3>{selected.label}</h3>
                        <p>{selected.description}</p>
                        {selected.href && (selected.href.startsWith('/')
                            ? <Link to={selected.href}>Explore <span aria-hidden="true">↗</span></Link>
                            : <a href={selected.href}>Explore <span aria-hidden="true">↓</span></a>)}
                    </SelectionPanel>
                </DeskShell>

                <ObjectMenu aria-label="Explore the objects on Alexandra's desk">
                    {deskItems.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            aria-pressed={selectedId === item.id}
                            onClick={() => setSelectedId(item.id)}
                        >
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            {item.label}
                        </button>
                    ))}
                </ObjectMenu>
            </Wrapper>
        </Section>
    );
};

export default MakerDesk;
