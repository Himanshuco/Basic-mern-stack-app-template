# ⚡ MERN + Vite Starter Template

A lightweight and fast **MERN (MongoDB, Express, React, Node.js)** project template powered by **Vite** for the frontend and **Express + Mongoose** for the backend.


## 📁 Project Structure

```
mern-project/
│
├── backend/           # Express + MongoDB API
│   ├── config/        # Database configuration
│   ├── models/        # Mongoose models
│   ├── controllers/   # Route logic
│   ├── routes/        # API endpoints
│   ├── .env           # Environment variables
│   ├── server.js      # Backend entry point
│   └── package.json
│
├── frontend/          # React (Vite) client
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```



## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mern-vite-template.git
cd mern-vite-template
````

---

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-template
```

Run the development server:

```bash
npm run dev
```

➡️ Your backend will start on **[http://localhost:5000](http://localhost:5000)**

---

### 3. Setup the Frontend (Vite + React)

In another terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite’s dev server will run on **[http://localhost:5173](http://localhost:5173)** by default.

---

## 🔗 Frontend–Backend Proxy (Vite Config)

The following setup in `vite.config.js` automatically proxies API calls from Vite to your Express server:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  plugins: [react()],
})
```

Now you can make API requests like:

```js
axios.get('/api/examples');
axios.post('/api/examples', { name });
```

without worrying about CORS or full URLs.

---

## 🧠 Example API Endpoints

| Method | Endpoint        | Description          |
| :----- | :-------------- | :------------------- |
| GET    | `/api/examples` | Get all examples     |
| POST   | `/api/examples` | Create a new example |

Example request:

```bash
POST /api/examples
Content-Type: application/json

{
  "name": "My First Example"
}
```

---

## 🧩 Example React Usage

The included React app demonstrates:

* Fetching data from the backend (`GET /api/examples`)
* Adding new items (`POST /api/examples`)

Example snippet:

```jsx
axios.get('/api/examples')
  .then(res => setExamples(res.data))
  .catch(console.error);
```

---

## 🧰 Tech Stack

| Layer    | Technology            |
| :------- | :-------------------- |
| Frontend | React + Vite + Axios  |
| Backend  | Node.js + Express     |
| Database | MongoDB + Mongoose    |
| Tools    | Nodemon, dotenv, CORS |

---

## 🚀 Development Commands

| Command         | Location    | Description                |
| :-------------- | :---------- | :------------------------- |
| `npm run dev`   | `/backend`  | Start backend with nodemon |
| `npm run dev`   | `/frontend` | Start Vite dev server      |
| `npm run build` | `/frontend` | Build production React app |

---

## 📦 Deployment Notes

1. Build your frontend:

   ```bash
   cd frontend
   npm run build
   ```
2. Serve the `/frontend/dist` folder using Express or your hosting provider.
3. Update environment variables for your production database and ports.

---

## 🧑‍💻 Contributing

Pull requests are welcome!
If you find a bug or want to add improvements, open an issue or PR.

---


> Built with ⚡ Vite + ❤️ MERN Stack

