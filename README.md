# Balachandran — MERN Portfolio

Simple personal portfolio built with the MERN stack.

- **MongoDB** stores projects and contact messages
- **Express / Node** exposes REST APIs
- **React (Vite)** is the single-page portfolio UI

## Project structure

```
backend/     Express API on port 5000
frontend/    React app on port 5173
```

## Setup

1. Install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community) (local) or use MongoDB Atlas.
2. From the project root:

```bash
npm install
npm run install:all
```

3. Backend config lives in `backend/.env`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
```

For Atlas, replace `MONGO_URI` with your connection string.

## Run

From the project root (starts API + React together):

```bash
npm run dev
```

Or in two terminals:

```bash
npm run dev:backend
npm run dev:frontend
```

Open [http://localhost:5173](http://localhost:5173).

The frontend proxies `/api` to the backend, so projects load from MongoDB and the contact form posts to `/api/contact`.

If MongoDB is not running, the API still starts and serves sample projects. The contact form needs MongoDB to save messages.

## API

| Method | Path            | Purpose              |
|--------|-----------------|----------------------|
| GET    | `/api/health`   | Health check         |
| GET    | `/api/projects` | List projects        |
| POST   | `/api/contact`  | Save a contact note  |
