# Tarot Practice Lab

A standalone, mobile-first tarot study and reflection app built with React and Vite.

## Features
- All 78 Major and Minor Arcana cards with upright study meanings and reflection prompts
- Daily card, one / three / five-card spreads, upright and reversed interpretation prompts
- Card library search and suit filters
- Five visual themes: Celestial Archive, Moonlit, Botanical Alchemy, Rose Nocturne, Ivory Study
- Learning path, research/source library, private journal, saved readings
- Deck-style selector and custom image URL per card
- Local browser persistence and responsive mobile layout
- Pop-out book-style journal with animated page navigation and print-to-PDF export

## Run locally
```sh
npm install
npm run dev
```

## Production build
```sh
npm run build
```

## Cloudflare Pages
Connect this repository and select branch `remake/tarot-practice-lab`.
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

## Data and artwork
Journal entries, readings, settings and custom artwork URLs are currently stored in browser localStorage. They do not sync between devices and can be lost if browser storage is cleared. The Journal PDF control opens the browser print dialog, where you can save the complete journal as a PDF. Cloud journal sync remains a separate backend task. The included card faces are original symbolic study illustrations, not licensed scans of Rider-Waite-Smith, Marseille or Thoth decks. The deck selector changes the study context, and users can add image URLs for individual cards.

This is a review build, not a production deployment.