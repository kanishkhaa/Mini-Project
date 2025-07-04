require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Scheme = require('./models/scheme');

const dataPath = path.join(__dirname, '../dataset/scheme.json');

async function importData() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connected for data import');

    // Read and parse the JSON data
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const jsonData = JSON.parse(rawData);

    // Extract the schemes array from the top-level "schemes" key
    const schemes = jsonData.schemes;

    // Clean existing data (optional)
    await Scheme.deleteMany();
    console.log('🗑️ Cleared existing schemes');

    // Insert the schemes into MongoDB
    await Scheme.insertMany(schemes);
    console.log('✅ Schemes imported successfully!');
  } catch (err) {
    console.error('❌ Error importing schemes:', err);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('🔌 MongoDB disconnected');
  }
}

importData();