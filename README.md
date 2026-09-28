# Myportfolio
🌐 BuildWithNaveen — My personal developer portfolio built to showcase my projects, technical skills, achievements, and experience in Full Stack Development.

## Contact form configuration

The frontend uses `http://localhost:5000` for local development. For a separate production frontend and backend, set `VITE_API_URL` on the frontend Render service to the backend's public origin (for example, `https://your-api.onrender.com`) and redeploy the frontend. If both are served from the same origin, the frontend falls back to its current origin.

Set these variables on the backend Render service:

- `MONGODB_URI`
- `EMAIL_USER`
- `EMAIL_PASS` (use the mail provider's app password or SMTP credential)
- `CONTACT_TO` (optional; defaults to `EMAIL_USER`)
- `FRONTEND_URL` (the exact deployed frontend origin)

Render supplies `PORT` automatically. Local development reads backend variables from `server/.env`; never commit secrets.
