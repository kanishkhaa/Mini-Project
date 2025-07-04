require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const agricultureRoutes = require('./routes/agriculture');
const educationRoutes = require('./routes/education');
const healthcareRoutes = require('./routes/healthcare');
const socialWelfareRoutes = require('./routes/socialwelfare');
const transportRoutes = require('./routes/transport');
const womenRoutes = require('./routes/women');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/agriculture', agricultureRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/healthcare', healthcareRoutes);
app.use('/api/socialwelfare', socialWelfareRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/women', womenRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});