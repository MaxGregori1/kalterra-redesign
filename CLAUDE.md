# Project: Kalterra Capital Partners Website Redesign

## Overview
Redesigning the Kalterra Capital Partners website (kalterra.com) from WordPress/DIVI to a modern Astro + Tailwind CSS site. The redesigned site is hosted on GitHub Pages at `maxgregori1.github.io/kalterra-redesign/`.

## Tech Stack
- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages (subdirectory deployment at `/kalterra-redesign/`)
- **Image Optimization:** Astro's built-in `<Image />` component for proper sizing and compression

## Design Direction
- Clean, modern aesthetic inspired by alpinestartdev.com
- White/light background with Kalterra's brand accents (black, gold `#c9a85c`)
- Professional, institutional-quality feel appropriate for a real estate capital partners firm
- Mobile-responsive across all pages

## Site Structure
- **Home** — Hero video, metrics bar, featured projects, investor CTA, seller/partner CTA
- **About** — Company overview, core values, capabilities (Capital Markets, Acquisitions, Development, Asset Management, Property Management)
- **Team** — Team grid with clickable cards linking to individual bio pages
- **Portfolio** — Property grid with individual property detail pages (includes lightbox galleries)
- **Newsroom** — Articles and press coverage
- **Contact** — Address, hours, email, contact form
- **Disclaimer** — Legal disclaimer
- **Privacy Policy** — Privacy policy

## Key Technical Notes

### Layout & Container Pattern
- **Standard page container:** `max-w-[1440px] mx-auto px-6 lg:px-12` — this is used consistently across ALL pages and sections. Any new section MUST use this same container pattern to maintain visual alignment with the rest of the site. Do NOT use narrower containers like `max-w-4xl`, `max-w-3xl`, or `max-w-prose` for main content areas unless explicitly instructed.

### Responsive Design
- **All changes must be tested and verified at three breakpoints:**
  - Desktop (1280px+)
  - Tablet (768px–1024px)
  - Mobile (below 768px)
- When making changes to any section, verify that both desktop AND mobile/tablet layouts remain correct. Do not fix one breakpoint at the expense of another.
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) to handle layout differences across breakpoints.

### Assets & Images
- **Base Path:** All internal links must use the `/kalterra-redesign/` base path for GitHub Pages compatibility. This is configured in `astro.config.mjs`.
- **No Hotlinking:** All images, videos, and assets must be stored locally in `/public/assets/`. Do NOT hotlink to kalterra.com or any external source.
- **Image Quality:** Use Astro's `<Image />` component with proper `width`, `height`, and `quality` attributes. Source images are high-resolution (often 6000px+) and must be properly downscaled to avoid grainy rendering. Target container-appropriate sizes (e.g., 440px for headshots).

### Component-Specific Notes
- **Team Pages:** Team members have individual detail pages (not hover overlays) to accommodate full biography text.
- **Portfolio Galleries:** Property pages use lightbox gallery functionality for property images.
- **Mobile Navigation:** Has been specifically tuned — be careful not to regress positioning, overlay opacity, or menu item visibility when making changes.
- **Featured Projects Overlay:** Mobile overlays on featured project cards use darkened backgrounds for text legibility — preserve this when editing.

## MCP Servers Available
- **Playwright** (`npx @anthropic-ai/playwright-mcp@latest`) — For crawling and inspecting live web pages
- **GitHub** — For repository operations and deployment
- **Context7** (`npx -y @upstash/context7-mcp@latest`) — For up-to-date Astro and Tailwind documentation
- **Frontend Design** — For design guidance and best practices

## Working Guidelines

### Prompt Discipline
- **Stick strictly to the prompt provided.** Execute only what is asked — nothing more, nothing less.
- **Do not make unsolicited changes** to files, styles, layouts, or content outside the scope of the current prompt.
- **If something is ambiguous or unclear, ask before proceeding.** Do not assume intent.
- **If you believe a change outside the prompt scope is necessary** (e.g., to prevent a bug or maintain consistency), stop and ask for approval first.

### Change Management
- **One concern per prompt.** Prompts are intentionally scoped to single issues or closely related changes. Respect that boundary.
- **Preserve existing functionality.** When making changes, especially mobile-specific fixes, verify that desktop behavior is not regressed.
- **Test after changes.** Use Playwright to visually verify changes on the live local dev server when possible. Verify at desktop, tablet, and mobile widths.

### Code Quality
- Follow existing code patterns and conventions already established in the project.
- Use Tailwind utility classes consistently — do not introduce custom CSS unless absolutely necessary.
- Keep component structure clean and readable.
- Comment any non-obvious logic.