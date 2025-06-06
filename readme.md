# Jokatory

Jokatory is a full-stack web application for sharing and browsing jokes. It consists of a React frontend and a Strapi backend.

---


## 📺 Main Links

- [YouTube Channel](https://www.youtube.com/@shivanshvasu)
- [Linktree](https://linktr.ee/shivanshvasu)
- [Elevate Playlist](https://www.youtube.com/playlist?list=PLFu6kWRx3ksMIQMrYq8naQMBc2TNuE9lc)

---


## Project Structure

```
jokatory-fe/   # React frontend (Create React App)
joketory-be/   # Strapi backend (Node.js, SQLite by default)
```

---

## Getting Started

### Prerequisites

- Node.js (v18.x - v22.x)
- npm (v6.x or higher)

---

### 1. Backend (Strapi)

#### Setup

```sh
cd joketory-be
npm install
```

#### Development

```sh
npm run develop
```

- The backend will run at [http://localhost:1337](http://localhost:1337)
- Access the Strapi admin panel at [http://localhost:1337/admin](http://localhost:1337/admin)

#### Seeding Example Data

To seed the database with example data:

```sh
npm run seed:example
```

---

### 2. Frontend (React)

#### Setup

```sh
cd jokatory-fe
npm install
```

#### Development

```sh
npm start
```

- The frontend will run at [http://localhost:3000](http://localhost:3000)
- It fetches jokes from the backend at `http://localhost:1337/api/jokes`

---

## Features

- Browse jokes with title, content, category, author, and upload time
- Responsive and clean UI
- Strapi backend with REST API
- Example data and media seeding

---

## Customization

- Add or edit jokes via the Strapi admin panel.
- Update frontend styles in [`src/App.js`](jokatory-fe/src/App.js).
- Modify backend content types in [`src/api/joke/content-types/joke/schema.json`](joketory-be/src/api/joke/content-types/joke/schema.json).

---

## Deployment

- Build frontend: `npm run build` in `jokatory-fe`
- Build backend admin panel: `npm run build` in `joketory-be`
- Configure environment variables as needed (see `.env.example` in `joketory-be`)

---

## License

This project is for educational purposes.

---

## Credits

- [Strapi](https://strapi.io/)
- [Create React App](https://create-react-app.dev/)