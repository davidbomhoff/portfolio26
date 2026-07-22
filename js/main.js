// ============================================================
// main.js — plain JavaScript, no libraries.
// Job: the homepage hover-swap gallery.
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
