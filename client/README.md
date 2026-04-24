# Client (Next.js 16 + React 19)

This is the frontend for the AI Gumroad Clone.

## Required environment variables

Create `client/.env` using `client/.env.example`.

- `NEXT_PUBLIC_API_BASE_URL` (example: `http://localhost:5000`)

## Run locally

From `client/`:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Notes

- The backend uses **httpOnly cookies** for auth. The API client is configured with `withCredentials: true`.
- If you change ports, update both:
  - `client/.env` (`NEXT_PUBLIC_API_BASE_URL`)
  - `backend/.env` (`FRONTEND_ORIGIN`)

