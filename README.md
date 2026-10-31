# CS5610 — Kambaz (A1 – A3)

Weijian Zhao

- **A1** (branch `master`): the Lab 1 HTML components, the Labs navigation, and a plain HTML + App Router prototype of the Kambaz screens (Chapter 1).
- **A2** (branch `a2`): Lab 2 CSS, React Icons, and Tailwind samples, plus the Kambaz screens restyled with Tailwind and flex layouts (Chapter 2).
- **A3** (branch `a3`): Lab 3 JavaScript and component samples, plus Kambaz driven by the JSON files in `app/(kambaz)/database` (Chapter 3).

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
| `/labs/lab3` | Lab 3 JavaScript samples, client/server components, path parameters, todo list |
| `/labs/lab3/add/[a]/[b]` | Shows `a + b` from the URL, e.g. `/labs/lab3/add/12/30` → 42 |
| `/labs/lab3/types` | TypeScript types: annotations, object types, interfaces, unions, enums, function types, props, narrowing, any vs unknown, utility types |
| `/labs/lab3/client-apis` | Client-only APIs: pathname, search params, window, geolocation, map iframe, public IP |
| `/labs/lab3/server-apis` | Server-only APIs: server time, os, env, request headers, weather fetch, visit counter, child_process |
| `/labs/lab4`, `/labs/lab5` | Placeholder pages |
| `/account/signin`, `/signup`, `/profile` | Account screens, with Account Navigation on the left |
| `/dashboard` | One card per course in `courses.json`, linking to `/courses/[cid]/home` |
| `/courses/[cid]/home` | Modules + Course Status |
| `/courses/[cid]/modules` | Module list (weeks → lessons → content items) |
| `/courses/[cid]/assignments` | Assignments list |
| `/courses/[cid]/assignments/[aid]` | Assignment Editor |
| `/courses/[cid]/people/table` | Users enrolled in that course (`users.json` + `enrollments.json`) |
| `/courses/[cid]/piazza`, `zoom`, `quizzes`, `grades` | Placeholder pages |
| `/calendar`, `/inbox`, and any other missing page | `app/not-found.tsx`, with a link back to the Dashboard |

## Styling notes (A2)

- Tailwind stays off globally (`globals.css` is still commented out in `app/layout.tsx`).
- `/labs/lab2/tailwind` loads full Tailwind, including the Preflight reset.
- Kambaz loads `app/(kambaz)/kambaz.css`: Tailwind theme + utilities **without** Preflight, a sans-serif base, the fixed-sidebar offset, and the list-group rules shared by Course and Account Navigation.
- Responsive layout: Course Status hides below `lg`; the Kambaz and Course/Account sidebars hide below `md`.
- `public/images/NEU.png` is a generated placeholder logo; replace it with a real one under the same name if you like.

## Data notes (A3)

- `app/(kambaz)/database/*.json` are the reference files from the book (courses RS101–RS103); `index.ts` re-exports them.
- Includes the chapter's On-your-own and With-AI extras: two extra courses (RS104, RS105), a `term` on every course, extra lessons (L104, L204), assignment A204, and enrollments 16 and 20.
- Course screens look up data by the `[cid]` / `[aid]` in the URL, so `/courses/RS101/...` and `/courses/RS102/...` show different modules, assignments, and people.
- `npm run lint` reports `prefer-const` / `no-var` in `app/labs/lab3`: the drills use `var` and `let` on purpose, as in the book. `npm run build` is unaffected.
