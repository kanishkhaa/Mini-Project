const Women = require('../models/Women');
const path = require('path');
const fs = require('fs');

class WomenService {
  static async loadData() {
    try {
      const datasetPath = path.resolve(__dirname, process.env.DATASET_PATH, 'women.json');
      console.log('Resolved women.json path:', datasetPath);

      if (!fs.existsSync(datasetPath)) {
        throw new Error(`❌ Dataset file not found at: ${datasetPath}`);
      }

      const womenData = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));

      await Women.deleteMany({});
      await Women.insertMany(womenData);
      return { message: '✅ Women data loaded successfully' };
    } catch (error) {
      throw new Error(`❌ Error loading women data: ${error.message}`);
    }
  }

  static async getAllData() {
    try {
      return await Women.find();
    } catch (error) {
      throw new Error(`❌ Error fetching women data: ${error.message}`);
    }
  }
}

module.exports = WomenService;
