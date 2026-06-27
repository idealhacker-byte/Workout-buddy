require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/workouts', workoutRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Workout Buddy API is running!' });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });
