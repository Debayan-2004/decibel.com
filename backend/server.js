const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');  // ✅ Import CORS
require('dotenv').config();

const app = express();

// ✅ Allow frontend to access backend
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

