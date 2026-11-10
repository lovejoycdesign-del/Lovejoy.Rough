import * as THREE from "three";
import { projects } from "./catalog.js?v=2";

const TITLES = {
  home: "LOVEJOY VISUALS — A digital Agency",
  about: "About — LJ Chirombo",
  work: "Work — LJ Chirombo",
  skills: "Skills — LJ Chirombo",
  resume: "Resume — LJ Chirombo",
  contact: "Contact — LJ Chirombo",
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const phoneLayout = window.matchMedia("(max-width: 800px)");
phoneLayout.addEventListener("change", () => paint());
const stage = document.querySelector("#stage");
const pages = [...document.querySelectorAll(".sheet")];
const status = document.querySelector("#page-status");
const copy = document.querySelector(".hero-copy");
const portraitSlots = [...document.querySelectorAll("[data-portrait]")];
const portraitPages = new Set(["home", "about", "work", "skills"]);
function activeSlot() {
  return document.querySelector(`[data-page="${document.body.dataset.view}"] [data-portrait]`);
}
const serviceCards = [...document.querySelectorAll(".service")];
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const lightboxVideo = document.querySelector("#lightbox-video");
const lightboxCaption = document.querySelector("#lightbox-caption");

const flip = { index: 0, progress: 0, dest: 0, busy: false };
let drag = null;
let suppressClick = false;
let lightboxOpen = false;
let wheelAt = 0;

const template = document.querySelector("#nav-template");
document.querySelectorAll(".nav-slot").forEach((slotNode) => {
  slotNode.replaceChildren(template.content.cloneNode(true));
});

pages.forEach((sheet) => {
  const front = sheet.querySelector(".face.front");
  front.insertAdjacentHTML(
    "beforeend",
    `<div class="sheen" aria-hidden="true"></div>
     <button class="peel peel-next" type="button" data-flip="1"><span aria-hidden="true">→</span></button>
     <button class="peel peel-prev" type="button" data-flip="-1"><span aria-hidden="true">←</span></button>`
  );
});

function nextIndex(direction) {
  return (flip.index + direction + pages.length) % pages.length;
}

function paint() {
  const progress = flip.progress;
  const turning = Math.abs(progress) > 0.001;
  const dest = turning ? flip.dest : flip.index;
  document.body.classList.toggle("is-turning", turning);
  const turn = Math.min(Math.abs(progress), 1);

  pages.forEach((sheet, i) => {
    let show = i === flip.index;
    let z = i === flip.index ? 30 : 1;
    let opacity = show ? 1 : 0;

    if (progress > 0) {
      if (i === flip.index) {
        show = true;
        z = 20;
        opacity = 1 - turn;
      } else if (i === dest) {
        show = true;
        z = 30;
        opacity = turn;
      }
    } else if (progress < 0) {
      if (i === dest) {
        show = true;
        z = 30;
        opacity = turn;
      } else if (i === flip.index) {
        show = true;
        z = 20;
        opacity = 1 - turn;
      }
    }

    sheet.style.transform = "none";
    sheet.style.opacity = String(show ? opacity : 0);
    sheet.style.zIndex = String(z);
    sheet.style.visibility = show ? "visible" : "hidden";
    sheet.inert = !show;
    sheet.setAttribute("aria-hidden", show ? "false" : "true");
    const sheen = sheet.querySelector(".sheen");
    if (sheen) sheen.style.opacity = "0";
  });
}

function sync(push) {
  const page = pages[flip.index].dataset.page;
  document.body.dataset.view = page;
  document.title = TITLES[page] || TITLES.home;

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  const nextLabel = pages[nextIndex(1)].dataset.label;
  const prevLabel = pages[nextIndex(-1)].dataset.label;
  document.querySelectorAll(".peel-next").forEach((btn) => {
    btn.setAttribute("aria-label", `Flip to ${nextLabel}`);
  });
  document.querySelectorAll(".peel-prev").forEach((btn) => {
    btn.setAttribute("aria-label", `Flip back to ${prevLabel}`);
  });

  status.textContent = `${pages[flip.index].dataset.label}. Page ${flip.index + 1} of ${pages.length}.`;

  const hash = `#${page}`;
  if (push && location.hash !== hash) history.pushState({ page }, "", hash);
}

function arrive(dest) {
  const scroller = pages[dest].querySelector(".sheet-scroll");
  if (!scroller || reduceMotion) return;
  scroller.classList.remove("is-arriving");
  void scroller.offsetWidth;
  scroller.classList.add("is-arriving");
}

function settle(dest, push) {
  flip.index = dest;
  flip.progress = 0;
  flip.dest = dest;
  flip.busy = false;
  paint();
  document.body.classList.remove("is-turning");
  const scroller = pages[dest].querySelector(".sheet-scroll");
  if (scroller) scroller.scrollTop = 0;
  window.scrollTo(0, 0);
  sync(push);
  arrive(dest);
  if (typeof resetPortraitSpin === "function") resetPortraitSpin();
}

function animateTo(from, to, dest) {
  if (to === 0) {
    flip.progress = 0;
    flip.busy = false;
    flip.dest = flip.index;
    paint();
    document.body.classList.remove("is-turning");
    return;
  }
  if (from === to) return;
  settle(dest, true);
}

function flipBy(direction) {
  if (flip.busy || lightboxOpen) return;
  const dest = nextIndex(direction);
  animateTo(0, direction > 0 ? 1 : -1, dest);
}

function flipTo(dest) {
  if (dest < 0 || dest === flip.index || flip.busy || lightboxOpen) return;
  animateTo(0, dest > flip.index ? 1 : -1, dest);
}

function goToPage(name) {
  flipTo(pages.findIndex((sheet) => sheet.dataset.page === name));
}

stage.addEventListener("pointerdown", (event) => {
  if (flip.busy || lightboxOpen || event.button !== 0) return;
  const peel = event.target.closest(".peel");
  if (phoneLayout.matches && !peel) return;
  if (!peel && event.target.closest("a, button, input, textarea, select, label")) return;
  drag = {
    id: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    active: false,
    peel: Boolean(peel),
  };
});

stage.addEventListener("pointermove", (event) => {
  if (!drag || event.pointerId !== drag.id || flip.busy) return;
  const dx = event.clientX - drag.x;
  const dy = event.clientY - drag.y;
  if (!drag.active) {
    if (Math.hypot(dx, dy) < 10) return;
    if (!drag.peel && Math.abs(dy) > Math.abs(dx)) {
      drag = null;
      return;
    }
    drag.active = true;
    stage.classList.add("is-dragging");
    try { stage.setPointerCapture(event.pointerId); } catch { /* pointer already released */ }
  }
  const progress = Math.max(-1, Math.min(1, -dx / Math.max(stage.clientWidth, 1)));
  flip.progress = progress;
  flip.dest = progress >= 0 ? nextIndex(1) : nextIndex(-1);
  paint();
});

function endDrag(event) {
  if (!drag || event.pointerId !== drag.id) return;
  const active = drag.active;
  const progress = flip.progress;
  drag = null;
  stage.classList.remove("is-dragging");
  if (!active) return;
  suppressClick = true;
  if (Math.abs(progress) > 0.22) {
    const direction = progress > 0 ? 1 : -1;
    animateTo(progress, direction, nextIndex(direction), true);
    return;
  }
  animateTo(progress, 0, flip.dest, true);
}

stage.addEventListener("pointerup", endDrag);
stage.addEventListener("pointercancel", endDrag);

stage.addEventListener("click", (event) => {
  const peel = event.target.closest(".peel");
  if (!peel) return;
  if (suppressClick) {
    suppressClick = false;
    return;
  }
  flipBy(Number(peel.dataset.flip));
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-nav]");
  if (!link) return;
  event.preventDefault();
  goToPage(link.dataset.nav);
});

window.addEventListener("popstate", () => {
  const name = location.hash.replace("#", "") || "home";
  const dest = pages.findIndex((sheet) => sheet.dataset.page === name);
  if (dest < 0) return;
  flip.busy = false;
  settle(dest, false);
});

window.addEventListener(
  "wheel",
  (event) => {
    if (lightboxOpen || flip.busy || event.ctrlKey || phoneLayout.matches) return;
    const scroller = pages[flip.index].querySelector(".sheet-scroll");
    if (!scroller) return;
    const delta = event.deltaY;
    const canScroll = scroller.scrollHeight > scroller.clientHeight + 8;
    if (canScroll) {
      const atTop = scroller.scrollTop <= 0;
      const atBottom = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 2;
      if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) return;
    }
    event.preventDefault();
    const now = performance.now();
    if (now - wheelAt < 480) return;
    if (Math.abs(delta) < 8) return;
    wheelAt = now;
    flipBy(delta > 0 ? 1 : -1);
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (event.target.closest("input, textarea")) return;
  if (lightboxOpen) {
    if (event.key === "Escape") closeLightbox();
    return;
  }
  if (event.key === "ArrowRight") flipBy(1);
  if (event.key === "ArrowLeft") flipBy(-1);
  if (event.key === "Escape" || event.key === "Home") goToPage("home");
});

serviceCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const y = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const x = ((event.clientY - rect.top) / rect.height - 0.5) * -6;
    card.style.transform = `rotateX(${x}deg) rotateY(${y}deg) translateZ(10px)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

const grid = document.querySelector("#work-grid");
const empty = document.querySelector("#work-empty");
const count = document.querySelector("#work-count");
let filter = "all";

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "work-card";
  card.dataset.cat = project.category;
  const number = String(index + 1).padStart(2, "0");
  const visit = project.href
    ? `<a class="text-link" href="${project.href}" target="_blank" rel="noreferrer">VISIT SITE</a>`
    : "";
  const shot = project.video
    ? `<div class="work-shot work-shot-video">
        <video src="${project.video}" controls playsinline preload="metadata"></video>
        <button class="enlarge" type="button">ENLARGE</button>
      </div>`
    : project.title === "LoveJoy Health"
      ? `<a class="work-shot work-shot-link" href="https://lovejoy.health/" target="_blank" rel="noreferrer" aria-label="Open LoveJoy Health">
          <img src="${project.image}" alt="LoveJoy Health" />
        </a>`
      : `<button class="work-shot" type="button" aria-label="Enlarge ${project.title}">
          <img src="${project.image}" alt="${project.title}" />
        </button>`;
  card.innerHTML = `
    ${shot}
    <div class="work-meta">
      <p class="work-index">${number}</p>
      <h3></h3>
      <p></p>
      <p></p>
      <p></p>
      ${visit}
    </div>`;
  const meta = card.querySelectorAll(".work-meta p");
  card.querySelector("h3").textContent = project.title;
  meta[1].textContent = project.tools;
  meta[2].textContent = project.size;
  meta[3].textContent = project.summary;
  const opener = card.querySelector(".enlarge") || card.querySelector("button.work-shot");
  if (opener) opener.addEventListener("click", () => openLightbox(project));
  grid.appendChild(card);
});

function applyFilter() {
  let shown = 0;
  grid.querySelectorAll(".work-card").forEach((card) => {
    const on = filter === "all" || card.dataset.cat === filter;
    card.hidden = !on;
    if (on) shown += 1;
  });
  empty.hidden = shown !== 0;
  const label = document.querySelector(`.filter[data-filter="${filter}"]`)?.textContent || "Work";
  count.textContent = shown === 1 ? `1 piece · ${label}` : `${shown} pieces · ${label}`;
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => {
      const on = item === button;
      item.classList.toggle("is-on", on);
      item.setAttribute("aria-pressed", on ? "true" : "false");
    });
    applyFilter();
  });
});

document.querySelectorAll(".view-btn").forEach((button) => {
  button.addEventListener("click", () => {
    grid.classList.toggle("is-list", button.dataset.viewMode === "list");
    document.querySelectorAll(".view-btn").forEach((item) => {
      const on = item === button;
      item.classList.toggle("is-on", on);
      item.setAttribute("aria-pressed", on ? "true" : "false");
    });
  });
});

function openLightbox(project) {
  if (project.video) {
    lightboxImg.hidden = true;
    lightboxImg.removeAttribute("src");
    lightboxVideo.hidden = false;
    lightboxVideo.src = project.video;
    lightboxVideo.play().catch(() => {});
  } else {
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.hidden = true;
    lightboxImg.hidden = false;
    lightboxImg.src = project.image;
    lightboxImg.alt = project.title;
  }
  lightboxCaption.textContent = `${project.title} — ${project.summary}`;
  lightbox.hidden = false;
  lightboxOpen = true;
}

function closeLightbox() {
  lightboxVideo.pause();
  lightboxVideo.removeAttribute("src");
  lightboxVideo.load();
  lightbox.hidden = true;
  lightboxOpen = false;
  lightboxImg.removeAttribute("src");
}

document.querySelector("#lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

applyFilter();

const canvas = document.querySelector("#scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setClearColor(0x000000, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 10, 22);
const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
camera.position.set(0, 0, 8.2);

scene.add(new THREE.AmbientLight(0xffffff, 0.55));
const key = new THREE.DirectionalLight(0xfff2d2, 2.4);
key.position.set(-4, 3.5, 6);
scene.add(key);
const rim = new THREE.DirectionalLight(0xf5a623, 2.1);
rim.position.set(5, 1.2, -3);
scene.add(rim);

const background = new THREE.Group();
scene.add(background);

const sculpture = new THREE.Mesh(
  new THREE.IcosahedronGeometry(2.1, 1),
  new THREE.MeshBasicMaterial({ color: 0xf5a623, wireframe: true, transparent: true, opacity: 0.1 })
);
sculpture.position.set(-3.6, 0.4, -3.2);
background.add(sculpture);

const particleCount = 220;
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i += 1) {
  positions[i * 3] = (Math.random() - 0.5) * 16;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
}
background.add(new THREE.Points(
  new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(positions, 3)),
  new THREE.PointsMaterial({ color: 0xf5a623, size: 0.028, transparent: true, opacity: 0.75, depthWrite: false })
));

const sideMaterial = new THREE.MeshStandardMaterial({ color: 0xc4841d, metalness: 0.72, roughness: 0.32 });
const frontMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.78,
  metalness: 0.04,
  emissive: 0xffffff,
  emissiveIntensity: 0.62,
});
const backMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.72,
  metalness: 0.08,
  emissive: 0xffffff,
  emissiveIntensity: 0.5,
});
const portrait = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.08), [
  sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, backMaterial,
]);
const portraitGroup = new THREE.Group();
portraitGroup.add(portrait);
scene.add(portraitGroup);

const pointer = { x: 0, y: 0 };
const pointerTarget = { x: 0, y: 0 };
const portraitRest = { x: 0, y: 0 };
const portraitTurn = {
  x: portraitRest.x,
  y: portraitRest.y,
  vx: 0,
  vy: 0,
  held: false,
  steered: false,
  auto: !reduceMotion,
  lastX: 0,
  lastY: 0,
  id: 0,
};
let portraitClock = performance.now();

function resetPortraitSpin() {
  portraitTurn.x = 0;
  portraitTurn.y = 0;
  portraitTurn.vx = 0;
  portraitTurn.vy = 0;
  portraitTurn.held = false;
  portraitTurn.steered = false;
  portraitTurn.auto = !reduceMotion;
  portraitSlots.forEach((slot) => slot.classList.remove("is-turning"));
}

portraitSlots.forEach((slot) => {
  slot.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || slot !== activeSlot()) return;
    event.stopPropagation();
    portraitTurn.auto = false;
    portraitTurn.vy = 0;
    if (event.target.closest("a")) return;
    portraitTurn.held = true;
    portraitTurn.steered = true;
    portraitTurn.vx = 0;
    portraitTurn.vy = 0;
    portraitTurn.lastX = event.clientX;
    portraitTurn.lastY = event.clientY;
    portraitTurn.id = event.pointerId;
    slot.classList.add("is-turning");
    try { slot.setPointerCapture(event.pointerId); } catch { /* pointer already released */ }
  });

  slot.addEventListener("pointermove", (event) => {
    if (!portraitTurn.held || event.pointerId !== portraitTurn.id) return;
    const dx = event.clientX - portraitTurn.lastX;
    portraitTurn.y += dx * 0.012;
    portraitTurn.x = 0;
    portraitTurn.vy = dx * 0.012;
    portraitTurn.vx = 0;
    portraitTurn.lastX = event.clientX;
    portraitTurn.lastY = event.clientY;
  });

  slot.addEventListener("pointerup", releasePortrait);
  slot.addEventListener("pointercancel", releasePortrait);
});

function releasePortrait(event) {
  if (!portraitTurn.held || event.pointerId !== portraitTurn.id) return;
  portraitTurn.held = false;
  portraitSlots.forEach((slot) => slot.classList.remove("is-turning"));
}

document.addEventListener("dblclick", (event) => {
  if (!event.target.closest("[data-portrait]")) return;
  portraitTurn.steered = false;
  portraitTurn.vx = 0;
  portraitTurn.vy = 0;
});

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / Math.max(height, 1);
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);
}

function fitPortrait() {
  const slot = activeSlot();
  if (!slot) return;
  const rect = slot.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const distance = Math.max(camera.position.z - portraitGroup.position.z, 0.4);
  const visibleH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * distance;
  const visibleW = visibleH * camera.aspect;
  const ndcX = ((rect.left + rect.width / 2) / window.innerWidth) * 2 - 1;
  const ndcY = -(((rect.top + rect.height / 2) / window.innerHeight) * 2 - 1);
  portraitGroup.position.x = (ndcX * visibleW) / 2;
  portraitGroup.position.y = (ndcY * visibleH) / 2;
  portraitGroup.scale.set(
    (rect.width / window.innerWidth) * visibleW,
    (rect.height / window.innerHeight) * visibleH,
    1
  );
}

function lerp(current, target, amount) {
  return current + (target - current) * amount;
}

function frame() {
  const now = performance.now();
  const dt = Math.min((now - portraitClock) / 1000, 0.05);
  portraitClock = now;
  const ease = reduceMotion ? 1 : 0.075;
  pointer.x = lerp(pointer.x, pointerTarget.x, ease);
  pointer.y = lerp(pointer.y, pointerTarget.y, ease);

  if (portraitTurn.auto && !portraitTurn.held) {
    portraitTurn.y += dt * 0.22;
  } else if (!portraitTurn.held && !portraitTurn.steered) {
    portraitTurn.y = lerp(portraitTurn.y, portraitRest.y, reduceMotion ? 1 : 0.045);
  } else if (!portraitTurn.held) {
    portraitTurn.y += portraitTurn.vy;
    portraitTurn.vy *= 0.94;
  }

  const showPortrait = portraitPages.has(document.body.dataset.view);
  document.body.classList.remove("portrait-overlay");
  renderer.setClearAlpha(1);
  background.visible = true;
  portraitGroup.visible = showPortrait;
  portraitTurn.x = 0;
  portraitTurn.vx = 0;
  if (showPortrait) {
    fitPortrait();
    portraitGroup.rotation.x = 0;
    portraitGroup.rotation.z = 0;
    portraitGroup.rotation.y = portraitTurn.y;
  }
  const yaw = Math.atan2(Math.sin(portraitGroup.rotation.y), Math.cos(portraitGroup.rotation.y));
  const pitch = Math.atan2(Math.sin(portraitGroup.rotation.x), Math.cos(portraitGroup.rotation.x));
  const showingBack = showPortrait
    && !portraitTurn.auto
    && !portraitTurn.held
    && Math.abs(Math.abs(yaw) - Math.PI) < 0.55
    && Math.abs(pitch) < 0.6;
  const current = activeSlot();
  document.querySelectorAll(".card-links").forEach((links) => {
    links.hidden = !(showingBack && current && links.parentElement === current);
  });

  background.position.x = pointer.x * -0.45;
  background.position.y = pointer.y * 0.22;
  sculpture.rotation.y += reduceMotion ? 0 : 0.0018;
  sculpture.rotation.x += reduceMotion ? 0 : 0.0007;
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

new THREE.TextureLoader().load("assets/hero-portrait.png", (texture) => {
  texture.colorSpace = THREE.SRGBColorSpace;
  frontMaterial.map = texture;
  frontMaterial.emissiveMap = texture;
  frontMaterial.needsUpdate = true;
  document.body.classList.add("has-webgl");
});

function trackedText(ctx, text, x, y, spacing) {
  const chars = [...text];
  const widths = chars.map((char) => ctx.measureText(char).width);
  const total = widths.reduce((sum, width) => sum + width, 0) + spacing * (chars.length - 1);
  let cursor = x - total / 2;
  chars.forEach((char, index) => {
    ctx.fillText(char, cursor, y);
    cursor += widths[index] + spacing;
  });
}

function wrapLines(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const trial = line ? `${line} ${word}` : word;
    if (ctx.measureText(trial).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = trial;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function paintBusinessCard() {
  const width = 1500;
  const height = 1000;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#100e0c";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#f5a623";
  ctx.lineWidth = 8;
  ctx.strokeRect(42, 42, width - 84, height - 84);
  ctx.strokeStyle = "rgba(245, 166, 35, 0.35)";
  ctx.lineWidth = 2;
  ctx.strokeRect(62, 62, width - 124, height - 124);

  ctx.fillStyle = "#f5a623";
  ctx.font = "600 58px Montserrat, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  trackedText(ctx, "LOVEJOY VISUALS", width / 2, 210, 16);

  ctx.strokeStyle = "#f5a623";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 92, 268);
  ctx.lineTo(width / 2 + 92, 268);
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.font = "400 40px Montserrat, sans-serif";
  ctx.textAlign = "center";
  const lines = wrapLines(
    ctx,
    "Lovejoy Visuals is the bridge where human ingenuity and computer capabilities coordinate.",
    1080
  );
  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, 360 + index * 58);
  });

  const contacts = [
    "410-699-7677",
    "lovejoyc.design@gmail.com",
    "LinkedIn  ·  lj-chirombo",
  ];
  ctx.font = "500 34px Montserrat, sans-serif";
  contacts.forEach((line, index) => {
    ctx.fillStyle = "#f5a623";
    ctx.font = "600 22px Montserrat, sans-serif";
    ctx.fillText(["PHONE", "EMAIL", "LINKEDIN"][index], width / 2, 655 + index * 92);
    ctx.fillStyle = "#ffffff";
    ctx.font = "500 36px Montserrat, sans-serif";
    ctx.fillText(line, width / 2, 698 + index * 92);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
  backMaterial.map = texture;
  backMaterial.emissiveMap = texture;
  backMaterial.needsUpdate = true;
}

document.fonts.ready.then(paintBusinessCard);

window.addEventListener("pointermove", (event) => {
  pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointerTarget.y = (event.clientY / window.innerHeight) * 2 - 1;
});
window.addEventListener("resize", resize);

const initialName = location.hash.replace("#", "") || "home";
const initial = pages.findIndex((sheet) => sheet.dataset.page === initialName);
settle(initial < 0 ? 0 : initial, false);
resize();
document.body.classList.add("is-ready");
requestAnimationFrame(frame);
