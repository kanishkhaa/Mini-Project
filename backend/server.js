require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const agricultureRoutes = require('./routes/agriculture');
const educationRoutes = require('./routes/education');
const healthcareRoutes = require('./routes/healthcare');
const socialWelfareRoutes = require('./routes/socialWelfare');
const transportRoutes = require('./routes/transport');
const womenRoutes = require('./routes/women');
const chatbotRoutes = require('./routes/chatbot');
const AgricultureService = require('./services/agricultureService');
const EducationService = require('./services/educationService');
const HealthcareService = require('./services/healthcareService');
const SocialWelfareService = require('./services/socialWelfareService');
const TransportService = require('./services/transportService');
const WomenService = require('./services/womenService');

// Explicitly load Passport configuration
try {
  require('./config/passport');
  console.log('Passport configuration loaded successfully');
} catch (err) {
  console.error('Failed to load Passport configuration:', err.message);
}

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
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Initialize Passport
app.use(passport.initialize());

// Routes
app.use('/api/agriculture', agricultureRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/healthcare', healthcareRoutes);
app.use('/api/social-welfare', socialWelfareRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/women', womenRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Government Schemes API');
});

// Combined schemes endpoint
app.get('/api/all', async (req, res) => {
  try {
    const [agriculture, education, healthcare, socialWelfare, transport, women] = await Promise.all([
      AgricultureService.getAllData()
        .then(data => {
          const schemes = data.flatMap(doc => doc.agriculture_schemes || []);
          console.log('Agriculture schemes:', schemes.length, schemes.map(s => s.scheme_name));
          return schemes;
        })
        .catch(err => {
          console.error('AgricultureService error:', err.message);
          return [];
        }),
      EducationService.getAllData()
        .then(data => {
          const schemes = data.flatMap(doc => doc.education_schemes || []);
          console.log('Education schemes:', schemes.length, schemes.map(s => s.scheme_name));
          return schemes;
        })
        .catch(err => {
          console.error('EducationService error:', err.message);
          return [];
        }),
      HealthcareService.getAllData()
        .then(data => {
          const schemes = data.flatMap(doc => doc.healthcare_schemes || []);
          console.log('Healthcare schemes:', schemes.length, schemes.map(s => s.scheme_name));
          return schemes;
        })
        .catch(err => {
          console.error('HealthcareService error:', err.message);
          return [];
        }),
      SocialWelfareService.getAllData()
        .then(data => {
          const schemes = data.flatMap(doc => doc.social_welfare_schemes || []);
          console.log('Social Welfare schemes:', schemes.length, schemes.map(s => s.scheme_name));
          return schemes;
        })
        .catch(err => {
          console.error('SocialWelfareService error:', err.message);
          return [];
        }),
      TransportService.getAllData()
        .then(data => {
          const schemes = data.flatMap(doc => doc.transport_and_infrastructure_schemes || []);
          console.log('Transport schemes:', schemes.length, schemes.map(s => s.scheme_name));
          return schemes;
        })
        .catch(err => {
          console.error('TransportService error:', err.message);
          return [];
        }),
      WomenService.getAllData()
        .then(data => {
          const schemes = data.flatMap(doc => doc.women_schemes || []);
          console.log('Women schemes:', schemes.length, schemes.map(s => s.scheme_name));
          return schemes;
        })
        .catch(err => {
          console.error('WomenService error:', err.message);
          return [];
        }),
    ]);

    const allSchemes = [
      ...agriculture,
      ...education,
      ...healthcare,
      ...socialWelfare,
      ...transport,
      ...women
    ];

    console.log('Total combined schemes:', allSchemes.length, allSchemes.map(s => s.scheme_name));
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