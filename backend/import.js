require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const path = require('path');

// Import models
const Agriculture = require('./models/Agriculture');
const Education = require('./models/Education');
const Healthcare = require('./models/Healthcare');
const SocialWelfare = require('./models/SocialWelfare');
const Transport = require('./models/Transport');
const Women = require('./models/Women');

// Import dataset files
const agricultureData = require(path.join(process.env.DATASET_PATH, 'agriculture.json'));
const educationData = require(path.join(process.env.DATASET_PATH, 'education.json'));
const healthcareData = require(path.join(process.env.DATASET_PATH, 'healthcare.json'));
const socialWelfareData = require(path.join(process.env.DATASET_PATH, 'socialwelfare.json'));
const transportData = require(path.join(process.env.DATASET_PATH, 'transport.json'));
const womenData = require(path.join(process.env.DATASET_PATH, 'women.json'));

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Import function for a single collection
const importData = async (Model, data, collectionName) => {
  try {
    await Model.deleteMany({});
    await Model.insertMany(data);
    console.log(`${collectionName} data imported successfully`);
  } catch (error) {
    console.error(`Error importing ${collectionName} data:`, error);
    throw error;
  }
};

// Main import function
const importAllData = async () => {
  try {
    await connectDB();

    // Import all datasets
    await Promise.all([
      importData(Agriculture, agricultureData, 'Agriculture'),
      importData(Education, educationData, 'Education'),
      importData(Healthcare, healthcareData, 'Healthcare'),
      importData(SocialWelfare, socialWelfareData, 'SocialWelfare'),
      importData(Transport, transportData, 'Transport'),
      importData(Women, womenData, 'Women'),
    ]);

    console.log('All datasets imported successfully');
  } catch (error) {
    console.error('Import failed:', error);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  }
};

// Run the import
importAllData();