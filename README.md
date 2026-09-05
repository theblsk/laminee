# Laminée

An illustrated bakery menu built with React, TypeScript, and Vite.

## Run locally

```sh
bun install
bun run dev
```

`npm run dev` also works with installed dependencies. Open the local URL printed by Vite.

## Checks

```sh
npm run build
npm run lint
```

Menu content and placeholder USD prices are in `src/App.tsx`. The two categories are Boulangerie (breads and viennoiseries) and Pâtisserie (cakes and sweets). Descriptions are draft copy, not verified recipes or allergen information.

Twelve illustrations were generated individually using built-in imagegen and saved in `public/images/`. The full prompt set is in `IMAGE-PROMPTS.md`. Caveat and DM Sans are self-hosted in `public/fonts/`.

Browser verification: desktop 1440px and mobile 390px; all twelve items and images, category anchors, back-to-top, no horizontal overflow, and no console warnings or errors. Motion respects reduced-motion preferences.
