const express = require('express');
const router = express.Router();
const HealthcareService = require('../services/healthcareService');

router.post('/load', async (req, res) => {
  try {
    const result = await HealthcareService.loadData();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await HealthcareService.getAllData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;