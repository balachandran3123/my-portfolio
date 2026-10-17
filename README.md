# Balachandran — Portfolio

Personal portfolio website (Laravel / PHP developer). The site is built with React and Express.

- **Express / Node** — REST APIs
- **React (Vite)** — portfolio UI
- Contact form saves each submission to `backend/respons_deatils.txt` (no database required)

## Project structure

```
backend/     Express API on port 5000
frontend/    React app on port 5173
```

## Setup

1. Install [Node.js](https://nodejs.org/).
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

MongoDB is optional. It is only used for project data if you run it.

## Run

From the project root (starts API + React together):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Contact messages

Each **Send message** click appends Name, Email, Message, and date to:

`backend/respons_deatils.txt`

Open that file in the project to read submissions. It is created automatically after the first send.

## API

| Method | Path            | Purpose                          |
|--------|-----------------|----------------------------------|
| GET    | `/api/health`   | Health check                     |
| GET    | `/api/projects` | List projects                    |
| POST   | `/api/contact`  | Save a contact note to the file  |
