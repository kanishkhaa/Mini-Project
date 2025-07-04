const Education = require('../models/Education');
const path = require('path');
const fs = require('fs');

class EducationService {
  static async loadData() {
    try {
      const datasetPath = path.resolve(__dirname, process.env.DATASET_PATH, 'education.json');
      console.log('Resolved education.json path:', datasetPath);

      if (!fs.existsSync(datasetPath)) {
        throw new Error(`❌ Dataset file not found at: ${datasetPath}`);
      }

      const educationData = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));

      await Education.deleteMany({});
      await Education.insertMany(educationData);
      return { message: '✅ Education data loaded successfully' };
    } catch (error) {
      throw new Error(`❌ Error loading education data: ${error.message}`);
    }
  }

  static async getAllData() {
    try {
      return await Education.find();
    } catch (error) {
      throw new Error(`❌ Error fetching education data: ${error.message}`);
    }
  }
}

module.exports = EducationService;
