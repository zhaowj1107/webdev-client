# CS5610 — Kambaz (A1 + A2)

Weijian Zhao

- **A1** (branch `master`): the Lab 1 HTML components, the Labs navigation, and a plain HTML + App Router prototype of the Kambaz screens (Chapter 1).
- **A2** (branch `a2`): Lab 2 CSS, React Icons, and Tailwind samples, plus the Kambaz screens restyled with Tailwind and flex layouts (Chapter 2).

## Running

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (make sure it passes before submitting)
```

## Routes

| URL | Content |
| --- | --- |
| `/` and `/account` | Redirect to `/account/signin` |
| `/labs` | Labs index: name, GitHub repo link (`wd-github`), links to Lab 1–5, Kambaz link |
| `/labs/lab1` | All Lab 1 HTML examples |
| `/labs/lab2` | Lab 2 CSS samples (`index.css`), media queries, React Icons |
| `/labs/lab2/tailwind` | Tailwind samples: spacing, typography, backgrounds, responsive, filters, grids |
| `/labs/lab3` – `/labs/lab5` | Placeholder pages |
| `/account/signin`, `/signup`, `/profile` | Account screens, with Account Navigation on the left |
| `/dashboard` | Three course cards in a responsive grid, linking to `/courses/[cid]/home` |
| `/courses/[cid]/home` | Modules + Course Status |
| `/courses/[cid]/modules` | Module list (weeks → lessons → content items) |
| `/courses/[cid]/assignments` | Assignments list |
| `/courses/[cid]/assignments/[aid]` | Assignment Editor |
| `/courses/[cid]/people/table` | People roster table |
| `/courses/[cid]/piazza`, `zoom`, `quizzes`, `grades` | Placeholder pages |
| `/calendar`, `/inbox`, and any other missing page | `app/not-found.tsx`, with a link back to the Dashboard |

## Styling notes (A2)

- Tailwind stays off globally (`globals.css` is still commented out in `app/layout.tsx`).
- `/labs/lab2/tailwind` loads full Tailwind, including the Preflight reset.
- Kambaz loads `app/(kambaz)/kambaz.css`: Tailwind theme + utilities **without** Preflight, a sans-serif base, the fixed-sidebar offset, and the list-group rules shared by Course and Account Navigation.
- Responsive layout: Course Status hides below `lg`; the Kambaz and Course/Account sidebars hide below `md`.
- `public/images/NEU.png` is a generated placeholder logo; replace it with a real one under the same name if you like.
