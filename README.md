# Myportfolio
🌐 BuildWithNaveen — My personal developer portfolio built to showcase my projects, technical skills, achievements, and experience in Full Stack Development.

## Run locally

1. Install frontend dependencies with `npm install`, then start Vite with `npm run dev`.
2. In a second terminal, run `cd server`, install dependencies with `npm install`, and copy `.env.example` to `.env`.
3. Set `MONGODB_URI`, `EMAIL_USER`, `EMAIL_PASS`, and optionally `CONTACT_TO` in `server/.env`. Start the API with `npm start` after MongoDB is available.

The contact form uses Vite's `/api` proxy locally. For a deployed frontend, set `VITE_API_URL` to the backend's origin when building the frontend, and set `FRONTEND_URL` in the backend environment to the deployed frontend origin.
