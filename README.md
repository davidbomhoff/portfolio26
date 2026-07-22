# David's Portfolio — Starter Kit
Vanilla HTML/CSS/JS, built for GitHub Pages + your custom domain.

## Get it running (5 min, one time)
1. Open this folder in VS Code.
2. Install the "Live Server" extension → right-click index.html → "Open with Live Server". That's your local preview.
3. Create a GitHub repo (public), then in the VS Code terminal:
   git init && git add . && git commit -m "starter kit"
   git branch -M main
   git remote add origin https://github.com/davybomb/YOUR-REPO.git
   git push -u origin main
4. On GitHub: repo → Settings → Pages → Source: "Deploy from a branch" → main / root. Your site is live at davybomb.github.io/YOUR-REPO in ~2 min.

## Custom domain (do this Aug 9, not before — keep Framer live until the new site is ready)
1. Edit the CNAME file in this folder: put your domain on one line (e.g. daviddesigns.com). Commit + push.
2. At your domain registrar, delete the Framer DNS records and add:
   - A records for @ → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME record for www → davybomb.github.io
3. Back in GitHub Pages settings, enter the domain and check "Enforce HTTPS" once it verifies (can take a few hours — that's why we do it Aug 9, not Aug 11).

## Folder map
index.html / ux.html / graphic.html / arcade.html — the four pages
case-study.html — duplicate + rename this for each project (ux-project-1.html, etc.)
css/styles.css — ALL styling. Design tokens at the top — replace with your Figma values first.
js/main.js — gallery hover swap + graphic page filters. Commented line by line.
content/ — cover letter draft + worksheets for case studies and game placards
PROMPTS.md — copy-paste prompts for Claude Code, one set per session
CLAUDE.md — Claude Code reads this automatically; it's your design system + rules
NEXT.md — end every session by writing one line here
SCHEDULE.md — the revised plan starting Jul 21
