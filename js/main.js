// ============================================================
// main.js — plain JavaScript, no libraries.
// Two jobs: (1) the homepage hover-swap gallery, (2) the draggable logo.
// Checks the elements exist first, so this one file works on every page.
// ============================================================

// ---------- 1. HOMEPAGE GALLERY ----------
// Your work goes here. type must be: "ux", "graphic", or "arcade".
const works = [
  { src: "assets/gallery/example-1.png", title: "Example UX project", type: "ux" },
  { src: "assets/gallery/example-2.png", title: "Example brand work", type: "graphic" },
  { src: "assets/gallery/example-3.png", title: "Example game art",  type: "arcade" },
  // add all your pieces here...
];

const track = document.querySelector(".gallery-track");
if (track) {
  // Build the images, TWICE — the animation slides -50%, so a duplicate set
  // means the end of copy 1 lines up with the start of copy 2 = seamless loop.
  [...works, ...works].forEach(w => {
    const img = document.createElement("img");
    img.src = w.src;
    img.alt = w.title;               // alt text = accessibility + SEO, never skip
    img.dataset.type = w.type;       // dataset reads data-* attributes in JS
    track.appendChild(img);
  });

  // When a mode button is hovered (or keyboard-focused), dim non-matching images.
  document.querySelectorAll("[data-mode]").forEach(btn => {
    const setMode = mode => {
      track.querySelectorAll("img").forEach(img => {
        img.classList.toggle("hidden-item", mode !== "all" && img.dataset.type !== mode);
      });
    };
    btn.addEventListener("mouseenter", () => setMode(btn.dataset.mode));
    btn.addEventListener("focus",      () => setMode(btn.dataset.mode)); // keyboard parity
    btn.addEventListener("mouseleave", () => setMode("all"));
    btn.addEventListener("blur",       () => setMode("all"));
  });
}

// ---------- 2. DRAGGABLE LOGO ----------
// Only the ring/stem graphic (.logo-drag) is draggable — not the "avid"/"omhoff" text,
// not the speech bubble, nothing else. Its height is normally set by CSS (--logo-reach
// on .brand-lockup, the parent it fills). This lets you grab it and pull it taller or
// shorter by hand — horizontal movement is ignored on purpose, and letting go springs
// it back to that CSS height.
const logo = document.querySelector(".logo-drag");
if (logo) {
  const minHeight = 0.6; // as a fraction of the CSS resting height
  const maxHeight = 1.6;
  let startY = 0;
  let startHeight = 0;
  let dragging = false;

  // move/up listen on the document, not on .logo-drag itself — resizing the element
  // inside its own pointermove handler shifts its hit-test box mid-gesture, which was
  // triggering a spurious pointercancel (and an early spring-back) partway through a drag.
  // Tracking from the document sidesteps that entirely.
  logo.addEventListener("pointerdown", e => {
    dragging = true;
    startY = e.clientY;
    // Read the height CSS is currently giving it — this only works because a finished
    // drag clears the inline style below, so this never reads a stale dragged value.
    startHeight = logo.getBoundingClientRect().height;
    logo.style.transition = "none";        // instant tracking while dragging
    logo.classList.add("logo-drag--dragging");
    e.preventDefault(); // stops the browser starting its own drag/selection gesture
  });

  document.addEventListener("pointermove", e => {
    if (!dragging) return;
    const deltaY = e.clientY - startY; // vertical distance only — e.clientX is never read
    const next = Math.min(startHeight * maxHeight, Math.max(startHeight * minHeight, startHeight + deltaY));
    logo.style.height = `${next}px`;
  });

  const releaseDrag = () => {
    if (!dragging) return;
    dragging = false;
    logo.classList.remove("logo-drag--dragging");
    // Spring back: a bouncy easing curve overshoots slightly, like letting go of stretched elastic
    logo.style.transition = "height .5s cubic-bezier(0.34, 1.56, 0.64, 1)";
    logo.style.height = ""; // let --logo-reach (CSS) take back over — stays responsive after this
    logo.addEventListener("transitionend", () => { logo.style.transition = ""; }, { once: true });
  };

  document.addEventListener("pointerup", releaseDrag);
  document.addEventListener("pointercancel", releaseDrag);
}
