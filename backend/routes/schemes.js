const express = require('express');
const router = express.Router();
const Scheme = require('../models/scheme');

router.get('/', async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch schemes' });
  }
});

router.get('/search', async (req, res) => {
  const { keyword } = req.query;
  try {
    const query = keyword
      ? {
          $or: [
            { scheme_name: new RegExp(keyword, 'i') },
            { parent_scheme: new RegExp(keyword, 'i') },
            { objectives: { $elemMatch: { $regex: keyword, $options: 'i' } } }
          ]
        }
      : {};

    const results = await Scheme.find(query);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router;