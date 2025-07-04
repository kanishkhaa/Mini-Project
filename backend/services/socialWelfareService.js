const SocialWelfare = require('../models/SocialWelfare');
const path = require('path');
const fs = require('fs');

class SocialWelfareService {
  static async loadData() {
    try {
      const datasetPath = path.resolve(__dirname, process.env.DATASET_PATH, 'socialwelfare.json');
      console.log('Resolved socialwelfare.json path:', datasetPath);

      if (!fs.existsSync(datasetPath)) {
        throw new Error(`❌ Dataset file not found at: ${datasetPath}`);
      }

      const socialWelfareData = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));

      await SocialWelfare.deleteMany({});
      await SocialWelfare.insertMany(socialWelfareData);
      return { message: '✅ Social Welfare data loaded successfully' };
    } catch (error) {
      throw new Error(`❌ Error loading social welfare data: ${error.message}`);
    }
  }

  static async getAllData() {
    try {
      return await SocialWelfare.find();
    } catch (error) {
      throw new Error(`❌ Error fetching social welfare data: ${error.message}`);
    }
  }
}

module.exports = SocialWelfareService;
