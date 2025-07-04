const Agriculture = require('../models/Agriculture');
const path = require('path');
const fs = require('fs');

class AgricultureService {
  static async loadData() {
    try {
      const datasetPath = path.resolve(__dirname, process.env.DATASET_PATH, 'agriculture.json');
      console.log('Resolved agriculture.json path:', datasetPath);

      if (!fs.existsSync(datasetPath)) {
        throw new Error(`❌ Dataset file not found at: ${datasetPath}`);
      }

      const agricultureData = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));

      await Agriculture.deleteMany({});
      await Agriculture.insertMany(agricultureData);
      return { message: '✅ Agriculture data loaded successfully' };
    } catch (error) {
      throw new Error(`❌ Error loading agriculture data: ${error.message}`);
    }
  }

  static async getAllData() {
    try {
      return await Agriculture.find();
    } catch (error) {
      throw new Error(`❌ Error fetching agriculture data: ${error.message}`);
    }
  }
}

module.exports = AgricultureService;
