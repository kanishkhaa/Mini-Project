const Transport = require('../models/Transport');
const path = require('path');
const fs = require('fs');

class TransportService {
  static async loadData() {
    try {
      const datasetPath = path.resolve(__dirname, process.env.DATASET_PATH, 'transport.json');
      console.log('Resolved transport.json path:', datasetPath);

      if (!fs.existsSync(datasetPath)) {
        throw new Error(`❌ Dataset file not found at: ${datasetPath}`);
      }

      const transportData = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));

      await Transport.deleteMany({});
      await Transport.insertMany(transportData);
      return { message: '✅ Transport data loaded successfully' };
    } catch (error) {
      throw new Error(`❌ Error loading transport data: ${error.message}`);
    }
  }

  static async getAllData() {
    try {
      return await Transport.find();
    } catch (error) {
      throw new Error(`❌ Error fetching transport data: ${error.message}`);
    }
  }
}

module.exports = TransportService;
