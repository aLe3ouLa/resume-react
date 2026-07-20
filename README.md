# Alexandra Barka’s portfolio

Personal portfolio for Alexandra Barka, a senior software engineer, photographer, writer, and maker based in Amsterdam.

**Live site:** [ale3oula.github.io](https://ale3oula.github.io/)

The site combines professional experience with photography, articles, and creative work. Its visual language uses solid colors, bold outlines, tactile shadows, and restrained interaction. It does not use gradients or continuous decorative motion.

## Highlights

- Editorial hero and personal introduction
- Evidence-viewfinder About Me section
- Capability-focused engineer’s workbench
- Expandable career archive
- Interactive low-poly 3D maker’s desk built with Three.js
- Photography galleries for landscapes, portraits, and wildlife
- Markdown-powered technical blog
- Downloadable résumé
- Responsive layouts and reduced-motion support
- Page, section, navigation, and CTA analytics

## Technology

- React 18
- TypeScript
- React Router
- Three.js
- Tailwind CSS
- Create React App
- Markdown-It and Highlight.js
- Google Analytics
- GitHub Pages

The 3D maker’s desk is generated procedurally in the browser. It does not depend on external model files or textures. An accessible HTML control list mirrors every selectable object in the WebGL scene.

## Getting started

### Requirements

- Node.js
- npm, or Yarn 1.x through Corepack

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

### Type checking

```bash
npx tsc --noEmit
```

### Production build

```bash
npm run build
```

The optimized application is written to `build/`.

## Environment variables

Create a `.env.local` file to use a different Google Analytics property:

```env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

If the variable is omitted, the portfolio uses the measurement ID configured in `src/hooks/useAnalytics.ts`.

## Project structure

```text
src/
├── assets/                 Images, photography, and résumé PDF
├── components/
│   ├── blocks/             Homepage sections and larger features
│   │   ├── about-me/       Evidence-viewfinder biography
│   │   ├── maker-desk/     Three.js scene and accessible controls
│   │   ├── projects/       Work-experience archive
│   │   └── tech-stack/     Engineer’s workbench
│   └── fragments/          Reusable page-level compositions
├── data/                   Blog metadata
├── design-system/          Components, tokens, and shared styles
├── hooks/                  Analytics hooks
├── pages/                  Route-level components
├── utils/                  Markdown utilities
├── App.tsx                 Router configuration
└── index.css               Tailwind layers and global styling
```

## Main routes

| Route | Content |
| --- | --- |
| `/` | Portfolio homepage |
| `/photography` | Photography landing page |
| `/blog` | Technical articles |
| `/blog/:slug` | Individual Markdown article |

Additional portrait, landscape, and wildlife views are implemented as route-level page components.

## Content updates

### Work experience

Experience entries live in:

```text
src/components/blocks/projects/utils.tsx
```

The homepage currently displays the first three entries. Older roles remain in the data file and the complete career history is linked through LinkedIn.

### Blog posts

1. Add the Markdown file to `public/blog/`.
2. Add its metadata to `src/data/blogPosts.ts`.
3. Add the route to `public/sitemap.xml` when appropriate.

### Photography

Photography assets are organized under:

```text
src/assets/photography/
src/assets/portraits/
src/assets/wildlife/
```

### Résumé

Replace `src/assets/cv.pdf` while keeping the same filename, or update the import in the hero component.

## 3D maker’s desk

The scene is defined in:

```text
src/components/blocks/maker-desk/MakerDesk.tsx
```

Each desk object is assembled from lightweight Three.js primitives with solid-color materials and outlined geometry. To add another object:

1. Add its metadata to `deskItems`.
2. Create a named `THREE.Group` in `createDeskScene`.
3. Set `group.userData.itemId` to the metadata ID.
4. Add the group to the scene.

Mouse selection uses raycasting. Keyboard and assistive-technology access is provided by the HTML object menu below the canvas.

## Analytics

The site tracks:

- Route changes
- Section visibility
- CTA clicks
- Tracked navigation

Reusable analytics components include `SectionTracker`, `TrackedButton`, and `TrackedLink`. More implementation details are available in `src/components/README-Analytics.md`.

## Deployment

The portfolio is published to the `master` branch of the separate `aLe3ouLa/aLe3ouLa.github.io` repository.

```bash
npm run deploy
```

The deployment command builds the application and publishes the contents of `build/` with `gh-pages`.

To publish an already verified build without rebuilding:

```bash
npx gh-pages -b master \
  -r https://github.com/aLe3ouLa/aLe3ouLa.github.io.git \
  -d build --dotfiles
```

Always confirm that `build/index.html` contains the application before using the direct command.

## Accessibility and motion

- Interactive elements remain keyboard accessible.
- The 3D scene has equivalent HTML controls.
- Semantic headings organize each section.
- Images include alternative text.
- Motion is interaction-driven rather than continuous.
- Reduced-motion preferences disable nonessential transitions.

## License

The source code is provided for reference. Photography, writing, personal information, and visual assets remain the property of Alexandra Barka and may not be reused without permission.
