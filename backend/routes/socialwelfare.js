const express = require('express');
const router = express.Router();
const SocialWelfareService = require('../services/socialWelfareService');

router.post('/load', async (req, res) => {
  try {
    const result = await SocialWelfareService.loadData();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await SocialWelfareService.getAllData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;