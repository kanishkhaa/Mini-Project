require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Routes
const agricultureRoutes = require('./routes/agriculture');
const educationRoutes = require('./routes/education');
const healthcareRoutes = require('./routes/healthcare');
const socialWelfareRoutes = require('./routes/socialwelfare');
const transportRoutes = require('./routes/transport');
const womenRoutes = require('./routes/women');

// Services
const AgricultureService = require('./services/agricultureService');
const EducationService = require('./services/educationService');
const HealthcareService = require('./services/healthcareService');
const SocialWelfareService = require('./services/socialWelfareService');
const TransportService = require('./services/transportService');
const WomenService = require('./services/womenService');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Route mounting
app.use('/api/agriculture', agricultureRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/healthcare', healthcareRoutes);
app.use('/api/social-welfare', socialWelfareRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/women', womenRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Government Schemes API');
});

// Combined schemes endpoint
app.get('/api/all', async (req, res) => {
  try {
    const [agriculture, education, healthcare, socialWelfare, transport, women] = await Promise.all([
      AgricultureService.getAllData().then(data => data.flatMap(doc => doc.agriculture_schemes || [])),
      EducationService.getAllData().then(data => data.flatMap(doc => doc.education_schemes || [])),
      HealthcareService.getAllData().then(data => data.flatMap(doc => doc.healthcare_schemes || [])),
      SocialWelfareService.getAllData().then(data => data.flatMap(doc => doc.social_welfare_schemes || [])),
      TransportService.getAllData().then(data => data.flatMap(doc => doc.transport_and_infrastructure_schemes || [])),
      WomenService.getAllData().then(data => data.flatMap(doc => doc.women_schemes || [])),
    ]);

    const allSchemes = [
      ...agriculture,
      ...education,
      ...healthcare,
      ...socialWelfare,
      ...transport,
      ...women
    ];

    console.log('Combined schemes:', allSchemes.length);
    res.json(allSchemes);
  } catch (err) {
    console.error('Error fetching all schemes:', err.message);
    res.status(500).json({ error: 'Failed to fetch all schemes' });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(`Error at ${req.method} ${req.url}:`, err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.url} not found` });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});