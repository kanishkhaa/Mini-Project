const Healthcare = require('../models/Healthcare');
const path = require('path');
const fs = require('fs');

class HealthcareService {
  static async loadData() {
    try {
      const datasetPath = path.resolve(__dirname, process.env.DATASET_PATH, 'healthcare.json');
      console.log('Resolved healthcare.json path:', datasetPath);

      if (!fs.existsSync(datasetPath)) {
        throw new Error(`❌ Dataset file not found at: ${datasetPath}`);
      }

      const healthcareData = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));

      await Healthcare.deleteMany({});
      await Healthcare.insertMany(healthcareData);
      return { message: '✅ Healthcare data loaded successfully' };
    } catch (error) {
      throw new Error(`❌ Error loading healthcare data: ${error.message}`);
    }
  }

  static async getAllData() {
    try {
      return await Healthcare.find();
    } catch (error) {
      throw new Error(`❌ Error fetching healthcare data: ${error.message}`);
    }
  }
}

module.exports = HealthcareService;
