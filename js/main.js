// ============================================================
// main.js — plain JavaScript, no libraries.
// Two jobs: (1) the homepage hover-swap gallery, (2) the draggable logo.
// Checks the elements exist first, so this one file works on every page.
// ============================================================

// ---------- 1. HOMEPAGE GALLERY ----------
// Your work goes here. type must be: "ux", "graphic", or "arcade".
// TODO (flagged, not decided for you): title/type below are guesses from the filenames in
// assets/home scroll/ — "Asset 1.png" and "Explore Player.png" also exist in assets/BOOSTRA/,
// so those two are confidently "ux"; the rest are just neutral guesses. Please correct them.
const works = [
  { src: "assets/home scroll/Adobe Scan Apr 1, 2025.jpg", title: "Scanned print piece", type: "graphic" },
  { src: "assets/home scroll/Asset 1.png", title: "Boostra app asset", type: "ux" },
  { src: "assets/home scroll/Asset 4.jpg", title: "Design asset", type: "graphic" },
  { src: "assets/home scroll/BeerSports-05.png", title: "BeerSports design", type: "graphic" },
  { src: "assets/home scroll/Explore Player.png", title: "Boostra Explore Player screen", type: "ux" },
  { src: "assets/home scroll/FATCATSV1-02.png", title: "Fat Cats brand design", type: "graphic" },
  // add more pieces here...
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
// Grab the ring/stem graphic (.logo-drag) — not the "avid"/"omhoff" text, not the speech
// bubble — and pull down to mimic pulling on the strings the rings hang from: the two
// .logo-string bars stretch (from 0 height at rest) and the rings slide down with them,
// undistorted, instead of the old version which stretched the whole graphic into an oval.
// Vertical movement only (e.clientX is never read), and letting go springs everything
// back to rest.
const logo = document.querySelector(".logo-drag");
const strings = document.querySelectorAll(".logo-string");
if (logo && strings.length) {
  let startY = 0;
  let maxStretch = 0;
  let stretch = 0; // current string length, 0 at rest
  let dragging = false;

  const setStretch = px => {
    stretch = px;
    strings.forEach(s => { s.style.height = `${px}px`; });
    logo.style.transform = `translateY(${px}px)`;
  };

  // move/up listen on the document, not on .logo-drag itself — moving the element inside
  // its own pointermove handler shifts its hit-test box mid-gesture, which was triggering
  // a spurious pointercancel (and an early spring-back) partway through a drag. Tracking
  // from the document sidesteps that entirely.
  logo.addEventListener("pointerdown", e => {
    dragging = true;
    startY = e.clientY;
    maxStretch = logo.getBoundingClientRect().height * 0.8; // string can grow up to 80% of the rings' own height
    logo.style.transition = "none";
    strings.forEach(s => { s.style.transition = "none"; }); // instant tracking while dragging
    logo.classList.add("logo-drag--dragging");
    e.preventDefault(); // stops the browser starting its own drag/selection gesture
  });

  document.addEventListener("pointermove", e => {
    if (!dragging) return;
    const deltaY = e.clientY - startY; // vertical distance only — e.clientX is never read
    setStretch(Math.min(maxStretch, Math.max(0, deltaY))); // strings only pull longer, never negative
  });

  const releaseDrag = () => {
    if (!dragging) return;
    dragging = false;
    logo.classList.remove("logo-drag--dragging");
    // Spring back: a bouncy easing curve overshoots slightly, like letting go of stretched elastic
    const spring = "height .5s cubic-bezier(0.34, 1.56, 0.64, 1)";
    logo.style.transition = spring.replace("height", "transform");
    strings.forEach(s => { s.style.transition = spring; });
    setStretch(0);
    logo.addEventListener("transitionend", () => { logo.style.transition = ""; }, { once: true });
  };

  document.addEventListener("pointerup", releaseDrag);
  document.addEventListener("pointercancel", releaseDrag);
}
