const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * @route POST /api/auth/google
 * @desc Google Sign-In
 */
router.post('/google', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { name, email, picture, sub } = payload;

    const user = await User.findOneAndUpdate(
      { googleId: sub },
      { name, email, picture, googleId: sub },
      { upsert: true, new: true }
    );

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      googleId: user.googleId,
    });
  } catch (error) {
    console.error('Google sign-in error:', error.message);
    res.status(401).json({ message: 'Invalid Google token' });
  }
});

/**
 * @route POST /api/auth/signup
 * @desc Manual Signup
 */
router.post('/signup', async (req, res) => {
  const { email, phone, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      phone: phone || null,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      _id: user._id,
      email: user.email,
      phone: user.phone,
    });
  } catch (error) {
    console.error('Signup error:', error.message);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

/**
 * @route POST /api/auth/login
 * @desc Manual Login
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
      _id: user._id,
      email: user.email,
      phone: user.phone,
      name: user.name || 'User',
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;
