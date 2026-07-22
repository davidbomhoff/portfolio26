// ============================================================
// main.js — plain JavaScript, no libraries.
// Two jobs: (1) homepage hover-swap gallery, (2) graphic page filters.
// Each block checks if its elements exist, so this one file works on every page.
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

// ---------- 2. GRAPHIC PAGE FILTERS ----------
// Cards need: <div class="card" data-category="branding"> ... </div>
// Buttons need: <button class="filter-btn" data-filter="branding">Branding</button>
const filterBar = document.querySelector(".filter-bar");
if (filterBar) {
  filterBar.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    // move the "active" style to the clicked button
    filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // show/hide cards by category
    const filter = btn.dataset.filter; // "all", "branding", "packaging"...
    document.querySelectorAll(".work-grid .card").forEach(card => {
      card.classList.toggle("hide", filter !== "all" && card.dataset.category !== filter);
    });
  });
}
