# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Active Skills

@.claude/skills/frontend-design/SKILL.md
@.claude/skills/senior-frontend/SKILL.md

## Project Overview

Sintectur is a corporate travel agency website built with **React + Vite**. Previously a single static HTML file, it was migrated to a component-based React architecture.

**Dev server:**
```
npm run dev
```

**Build:**
```
npm run build
```

## Tech Stack

- **React 19** with JSX
- **Vite 6** (bundler + dev server)
- **React Router DOM 7** (client-side routing via `createBrowserRouter`)
- **CSS Modules** — each component has its own `.module.css` file
- No UI library, no TypeScript

## Architecture

```
src/
  main.jsx                   # Entry point
  App.jsx                    # Router setup + Loader on initial load
  styles/index.css           # Global reset + CSS variables
  pages/
    Home.jsx                 # Single page — assembles all sections
  components/
    layout/
      Nav/                   # Navbar with hamburger + dropdown submenu
      Footer/
    sections/
      Hero/
      Services/
      About/
      MICE/
      Testimonial/
      CTA/
    ui/
      Button/
      Chip/
      Loader/                # Shown for 2s on first load
      SectionHeader/
      ServiceCard/
      StatItem/
  data/                      # Static content as JS exports
    nav.js / footer.js / services.js / mice.js / stats.js
public/
  Freeman.com-Website-Header-11_2025-v3-1.mp4   # Hero background video
```

## Styles

- **Global tokens** in `src/styles/index.css` (`:root`):
  - `--navy: #010626` — base oscuro, fondo de nav/hero/footer
  - `--cloud: #f9f4f0` — blanco cálido, fondo de secciones claras
  - `--gold: #f2bd1f` — acento principal (botones, labels, CTA)
  - `--sky: #5f9ce8` — acento secundario (celeste)
  - `--watermelon: #f2245b` — detalle, usar con moderación
  - `--gray: #8a8a8e` — texto secundario
  - Aliases: `--black = --navy`, `--white = --cloud`, `--accent = --gold`
- **Typography:** Codec Pro (archivos en `public/fonts/`), con fallback a system fonts
- **Per-component** styles via CSS Modules — import as `styles` and use `styles.className`
- **Responsive breakpoints:** `1024px` (tablet), `768px` (mobile), `480px` (small mobile)

## Making Changes

- **Colors/tokens:** Update `:root` in `src/styles/index.css`
- **Static content** (nav links, service cards, stats, etc.): Edit files in `src/data/`
- **New section:** Create `src/components/sections/MySection/MySection.jsx` + `MySection.module.css`, then import it in `src/pages/Home.jsx`
- **Mobile nav:** State managed in `Nav.jsx` with `useState` — `menuOpen` toggles the menu, `submenuOpen` toggles the Services dropdown on mobile (≤768px)
- **Responsive testing:** Browser DevTools at 480px, 768px, 1024px
