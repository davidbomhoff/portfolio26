# Claude Code Prompts — copy, paste, tweak
Each session's prompts assume you're in this folder with Claude Code running (`claude` in the VS Code terminal).
Golden rule: one component per prompt, paste a Figma screenshot with it whenever you can.

## Session: Sun 7/26 — setup + homepage skeleton
> Read CLAUDE.md. I've replaced the design tokens in css/styles.css with my real Figma values.
> Build the homepage layout in index.html to match this screenshot [paste Figma frame]:
> a header with my name/logo, three large buttons (UX DESIGN / GRAPHIC DESIGN / CASINO — the casino one
> looks powered-off with an "under construction" treatment), and below them an empty full-width gallery
> strip. Use the existing CSS classes where they fit. Explain the layout approach you chose.

> The spacing between the buttons and gallery is [X]px in Figma but looks bigger in the browser.
> Here's a browser screenshot [paste]. Fix it and tell me what was causing the difference.

## Session: Tue 7/28 — hover gallery
> In js/main.js there's a working hover-swap gallery with placeholder data. Replace the placeholder
> items with my real work: [list your images: filename, title, type ux/graphic/arcade].
> Images are in assets/gallery/. Keep the marquee seamless. Explain how the seamless loop works.

> When I hover the UX button, the gallery should crossfade instead of snapping. Make the transition
> 300ms. Explain what CSS property does the fading.

## Session: Sun 8/2 — UX page
> Build ux.html to match this Figma screenshot [paste]: three phone mockups side by side
> (stacked on mobile), each showing a screenshot from assets/phones/, each linking to its case study
> page. On hover the phone lifts up slightly. Use the .phone styles already in styles.css.

> Duplicate case-study.html as ux-project-1.html and fill it with this content: [paste from your
> case-study worksheet]. Then do the same for projects 2 and 3.

## Session: Tue 8/4 — graphic design page
> Build graphic.html: a short intro paragraph, then a filterable grid of my graphic design work.
> Filter buttons: All / Branding / Packaging / Print / Digital. The filter logic is already in
> js/main.js — wire the buttons to it and explain how the data-category attribute connects them.

> Add 4 floating icon illustrations from assets/icons/ scattered around the intro area using the
> .float-icon animation in styles.css. They should sit behind the text on mobile so nothing overlaps.

## Session: Thu 8/6 — arcade page
> Build arcade.html as a run-down arcade room: dark background, the scanline overlay and flickering
> neon sign styles from styles.css, and three arcade cabinet frames using my Illustrator art in
> assets/arcade/. Each cabinet screen is an iframe/canvas slot where a game will load. One extra
> cabinet is grayscaled with an OUT OF ORDER banner. Explain how the iframe embedding works.

## Session: Sun 8/9 — polish
> Go through every page at 375px, 768px and 1440px widths and list everything that breaks or
> overflows, worst first. Then fix them one at a time, telling me what each fix was.

> Check every image on the site for missing alt text and every link for a missing href.
> Add a :focus-visible outline to anything clickable that doesn't have one.

## Anytime: the 1:1 loop
> [paste Figma screenshot] vs [paste browser screenshot] — list the differences you can see,
> then fix them one at a time.
