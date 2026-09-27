# CS5610 A1 — HTML User Interfaces

Weijian Zhao

This project completes A1 following Chapter 1: the Lab 1 HTML components, the Labs navigation, and a plain HTML + App Router prototype of the Kambaz screens.

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
| `/labs/lab2` – `/labs/lab5` | Placeholder pages |
| `/account/signin`, `/signup`, `/profile` | Account screens, with Account Navigation on the left |
| `/dashboard` | Three course cards linking to `/courses/[cid]/home` |
| `/courses/[cid]/home` | Modules + Course Status |
| `/courses/[cid]/modules` | Module list (weeks → lessons → content items) |
| `/courses/[cid]/assignments` | Assignments list |
| `/courses/[cid]/assignments/[aid]` | Assignment Editor |
| `/courses/[cid]/piazza`, `zoom`, `quizzes`, `grades`, `people/table` | Placeholder pages |
| `/calendar`, `/inbox`, and any other missing page | `app/not-found.tsx`, with a link back to the Dashboard |
