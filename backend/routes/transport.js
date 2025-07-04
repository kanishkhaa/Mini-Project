const express = require('express');
const router = express.Router();
const TransportService = require('../services/transportService');

router.post('/load', async (req, res) => {
  try {
    const result = await TransportService.loadData();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await TransportService.getAllData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;