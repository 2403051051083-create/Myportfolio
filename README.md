# Myportfolio
🌐 BuildWithNaveen — My personal developer portfolio built to showcase my projects, technical skills, achievements, and experience in Full Stack Development.

## Contact form configuration

The frontend uses `http://localhost:5000` for local development. For a separate production frontend and backend, set `VITE_API_URL` on the frontend Render service to the backend's public origin (for example, `https://your-api.onrender.com`) and redeploy the frontend. If both are served from the same origin, the frontend falls back to its current origin.

For Render, use an email API over HTTPS rather than Gmail SMTP: the deployed backend logs show its SMTP connection to port 465 is unreachable. Create a Resend API key and verify a sender domain in Resend, then set these variables on the backend Render service:

- `MONGODB_URI`
- `RESEND_API_KEY`
- `EMAIL_FROM` (sender address on the verified Resend domain, e.g. `Portfolio Contact <contact@example.com>`)
- `CONTACT_TO` (destination inbox)
- `FRONTEND_URL` (the exact deployed frontend origin)

When `RESEND_API_KEY` is configured, the backend sends email through Resend's HTTPS API. Without it, local development falls back to Gmail SMTP using `EMAIL_USER` and `EMAIL_PASS`. Render supplies `PORT` automatically. Local development reads backend variables from `server/.env`; never commit secrets.
