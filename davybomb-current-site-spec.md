# davybomb.com: the current Framer site, written out as a build spec

Captured **Nov 16, 2026** from the live site (www.davybomb.com) in a 1440×900 desktop browser, plus one phone-size check.
This file is the source of truth for migrating off Framer. Full-page screenshots are in `screens/` (file names match the page numbers below).
Build plan (what we're building, decisions, needs, build order): https://claude.ai/artifact/7esCYkPKAeKkThsMEZXXrM

---

## 0. Quick facts

| | |
|---|---|
| Built with | Framer (generator tag `Framer d039229`) |
| Canonical host | `https://www.davybomb.com` (apex redirects to www) |
| Domain registrar | Porkbun |
| Pages | 13 (see sitemap) |
| `<title>` | "David Bomhoff" on **every** page |
| Meta description | "Designing experiences." on every page |
| Social share image | none |
| Fonts | Montserrat only (Google Fonts), weights 300–900 |
| Layout | Single fixed desktop canvas about **1728px wide**. No tablet or phone layouts (zero CSS media queries) |
| Assets | ~166 images/videos on Framer's CDN (`framerusercontent.com`), listed in §5 |

## 1. Sitemap

```
/                      01  Home: hero + 4 featured project cards
/about                 02  About me
/gallery               03  "The Gallery": grid of 9 art pieces
/boostra               04  Case study: Boostra Music (brand + UI)
/gopher-gather         05  Case study: Gopher Gather (UX)
/delerium              06  Case study: Delerium typeface
/elation               07  Case study: Elation Properties / The Oaks rebrand
  /elation/print       08  Print promos (Forte Living, The Butte, Yellowstone)
  /elation/solara      09  Solara brand concept
  /elation/social      10  Social media posts
  /elation/flyers      11  Promo flyers
  /elation/in-company  12  Email signatures, business cards, emails
  /elation/webads      13  Digital ads (banners, video, GIFs)
```
Top nav links: Home, Gallery, About. Case studies are reached from the Home cards and from "More UX / More Graphics" tiles at the bottom of case studies. The Elation sub-pages are reached only from the "More from Elation" grid on `/elation`.

## 2. Global design system (as built)

### 2.1 Color tokens (pulled from computed styles)
| Suggested token | Hex | Where it's used |
|---|---|---|
| `--espresso` | `#301B00` | Page/hero background, footer, label tiles |
| `--cream` | `#F0EEE9` | Main text on color (all display type) |
| `--sand` | `#F2D398` | Content-area background, nav hover fill |
| `--crimson` | `#8E101F` | HOME tile, cards, boxes |
| `--denim` | `#334A84` | GALLERY tile, cards, boxes |
| `--plum` | `#743362` | ABOUT tile, cards, boxes |
| `--tangerine` | `#FF530E` | "b" of logo, accents, email link, label tiles |
| `--marigold` | `#FFA003` | "d" of logo, accents, gallery background |
| (Elation tiles text) | `#EDEBE4` | "More from Elation" tile labels |
| (Boostra) | `#FEB8FF` pink, `#352C67` indigo | Boostra hero |
| (Gopher Gather) | `#3B0300` | Hero gradient end |
| (Back bar) | dark charcoal, about `#2E2E2E` | "< BACK TO ELATION" bars |

### 2.2 Typography
- **Montserrat** everywhere.
- Display: 900 weight, 62–166px (nav labels 75px, hero titles 150px, card titles 60–159px).
- Tags/subheads: 800 weight, 22–30px, all caps, separated with " - " (e.g. `BRAND - UX - FIGMA`).
- Section headers: 700 weight, 50–72px, all caps.
- Body: 500 weight, **36px** on case studies (very large), 21px on About; 400 weight on Elation pages.
- Small print: 10–16px (speech bubble, skills list, "(hover to see)").

### 2.3 Logo
- A monoline **"d" (marigold) and "b" (tangerine)**: two looping strokes that hang down from the top edge of the page like cords, drawn as SVG strokes.
- On Home/About the loops complete the name in Montserrat 900 at 110px: "**avid**" (marigold) / "**omhoff**" (tangerine).
- Tagline (Home only): "graphic & experience design", 33px, 900, cream.
- On case studies only the loops appear (top-left).

### 2.4 Mascot
- A cartoon **dog in a blue suit** (`f2t9ObYgJjXZg6vuoZabbeEUF4.svg`) peeks over the Gopher Gather card on Home, holding the card edge.
- Speech bubble image (`GVgArhU8ohUxuXVCYv5ta6Ya2w.png`) with live text: *"Check out my highlighted projects here, or take a look at my past work in the gallery!"* (10px, 500).
- The same dog appears in the Gallery's pool poster and in one of the gopher-uniform illustrations.

### 2.5 Navigation
- Three full-height color tiles across the top: **HOME** (crimson), **GALLERY** (denim), **ABOUT** (plum). Label 75px/900 cream, with a duplicate label in the tile color offset 1–3px behind it (a subtle shadow/emboss).
- **Hover:** the tile fills with sand and the label turns the tile's original color (inverted). See `screens/01-home--hover-nav-tile.jpg`.
- Tile widths change on some case studies (Boostra's nav is wider and ABOUT is cut off at 1440).
- Elation sub-pages have **no top nav**. They use a giant page title at the top and a charcoal "**< BACK TO ELATION**" bar at the bottom.

### 2.6 Footer
- Espresso bar: "David Bomhoff" (18px/700 cream) left, `davidjbomhoff@gmail.com` (18px/400 tangerine, mailto) right.
- Present on every page **except Home**.

### 2.7 Motion and interactions in use
- **Scroll "appear" effects** (elements fade/slide in as they enter the screen).
- **Project cards (Home):** a tinted overlay with the title sits on top. On hover the overlay and title fade out and a muted, looping **video** of the project plays in full color. See `screens/01-home--hover-project-card.jpg`.
- **Carousels** with arrows and dots (Boostra personas, Boostra logo process, In-Company emails).
- **Marquee/ticker** (Boostra sketches).
- **Hover-to-reveal cards** (Gopher Gather: Project Goal, Our Project, Persona "(hover to see)").
- **Click-to-navigate feature columns** (Gopher Gather "Features (click to navigate)").
- **Quiz** (Elation: "Which concept was chosen?", three buttons, then a result banner + "Guess again"). See `screens/07-elation--quiz-answered.jpg`.

## 3. Page by page

> Copy is verbatim from the live site (typos included, flagged in §4). "y" values are page positions in px at 1440 wide, there so the screenshots can be matched up.

### 01 Home `/` (1418px tall; no footer)
1. **Nav tiles.**
2. **Hero (espresso):** d/b loops + "avid / omhoff" + tagline "graphic & experience design".
3. **Mascot + speech bubble** (copy above).
4. **Featured project grid** (bento layout, colored frames):
   | Card | Frame | Text | Hover video | Links to |
   |---|---|---|---|---|
   | Delerium | denim, square | DELERIUM / TYPEFACE / `ILLUSTRATOR - TYPOGRAPHY` | `su9WPhITqPUPfFfINeZOnQzoBdU.mp4` (framed print) | `/delerium` |
   | Boostra | plum, tall right column | BOOSTRA / MUSIC / `BRAND - UX - FIGMA` | `6eLcrcbOknkeIysajqp3bx1aEE.mp4` (phone mockup) | `/boostra` |
   | The Oaks | tangerine | THE / OAKS / `BRANDING - MARKETING` | `dy2XA312xLz1Op81UXcb57XLuI.mp4` (building footage) | `/elation` |
   | Gopher Gather | crimson, wide bottom-left | GOPHER / GATHER / `UI - UX - CASE STUDY` | `uPhRQ4Kpcaintfnmmdw7kSpk.mp4` (app screens) | `/gopher-gather` |
5. About 500px of empty espresso space below the grid.

### 02 About `/about` (1350px)
1. Nav. Logo loops + "avid / omhoff". **"ABOUT ME"** at 150px (cut off at the right edge at 1440).
2. Sand area:
   - Photo of David (`pE0QyaaWQZJ9HVb4mCitd170Erk.jpg`) with two orange icon buttons: LinkedIn (`https://www.linkedin.com/in/davidjbomhoff/`) and email.
   - Plum box: **GRAPHIC & UX DESIGNER / UMN CLASS OF 2026**
   - Crimson box (bio): *"I'm David Bomhoff and I love to design experiences for other people. I grew up working at a grocery store in South Dakota where my interactions with customers shaped my strong work ethic. Whether it be how a customer interacts with a brand or how a user interacts with a website, I strive to create experiences that are customer forward. Graduating from the University of Minnesota in 2026, I look to bring my skills in Experience Design, Problem Solving, and Graphic Design to use for the betterment of our world."*
   - **SKILLS** label + denim list: ADOBE SUITE, UX PROTOTYPING, BRAND IDENTITY, TYPOGRAPHY, USER EXPERIENCE, INTERFACE DESIGN, COLOR THEORY, PACKAGING DESIGN, SCREENPRINTING, EMAIL DESIGN, HTML/CSS/JS, VIDEO EDITING, PROBLEM SOLVING
3. An Instagram link (`https://instagram.com/davybomb`) exists in the page markup.
4. Footer.

### 03 Gallery `/gallery` (2574px)
1. Nav. Logo loops. **"THE / GALLERY"** 166px marigold (cut off at right).
2. Marigold background, two-column masonry of 9 pieces, **no captions, no click/lightbox**:
   - "pool: the official sport of beer" poster (mascot dog playing pool) `hqngvI8ACjCs24dCLMW0RvyzLE.png`
   - Piatti di Roma packaging (Luigi Manglone) `glsBSfl0rM7KDLMv9GCOydm2ESE.png`
   - PUNCH badge logo (brass knuckles; "Antifascists / Nazis") `iBfkuiNYtfmqWKAHUUvmlg6195U.png`
   - 4 gopher mascot uniform illustrations (2×2) `dILKPj…`, `mB8uW3…`, `bCScW8…`, `BBiIQa…` (only 323×380px on the CDN, so low-res)
   - "unveil" College of Design pattern `KjuM0Rs2FKwv9W1Qr1LWud7n1yY.png`
   - "Strikes / Ups / Downs / Gutters" collage `kQnergm5aFSGCnf8uvcaCfWuGk.jpg`
3. Footer.

### 04 Boostra `/boostra` (3990px)
1. Nav (wider variant).
2. **Hero:** indigo-to-violet gradient, tilted phone mockup (`y9oxWENUXB3KAMqufq1LPo9jkY.png`), BOOSTRA wordmark (lilac), "Pure Music." (36px, `#FEB8FF`).
3. Sand area, two columns:
   - Plum box: *"Boostra is a family-focused music app that I am helping a mentor of mine develop. For this project, I have been playing multiple roles: designing the app's branding and UI, as well as brainstorming features and UX insights. While still in early stages, this startup looks to have a beta released in early 2026."*
   - **PERSONAS** card (espresso) carousel, 4 personas with arrows + dots. Visible slide: *Charlie, Child, 8*. Problems: "Exposed to songs with inappropriate lyrics/themes." "Feels bad when parents say his favorite songs aren't okay…" Solutions: "Only parent-approved music is playable" "No risk of explicit lyrics, themes, or videos"
   - Denim box: logo-process carousel (B mark, 4 slides).
   - Espresso box: *"My first task was to create a branding identity for the app. After several weeks of ideation, I landed on a bold, blocky typeface with a subtle musical motif. Watch above to see my process. Explore my sketches below."*
   - Tangerine box: **sketch ticker** (~40 sketch images scrolling sideways).
   - Right column, stacked label tiles: **MOCKUPS** (marigold), **HOME** (plum), **MUSIC PLAYER** (denim), **SORTING** (crimson), **AURA** (tangerine), **GLASS DESIGN** (espresso). Cut off at the right edge at 1440.
   - Denim box: *"Mark and I continue meeting a few days a week alongside my studies. As of now we are working on creating a customer base to prove our concept and hopefully achieve funding. You can help support our progress and see the most current updates at boostramusic.com"* (link: `https://boostramusic.com`)
4. **MORE BRAND:** (plum) over an **empty denim box** (missing image). **MORE UI:** (crimson) over a marigold tile with the delirium wordmark.
5. Footer.

### 05 Gopher Gather `/gopher-gather` (4251px)
1. Nav. **Hero:** black→maroon gradient, phone mockup (`KAVFuN47H4JlnAJQMnRwNuHeVU.png`), **GOPHER / GATHER** (150px) + **UX CASE STUDY** (100px).
2. Crimson box: *"An app designed to give new students opportunities to meet their fellow gophers and find communities at UMN."*
3. Sand area:
   - **PROJECT GOAL** (plum tile, hover reveals): *"For the final project in my UX Design class, my team was tasked with designing an app that would be useful for all current and future students at the University of Minnesota After much brainstorming, we landed on a concerningly present problem in our society: loneliness. After the COVID-19 lockdown, many people became isolated and lost/missed the chance to form social skills that would become imperative in a social atmosphere such as higher education. With technology present in our lives as ever, we sought out to build an app that would encourage students to go out and explore activities in their communities, meeting new people and groups along the way."*
   - Photo of students on phones (marigold frame).
   - Goldy-style gopher illustration peeking in from the left.
   - **OUR PROJECT** (crimson tile, hover reveals): *"Our end product is Gopher Gather; an app hosting the time, date, and location for events happening on and off campus, with social features and rewarding functions that keep students coming back and exploring their community. Our hope is that with this app, Gophers would be more inclined to participate in social events and make lasting connections in their time at the university."*
   - App demo video (`wTxHYcKaxYAGnt0zyeBEns9ygSk.mp4`) in a tangerine tile on the right.
   - **PERSONA** "(hover to see)": photo, *Maya Thompson, 20 y/o college student*.
   - **FEATURES** "(click to navigate)": 5 colored columns, each with a phone screen (profile, saved events, edit profile, clubs map, friends).
4. **VIEW OUR PRESENTATION:** → `https://z.umn.edu/gophergather`. **PROCESS** tile (cut off).
5. **MORE UX:** → Boostra tile. **MORE GRAPHICS:** → Delerium tile.
6. Footer.

### 06 Delerium `/delerium` (2615px)
1. Nav. **Hero:** dark brown patterned background (`sdKNtc9Gd3KSzA482gpKckIa2aU.png`) with the giant cream "delirium" wordmark (`N5TV4X0jeCvg9aJLkwdxCxxpLNM.png`).
2. Plum box: *"Inspired by a Belgian strong ale which branding appealed to me, Delerium is a psychedelic font I created using a set of swirly flourishes. When put to use, this font makes typography as strong as its' namesake!"*
3. Tangerine-framed can mockups (`qAoCLRC5nfJnwX8lNzTvcX1ijE.png`).
4. Crimson panel: full a–z glyph set in cream.
5. Denim box: *"Above, I mocked up what I imagine Delirium Tremens' cans would look like had they used my font. Although this isn't a practical font for body copy, it certainly has applications for branding, event promotion, and anything that a designer would want to feel cool and jazzy. Using just the five elements shown below, I created a vector set of 26 characters with spirals, swirls, and imbalance that create just the right vibe for a psychedelic display face."*
6. Marigold box: the five building-block shapes (espresso).
7. Footer.

### 07 Elation / The Oaks `/elation` (12,386px, the longest page)
1. Nav. **Hero:** aerial building video (`dy2XA312xLz1Op81UXcb57XLuI.mp4`) with denim tint, **ELATION PROPERTIES** (150px), caption "Video: Silver Lake Crossing (edited by me)".
2. Espresso box: *"For the past two summers, I've been working as a Graphic Design Intern for Elation Properties, managing over 15 brands for apartment buildings across the midwest. As the company has grown, I've had several opportunities to create branding for properties, shown here in my case study for rebranding a South Dakota apartment community."*
3. Tangerine band: **THE OAKS**: *"This summer I had the opportunity to rebrand an identity for a whole apartment complex, anticipating the next building coming next June! For this effort, I built 3 fleshed out brands and presented them to the marketing department and ownership, with one brand becoming the new identity in the end."*
4. Espresso band: **THE OLD BRAND** + old logo + *"Built in 2019, this brand was due for a refresh. The multicolor logo and thin wordmark were hard to scale, and the color pallette was hard to work with. Needless to say, when the VP said it was time to rebrand, I was more than happy to take it on. He said the brand needed modernization, a refresh for today. I took three different directions for this project: the Acorn, Leaves, and Branches."*
5. Palette strip (two rows of five): `043F59 703F19 BDD632 E18D2D 353626` / `075458 55342B 9EAF09 E18C2B 54512B`.
6. Sand: **THE NEW PALETTE**: *"I didn't want to change everything about the brand, as the building itself inspired the old brand, so I instead refreshed the colors to be bolder and more confident."*
7. **ACORN** board: logo, badge, type (Primary Baskerville URW / Secondary Eras Medium), packaging seal, wordmark, acorn pattern, icon, storefront mockup.
8. **LEAVES** board: logo, badge, type (Primary Gilgongo Kaps / Secondary Gill Sans), wreath logo, business card on gravel, branch pattern, STICKERS, A-frame sign "New building coming soon".
9. **BRANCH** board: logo, badge, type (Primary Semplicita Pro / Secondary Perpetua), stacked lockups, PATTERN, tote bag, phone case.
10. Espresso band: **WHICH CONCEPT WAS CHOSEN?** *"All three directions went in front of the owners. Tap the concept you think won."* Buttons ACORN / LEAVES / BRANCHES. Wrong pick shows "INCORRECT! ACORN WAS CHOSEN FOR THE OAKS." + GUESS AGAIN. (**Answer: Acorn.**)
11. Sand: **MORE FROM ELATION** grid (each tile also holds a preview image): DIGITAL ADS (marigold) → `/elation/webads`, SOLARA BRAND (crimson) → `/elation/solara`, IN-COMPANY MATERIALS (tangerine) → `/elation/in-company`, PRINT PROMO (denim) → `/elation/print`, FLYERS (plum) → `/elation/flyers`, SOCIAL MEDIA (marigold) → `/elation/social`.
12. Footer.

### 08 Print promos `/elation/print` (3629px)
- **PRINT PROMOS** (denim, 150px).
- **FORTE LIVING** (label) + crimson box: *"Forte Living, a chain of 55+ living communities across the Midwest, was looking to fill up their Brookings, SD location as they plan another building. My task was to create a series of mailers that would be sent out to prospective tenants, higlighting deals and amenities."* Mailers: "Get Active!", "Come Home to Forté Living", "May Move-In Special".
- **THE BUTTE** (label) + denim box: *"The Butte is one of the company's newest properties, beginning the expansion into Wyoming in 2026. With this being a newer brand to work with, I had to realize a lot of the branding in a transition period where the marketing director left our company. On the left you can see examples of a flyer and a couple mailers I made for this property. After much thought on how to display this brand, I ended up using silhouettes of natural curves formed on buttes and mountains that would be surrounding this property in Gillette, WY. Working with this property helped me a lot with creating cohesive elements within a brand."* 4 mailers + "Now Touring" flyer.
- **YELLOWSTONE** (label) + plum box: *"The Yellowstone is another of Elation's new properties opening up in Wyoming. When we opened our regional office in Casper, I was tasked with making these window clings to promote leasing. These are currently displayed on our office situated across the street from the prospective building. I've mocked them up on the right."* 3 window-cling mockups.
- **< BACK TO ELATION**, footer.

### 09 Solara `/elation/solara` (3397px)
- **SOLARA BRAND** (crimson, 150px; cut off on the left edge).
- Denim box: *"Throughout the internship, I worked on my capstone project: a branding concept for Solara, an apartment community opening in 2027. This was presented alongside a couple other concepts developed by the Graphic Designer. For my concept I took inspiration from  art-nouveau styles, looking to create a classy, gatsby-esque environment for the tenants."*
- **WEBSITE** label + a long website mockup (`7SDzPoenXr2ABjVMLVEZvOnTyg.png`, 859×3665).
- **BRAND**: logo mark, **WORDMARK**, **LOGO**, type specimens (Title: Mongolian Baiti; Body: Centaur), palette `494958 6D2211 B06628 962F1F BACAD5 B78837`, collateral (Solara Screens postcard, Come Home postcard, mug, posters).
- **< BACK TO ELATION**, footer.

### 10 Social `/elation/social` (1559px)
- **SOCIAL MEDIA** (tangerine).
- Denim box: *"Social media posts were a constant job for me over this internship. I worked closely with our event planner to get the details for each event as early as possible. Alongside events, I created standard Resident Spotlight templates for every property."*
- 6 square posts + 2 wide (Abbey Road Grand Opening Celebration; Forté Living Oktoberfest).
- **< BACK TO ELATION**, footer.

### 11 Flyers `/elation/flyers` (2536px)
- **PROMO FLYERS** (plum).
- Denim box: *"During my time with Elation, I was tasked with creating several flyers for events, tenant guidelines, and promotions. These flyers strengthened my abilities to work within a diverse variety of brands."*
- 8 flyers: Car-wash etiquette (Gurney Flats), Dakota Estates Summer Bash, Respect the Grill, Forté Upcoming Events, Bring Visitors Get Rewarded, Casper Wyoming "Reserve this space", Flats template, Abbey Road Grand Opening.
- Plum box: *"Above and to the right are some templates I created to be used across properties. Room reservation is above, and a general event template to the right."*
- **< BACK TO ELATION**, footer.

### 12 In-Company `/elation/in-company` (2388px)
- **IN-COMPANY / MATERIALS** (tangerine).
- Denim box: *"My first project was working on email signatures for employees across all properties, applying their property logo to each one. For the corporate employees I included an Elation Properties logo (or Stencil Group, if applicable). The goal with these was to create signatures that looked sleek, professional, and communicate what the company does."* + 3 signature images.
- 4 business cards + plum box: *"I had the opportunity to create business cards for a couple of people in my ofice. Joe asked for a simple, Elation Branded card, while Shane requested one blending both the Elation and Stencil Group brands, including a Grateful Dead easter egg to show one of his interests."*
- Email carousel (3 emails, arrows + dots) + espresso box: *"Throughout my internship, I created a slew of emails used to communicate with residents, as well as in-house communications. These each had to be branded to every property, and in the case of in-house communications, the company brand as well."*
- **< BACK TO ELATION**, footer.

### 13 Digital ads `/elation/webads` (1643px)
- **DIGITAL ADS** (plum).
- Denim box: *"I made the banners below for a few different properties' websites in order to promote a limited time offer for first-time leases."* + 2 banners ("Enjoy Three Months FREE & A Year of Streaming on Us!", "One Month FREE Rent").
- 2 vertical videos (Canva Facebook ads: food trucks; Forté Oktoberfest) + crimson box: *"I created the above videos in Canva as Facebook advertisements for a couple events at our properties."*
- Plum box: *"The marketing director had me finish up these digital ads she was working on, to be sent out on websites near Pierre, SD."* + 3 animated GIF ads (Abbey Road, 300×250).
- **< BACK TO ELATION**, footer.

## 4. Problems found (fix these in the rebuild)

1. **Not responsive.** One fixed ~1728px canvas. On a phone you see a zoomed-in crop of the desktop layout (`screens/01-home--phone-375.jpg`).
2. **Clipping on normal laptops.** At 1440 wide, right-hand content is cut off: "ABOUT ME", "THE GALLERY", Boostra's right column, "PROCESS" and "MORE GRAPHICS" tiles, Boostra nav. "SOLARA BRAND" is cut off on the left. Home scrolls sideways a few pixels.
3. **SEO/sharing:** identical title and description on all pages, no share image, no alt text on any image, nav labels are `<h1>` headings (many h1s per page).
4. **Hover-only content** (Gopher Gather goal/project/persona) can't be seen on touch screens.
5. **Broken/empty:** Boostra "MORE BRAND" tile has no image.
6. **Home** has no footer and ~500px of empty space at the bottom.
7. **Dated copy:** "UMN Class of 2026 / Graduating… in 2026", Boostra "beta released in early 2026", "For the past two summers… Intern", "This summer…", Butte "expansion into Wyoming in 2026".
8. **Spelling:** "Delerium" (nav/URL/title) vs "Delirium" (wordmark, beer name); "higlighting", "ofice", "pallette", "its' namesake".
9. **Low-res gallery files** (gopher illustrations are 323×380 on the CDN). Need originals.
10. **No captions or context** on Gallery pieces; no way to enlarge.

## 5. Asset manifest (Framer CDN)

Images: `https://framerusercontent.com/images/<file>`
Videos (marked `A:`): `https://framerusercontent.com/assets/<file>`
(About 28 Framer-hosted `.woff2` font files on Home aren't needed. Montserrat comes from Google Fonts.)

**/ (home):** `SlrDTJZC0PCnlC4B7tH7akmJl2g.png`, `8LOr5XDowmjwtxxOyV8dRACFG0.png`, `f2t9ObYgJjXZg6vuoZabbeEUF4.svg` (mascot), `GVgArhU8ohUxuXVCYv5ta6Ya2w.png` (speech bubble), A:`6eLcrcbOknkeIysajqp3bx1aEE.mp4`, A:`uPhRQ4Kpcaintfnmmdw7kSpk.mp4`, A:`su9WPhITqPUPfFfINeZOnQzoBdU.mp4`, A:`dy2XA312xLz1Op81UXcb57XLuI.mp4`

**/about:** `pE0QyaaWQZJ9HVb4mCitd170Erk.jpg` (portrait), `0FUnnc6feNM9lmS0mm3Cbcp6Y.png`

**/gallery:** `glsBSfl0rM7KDLMv9GCOydm2ESE.png`, `hqngvI8ACjCs24dCLMW0RvyzLE.png`, `dILKPjVMraPhz1PdxcjHS2ktrWI.jpg`, `bCScW8cjlB6yfqRe4PhZNPCTnEQ.jpg`, `BBiIQaRz7GhexaywbHe0DOG9NXM.jpg`, `mB8uW3HpHNbtFghmOe3Gg7UnLms.jpg`, `iBfkuiNYtfmqWKAHUUvmlg6195U.png`, `kQnergm5aFSGCnf8uvcaCfWuGk.jpg`, `KjuM0Rs2FKwv9W1Qr1LWud7n1yY.png`

**/boostra:** `y9oxWENUXB3KAMqufq1LPo9jkY.png` (hero), personas `GCpJQdZ0JdckgWO52Wh2fbkWQ.jpg` `8CnOzWpUB6PmgAR8jTaZi1a54Q.jpg` `9X9MIJgeoR4GYXAjYtwizyJ8oWg.jpg` `sPvHevSH3qn8Xyh1cZVO9zFspI.jpg`, arrows `6tTbkXggWgQCAJ4DO2QEdXXmgM.svg` `11KSGbIZoRSg4pjdnUoif6MKHI.svg`, logo process `g5osglAaWuSdR4eO7OfH53wEFk.png` `bO9BCWYLXOtLxFryYvoCk1Ho.png` `f30waoxFCKcBIdkkOagFjlGbRs.png` `uRViAhdE1QJ1ZsT9NBTVKrltQUY.png`, sketches `rk2ZMzq3DgDfTZq6cJ8nE7pk.png` `7emX4hhmDQdoyEIbgkxm9MAFw.png` `FkOVFEkdVqANtDlPnYnpTFwgnk.png` `ZcxPL1I37kMGfGzYoRHSt60WhwE.png` `QPyd1yGmO8QlMGjP3qUteTT2QHE.png` `Boz0yAcOIklZnDlB3tFdOJ95QQ.png` `O39D2wBxvfYF6Yf9hlJIC55lmY.png` `YOubAMW9IsFQnL1smJxwWE2k2k.png` `rcFbotHQrEwoH1scsG4LaB8Pchs.png` `yeecwYHQ7t9aL6RXIMzkal6XrpM.png` `Z8iGtOnG6XomSr5vJDW4ZUKU1KE.png` `Ojc3JVzmJKI0GRJrg65AN60Zgac.png` `udDizFpB9zTFiACnAm2Kha8eRU.png` `ZeLtFYFAWgtwc5QaUl8NBp2tQc0.png` `gdChlcqsCsj6asqRet9Mffm5YI.png` `d3xyXRaMbGxh4iKwbTy2nmEHong.png` `0QNsPbYFXwvigem5n1WE7dabBD0.png` `foJ0JoarluljVLZj8LnqM3Hks.png` `lc3bpVL2I5TCbuRndxdGsn1Fuk.png` `kujED1VSlhnFS0KksyHIQLg4jtE.png` `3xg0CkWlcmXPpZxGpUNZmQ3XA14.png` `kuw8yMKgnxs0t6Oan2SRmrpZIJ8.png` `7psGdt23G7YessamuOVn3EkZds.png` `y3spZSs1nQ44uZr0b60PgC6zI.png` `CrMoZvaECFflVk8BhrzCoUR2vI.png` `IJelvJSbgVYga81QoJrTO80FmQ.png` `pirjIz5XDkif0ponUKdyhm2CBrs.png` `vbDRYTS3orTjMgCvh8tOuwQIE0.png` `QCXFwavNUPKgxXJ8ZIwDtw0RZ4.png` `GsVMbTgPR3f5jXbWYKr6gCqKM.png` `6qBGVMgnNTyDI0GUxr4rc3HbqdA.png` `sGIrMkhKRgejFTKMQLUPw4vMBE.png` `QSNqCLirzpVhzuuyi9zXG3LZYTg.png` `CS65WmAEoRmzjhWgi21bstwEXYU.png` `eeMqAc4J3PgyFsIkxOWWHijF6Mk.png` `l79aerj7OotWVL76ubBfxsqAkzU.png` `uoVg5QSPt268Y0TQ8WxfNjevzo.png` `jHwPaex8BOEEUOYuLd0OBD1s2Qk.png` `0zUiRYlp0WQ7uHyJMuXOYuZwKg.png` `NiQfqAXTQTKME11wbY1w7iTg.png`, delirium wordmark `N5TV4X0jeCvg9aJLkwdxCxxpLNM.png`

**/gopher-gather:** `KAVFuN47H4JlnAJQMnRwNuHeVU.png` (hero), `UKA9woa6395I8DKpKUThLgtV7rg.png`, `pcCLo0lttt1iE1LQQU33ACYcHJc.png`, `3zoyIYkXapnan7PtO238py5fiI.png`, `QvFNhoFGnPgVOZmFe338Dy6qlc.png`, `ThGI21m3sK2OivQtedfww1PppY.png`, `NXZ85kVfQGBeAZDQ8POfDKtPJps.png`, `pxBcOvKzh7sRxGl5MnH1cWetuqg.jpg`, `A9fNqFbkOAZi8cEGvtnqpm5ao.png`, A:`wTxHYcKaxYAGnt0zyeBEns9ygSk.mp4`

**/delerium:** `sdKNtc9Gd3KSzA482gpKckIa2aU.png` (pattern), `qAoCLRC5nfJnwX8lNzTvcX1ijE.png` (cans), `6akT9MoP4Q6o6LmELNF9sXwQ.png`, `bxC6eb7ctOjaKee5olP8c6qpUE.png`

**/elation:** `C58rnpVuV6eMD4gUHieH1JluEY.svg`, `jxNN8yLiPblOICtglJF9P3K3aow.png`, `mdIOd5LYoiNPM8jSbdKvEpEIyE.png`, `FJcU0Mlvkp14Xxt18WEnbQpmiI.svg`, `G1KKg9iH46Lu4n8HWUW28bZqA0s.png`, `2DduHfYM7awSyAz0r7zQuTFjPc.png`, `pIPPIlfeLED2dLWpEscsabFvyi4.png`, `WsAB7DAE0s7AWbUbwLc4pYG7mg.png`, `DtRvvVwkq60lNZ6nL2QHmxD8v9Q.png`, `W5Hyc684P9k6d1IJBbUSt2Xgi0.png`, `PQHpRJxudAw3ytdM2XFM55bujA.png`, `z0exVXQhcKeaWTImfC9XIVAn4k.png`, `miVWu9PaR02yewhMQdxvoYZe7A.png`, `QMoxTiCd859G9JD9FpJXuUYWHwM.png`, `i5ZucAdIP9jasz3af6gDCl4f2SY.png`, `mVsYRhVeR6X658iiSCKcFI7vwxQ.png`, `b8NkE3YdspRamADhMqQtZ6dObE.png`, `fyAu7knRbtNHxZxf9E9HbTrYChU.png`, `DfETz8oktxTiTp4db1NttSETA.png`, `6CyelIVmq4bDKDHYhhLkk9FHs.png`, `h3MOKvd3O6d9rZGaBlg0DI4.png`, `OaOHDtO0cDCLb1dMci16mHEUzc.png`, `jGmA3wLIvAJmlrioaqUMSg2ZVhs.png`, `xG6WoGFGoiYxSOZ1O2uf8Yywg.png`, `d0JDxpv07x05XYGFzZ6rb6Q.png`, `BdaQ4gGbxzksGqEH7KGyb2GBUXQ.png`, `JXTR0VZaV6ODclLyxQvrHyV3X0.png`, `iF7Si3qukuqzWqtlwdMKRsybwvA.png`, `cOeigZN1MniNiSEOO50wyZa9WUg.png`, `aqkl0KJVNchFYXsllL0XJzClUg.png`, `JpEUcvaCtoqA24zc7uOTWkHvk.png` (hero video is A:`dy2XA312xLz1Op81UXcb57XLuI.mp4`, shared with Home)

**/elation/print:** `QIL3PyBg75ONzWUOgcH4BecA.png`, `1b72DBkWrKkVIvtRnXZeFewdiXc.png`, `vBaDx1YbDn6ZMYgQo4S6MiqOyJc.png`, `IC11EP0UWXyP94FQcjnRuD9rOwY.png`, `gldePci1JDAvv9WhyrC9kEXS3o.png`, `Ke82lKzCBCyaaooUGXjlM4WlAQ.png`, `OkrcGImhLl8nDchWdgtiPB1uP4.png`, `VvfPjPXs3N1hV0oz69qmrm6zos4.png`, `5AYnHBxfNIarMIQkKkErQ7o5ORc.png`, `iaWApwhH5MBniMgBHMBkRqWQUnI.png`, `RKePoBgwk6uBTHykJSQF2diFDcc.png`

**/elation/solara:** `2NehobzE6EE9x5cQIrAI94Lroak.png`, `LgBHJprVnCiCGgIPuriXABLiEP8.png`, `5flI6WxPBDuViw07kWDthfiMKg.png`, `ete6ntdyMrsj6A845SVR29r69I.png`, `zNMEQSHy43c6WkdQVIc9vDRrA.png`, `7SDzPoenXr2ABjVMLVEZvOnTyg.png`

**/elation/social:** `vNidt3pqK2wtV1HgczRkHlaYmSs.png`, `KaG8g1ZOlpb73oem5SZzTFMd9U.png`, `0fM8WiY87fmw50QgaBHfbaKVms.png`, `ZD9rsZapbtyxhjL51GTmjeI5c.png`, `3QGadOGrOa6pcF4UXSjElPeUGM.png`, `ndUrYh1ypNgJbTitHtAkYWrOy7k.png`, `4vsmkNqndOhm8F2xfHp7GdhH0ro.png`, `cLdEUQXSSCLeDfnCbEW0ZUSpcQ.png`

**/elation/flyers:** `tV7NwO8w6HJCUl5S4bvup0CPjA.png`, `G9DiieHNOJO9X465cx8rasRKIHw.png`, `k7PgFK4yfGXq2fqJgSHTwriq2o.png`, `sDoz7mnuzRRX4Pp8bnBYmlSQk.png`, `mRphGPqm8B8h8m5IjdtEknHjes.png`, `qcmHCRWeqHAsd08qwu7kOdvQltw.png`, `UQCJhZbp29FQYxidtjOLaIZEc.png`, `FBiF45Mpr9fBK0IynuKgYT2s1U.jpg`

**/elation/in-company:** `edbApECriqV3FUfYBNXeUXoZBY.png`, `zdukfCi9fBZtGveNNPL70Ln4Ztg.png`, `8II9RMQKrp1tEUr57Ox6SQH9JOU.png`, `ePE5svPO7PtHVhpBKF9hdvm4.png`, `eDNz4ab4vHaqGwwTqKTJpYDRow.png`, `VIur9xBnALVmCzLjw1SCs6nydw.png`, `8q3QUOLJJhTBvwdTtRLNTUkVT0.jpg`, `G5ucWX98ijg6pjH0P676mX7AkEM.png`, `xSLsDEK3iDrhWbaLUSus64OvwJ8.png`, `79Jf3r4M5AAUPxUKciKyG0wIw.png`

**/elation/webads:** `b5WXiww7c6r1PyJ5WAuKTws1C0E.png`, `bdyNiawEvp9ACrgag1C2UBScSbU.png`, `jxrmM43L9oxdwfdOU0EsRbPbpo.gif`, `nmTeLg5jPrFpTlpH3KbXbgN90.gif`, `xeeZh1MpKVhjavRvmlHppFWcwKs.gif`, A:`tTagrlODiQr22Ot5gOlXjhdQ.mp4`, A:`xb4t5eyP4HOQycBxIlN56CvIjEg.mp4`

## 6. Screenshot index (`screens/`)
Full-page desktop captures at 1440 wide, saved 800px wide (about 0.55 scale):
`01-home`, `02-about`, `03-gallery`, `04-boostra`, `05-gopher-gather`, `06-delerium`, `07-elation-the-oaks`, `08-elation-print`, `09-elation-solara`, `10-elation-social`, `11-elation-flyers`, `12-elation-in-company`, `13-elation-webads` (each `--desktop-1440.jpg`).
Extras: `01-home--first-screen-hires.png` (first screen at full resolution), `01-home--hover-project-card.jpg`, `01-home--hover-nav-tile.jpg`, `01-home--phone-375.jpg`, `07-elation--quiz-answered.jpg`.
