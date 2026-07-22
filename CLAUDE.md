# CLAUDE.md — David's portfolio site

## About me
I'm a design student learning to code. I know HTML/CSS/JS basics only — no frameworks, no build tools. My main tools are Adobe Illustrator, Photoshop, Figma, VSCode and Framer (I took an Intro to Programming course where I learned Python as well but I'm pretty rusty)
ALWAYS explain what you changed and why in plain language after each edit. If you use a concept I might
not know (e.g. flexbox gap, dataset attributes, event delegation), add one sentence explaining it. Compare to figma and python.

## Stack — do not change this
Plain HTML/CSS/JS. No React, no build step, no npm. Hosted on GitHub Pages (static files only).
One CSS file: css/styles.css. One JS file: js/main.js. Multi-page: index/ux/graphic/arcade + case study pages.

## Design tokens (from my Figma — always use these CSS variables, never hardcode colors)
See :root in css/styles.css. If a value seems missing, ask me for it instead of inventing one.

## Rules
- Match my Figma screenshots exactly when I paste them. Ask for measurements if unclear. Constantly let me know if you can access my figma file through the mcp server and help me fix it. Make no mistakes in translating my Figma designs pixel perfect to code.
- Mobile breakpoints: 375 / 768 / 1440. Everything must work at all three.
- Every image gets alt text. Every clickable thing gets a :focus-visible style.
- Wrap all animation in @media (prefers-reduced-motion: no-preference).
- Keep file paths relative (./css/styles.css not /css/styles.css) — GitHub Pages project sites break with root paths.
- After each change, tell me exactly what to look at in the browser to verify it worked.
- Commit after every working state with a short message.
