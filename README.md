# 💪 Workout Buddy (MERN CRUD + Context)

A full-stack MERN application to log and manage your workouts.

---

## 📁 Project Structure

```
workout-buddy/
├── backend/       # Express + MongoDB API
└── frontend/      # React app
```

---

## 🚀 How to Run

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file (copy from `.env.example`):

```env
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/workout-buddy?retryWrites=true&w=majority
```

> Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

Start the backend:

```bash
npm run dev    # development (nodemon)
# or
npm start      # production
```

Backend runs at **http://localhost:4000**

---

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at **http://localhost:3000**

> The frontend is proxied to the backend via `"proxy": "http://localhost:4000"` in `package.json`.

---

## 🌐 API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/workouts`       | Fetch all workouts (latest first) |
| POST   | `/api/workouts`       | Create a new workout     |
| DELETE | `/api/workouts/:id`   | Delete a workout by ID   |

### POST Body Example:
```json
{
  "title": "Chest",
  "load": 15,
  "reps": 30
}
```

---

## ✅ Features

- Add workouts (title, load, reps)
- Delete workouts
- Global state with React Context + useReducer
- Responsive layout (desktop 2-col, mobile stacked)
- Backend validation with proper error messages
- Timestamps shown as relative time ("about 23 hours ago")

---

## 🛠️ Tech Stack

- **Frontend:** React, Context API, useReducer, date-fns
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas + Mongoose
