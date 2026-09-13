# Contributing to StockHub

Thanks for considering a contribution. StockHub is a small finance-blogging platform — a React SPA talking to an Express/MongoDB REST API, with AI-assisted content generation and comment moderation. This guide covers how the repo is laid out, how to run it locally, and what a good PR looks like.

## Project structure

This is a two-package repo — there is **no root `package.json`**; `client` and `server` are installed and run independently.

```
stockhub-v2/
├── client/            React 19 + Vite 6 + Tailwind CSS 4 (SPA)
│   └── src/
│       ├── components/       shared UI (Navbar, Footer, BlogCard, ...)
│       │   └── admin/        admin-only UI (Sidebar, Login, table rows)
│       ├── pages/             route-level views
│       │   └── admin/        dashboard, add/list blog, comments
│       ├── context/           AppContext — axios instance, auth token, blog list
│       └── assets/            static data (blog categories, fallback sample data)
└── server/            Express 5 + Mongoose 8 (REST API)
    ├── models/                Blog, Comment (Mongoose schemas)
    ├── controllers/           request handlers — admin + blog logic
    ├── routes/                adminRoutes, blogRoutes
    ├── middleware/            JWT auth guard, multer (in-memory upload)
    └── configs/                MongoDB, ImageKit, Gemini client setup
```

The backend follows a Models → Controllers → Routes split; the React SPA is the decoupled view layer, consuming everything over `/api/*`.

## Prerequisites

- Node.js 18+ and npm
- A MongoDB connection string (MongoDB Atlas is fine)
- An [ImageKit](https://imagekit.io) account (free tier works) for blog image uploads/delivery
- A [Gemini API key](https://aistudio.google.com/) for the "Generate with AI" blog content feature

## Local setup

**1. Backend**

```bash
cd server
npm install
cp .env.example .env   # fill in the values, see below
npm run server          # nodemon, restarts on change — http://localhost:3000
```

**2. Frontend** (separate terminal)

```bash
cd client
npm install
npm run dev              # http://localhost:5173
```

The client doesn't need its own `.env` for local dev — [`vite.config.js`](client/vite.config.js) proxies any `/api/*` request from `localhost:5173` straight to `localhost:3000`, so just having the backend running is enough. `VITE_BASE_URL` (see [`AppContext.jsx`](client/src/context/AppContext.jsx)) is only needed if you're pointing the client at a non-local API.

**3. Environment variables** (`server/.env`, see [`server/.env.example`](server/.env.example) for the full list)

| Variable | Purpose |
|---|---|
| `PORT` | API port (defaults to 3000) |
| `MONGODB_URI` | Mongo connection string — the app appends `/stockhub` itself, don't include a DB name |
| `JWT_SECRET` | Signs/verifies the admin session token — use a long, random value, even locally |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Credentials for `/admin` login (there's no user table — this is a single hardcoded admin) |
| `IMAGEKIT_PUBLIC_KEY` / `IMAGEKIT_PRIVATE_KEY` / `IMAGEKIT_URL_ENDPOINT` | From your ImageKit dashboard |
| `GEMINI_API_KEY` | From Google AI Studio — powers the AI blog content generator |

**Never commit `.env`.** It's already gitignored — keep it that way, and double-check `git status` before pushing if you've been editing config files.

## Running it end to end

Once both servers are up:
- Public site: `http://localhost:5173`
- Admin panel: `http://localhost:5173/admin`, log in with `ADMIN_EMAIL` / `ADMIN_PASSWORD` from your `.env`
- From the admin panel you can add a blog (with an AI-generated draft via the "Generate with AI" button), publish/unpublish it, and moderate comments left on it from the public blog page

## Code style

- The client has ESLint configured ([`client/eslint.config.js`](client/eslint.config.js)) — run `npm run lint` inside `client/` before opening a PR
- The server has no linter configured yet; match the existing style in the file you're editing (no semicolons omitted, `async/await` over `.then()`, controllers stay thin and delegate to Mongoose models)
- There is currently no automated test suite on either side. Until that changes, **describe how you manually verified your change** in the PR description (what you clicked through, what API calls you checked in devtools, etc.) — that's the only verification a reviewer has to go on

## Commit messages

The existing history follows a light `type: description` convention (`feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`). Keep using it, e.g. `fix: correct empty alt text on blog cover image`.

## Opening a PR

1. Branch off `main`
2. Keep the PR scoped to one change — a bug fix and a refactor in the same PR is harder to review and harder to revert
3. If you're changing API behavior (routes, response shape, auth requirements), mention it explicitly — the client has no type layer to catch a mismatch at build time
4. Fill in what you tested manually (see "Code style" above)
5. Link the issue you're fixing, if there is one

## Reporting bugs or proposing features

Please use the [issue templates](.github/ISSUE_TEMPLATE) rather than a blank issue — they ask for the couple of details (which part of the app, steps to reproduce) that save the most back-and-forth.

## Reporting a security issue

Do **not** open a public issue for a security vulnerability. See [SECURITY.md](SECURITY.md) for how to report it privately.
