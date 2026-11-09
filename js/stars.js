import * as THREE from "three";

const canvas = document.createElement("canvas");
canvas.id = "scene";
document.body.prepend(canvas);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setClearColor(0x000000, 1);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 10, 22);
const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
camera.position.set(0, 0, 8.2);

const field = new THREE.Group();
scene.add(field);

const sculpture = new THREE.Mesh(
  new THREE.IcosahedronGeometry(2.1, 1),
  new THREE.MeshBasicMaterial({ color: 0xf5a623, wireframe: true, transparent: true, opacity: 0.1 })
);
sculpture.position.set(-3.6, 0.4, -3.2);
field.add(sculpture);

const count = 220;
const positions = new Float32Array(count * 3);
for (let i = 0; i < count; i += 1) {
  positions[i * 3] = (Math.random() - 0.5) * 16;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
}
field.add(new THREE.Points(
  new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(positions, 3)),
  new THREE.PointsMaterial({ color: 0xf5a623, size: 0.028, transparent: true, opacity: 0.75, depthWrite: false })
));

const pointer = { x: 0, y: 0 };
const target = { x: 0, y: 0 };

function resize() {
  camera.aspect = window.innerWidth / Math.max(window.innerHeight, 1);
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
}

function frame() {
  pointer.x += (target.x - pointer.x) * (reduceMotion ? 1 : 0.075);
  pointer.y += (target.y - pointer.y) * (reduceMotion ? 1 : 0.075);
  field.position.x = pointer.x * -0.45;
  field.position.y = pointer.y * 0.22;
  sculpture.rotation.y += reduceMotion ? 0 : 0.0018;
  sculpture.rotation.x += reduceMotion ? 0 : 0.0007;
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

window.addEventListener("pointermove", (event) => {
  target.x = (event.clientX / window.innerWidth) * 2 - 1;
  target.y = (event.clientY / window.innerHeight) * 2 - 1;
});
window.addEventListener("resize", resize);
resize();
frame();
