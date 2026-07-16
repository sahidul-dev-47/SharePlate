# SharePlate

**"মানুষ বা রেস্টুরেন্টের অতিরিক্ত খাবার নষ্ট না করে অন্যদের জন্য পোস্ট করবে"**
A platform where restaurants, home cooks, bakeries, and shops post surplus food for
neighbors to pick up nearby — before it goes to waste.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Better Auth.

## Stack

| Layer | Choice |
|---|---|
| Frontend | Next.js 14 (App Router) + TypeScript + Tailwind CSS |
| Charts/format | Recharts (available), Lucide icons |
| "Backend" data | Static in-memory data (`lib/data/listings.ts`) — no external DB for listings |
| Authentication | [Better Auth](https://www.better-auth.com/) (email + password), sessions stored in a local SQLite file used *only* for accounts/sessions |
| Images | Unsplash (hotlinked, free-license photos) |

Per the brief, all **food listing data is static** (defined in `lib/data/listings.ts`).
Only **user accounts/sessions** are backed by a small local SQLite file so that real
login/register/logout works. Items you add via **Add Item** are stored in your browser's
`localStorage` (see `lib/user-listings.ts`) and show up in **Manage Items** — this keeps the
"static data" requirement intact while still making Add/Manage fully functional.

## Getting started

```bash
npm install

# one-time: create the local SQLite auth schema + a demo account
npm run setup

npm run dev
```

Open http://localhost:3000.

### Demo login

Click **"Try demo login"** on the `/login` page, or use:

- Email: `demo@shareplate.app`
- Password: `demopass123`

### Environment variables

Copy `.env.example` to `.env` and set a real secret before deploying:

```bash
cp .env.example .env
```

```
BETTER_AUTH_SECRET=<32+ random characters>
BETTER_AUTH_URL=http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run migrate` | Create/update the SQLite auth schema |
| `npm run seed` | Create the demo account |
| `npm run setup` | `migrate` + `seed` in one step |

## Pages

- `/` — Home: hero, how-it-works, categories, featured listings, stats, testimonials, FAQ, newsletter, CTA (9 sections)
- `/explore` — search, filter (category + city + free-only), sort, pagination, skeleton loaders
- `/listings/[id]` — public detail page: gallery, overview, key info, reviews, related listings
- `/login`, `/register` — Better Auth email/password, validation, demo login button
- `/items/add` — protected: post a surplus listing
- `/items/manage` — protected: table of your listings with View/Delete
- `/about`, `/blog`, `/blog/[slug]`, `/contact`, `/help`, `/privacy` — additional pages

## Notes

- Protected routes (`/items/add`, `/items/manage`) are enforced in `middleware.ts` and redirect
  unauthenticated users to `/login?redirect=...`.
- The "freshness ring" on every card/detail page is the app's signature visual element — it
  shows how much of a listing's pickup window is left.
