
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const router = express.Router();

// Manual signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, phone });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (err) {
    console.error('Signup Error:', err.message);
    res.status(500).json({ error: 'Signup failed' });
  }
});

// Manual login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Google OAuth Start
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth Callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:5173/login?error=auth_failed', session: false }),
  (req, res) => {
    try {
      const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.redirect(`http://localhost:5173/login?token=${token}`);
    } catch (err) {
      console.error('Callback Error:', err.message);
      res.redirect('http://localhost:5173/login?error=callback_failed');
    }
  }
);

// Google OAuth Token Exchange
router.post('/google', async (req, res) => {
  try {
    const { token } = req.body;
    // Verify Google ID token (you may need to use google-auth-library)
    const { OAuth2Client } = require('google-auth-library');
    const client = new OAuth2Client("236615308696-6hubivfe1m0k6tmpp424hu4flt4bvjtt.apps.googleusercontent.com");
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "236615308696-6hubivfe1m0k6tmpp424hu4flt4bvjtt.apps.googleusercontent.com",
    });
    const payload = ticket.getPayload();
    
    let user = await User.findOne({ email: payload.email });
    if (!user) {
      // Create new user if they don't exist
      user = await User.create({
        name: payload.name,
        email: payload.email,
        password: '', // No password for Google users
        phone: '', // Optional
      });
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token: jwtToken, user });
  } catch (err) {
    console.error('Google Auth Error:', err.message);
    res.status(500).json({ error: 'Google authentication failed' });
  }
});

module.exports = router;
