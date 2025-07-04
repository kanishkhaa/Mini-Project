const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  scheme_name: String,
  parent_scheme: String,
  ministry: String,
  department: String,
  objectives: [String],
  benefits: {
    loan_amount: String,
    interest_rate: String
  },
  eligibility_criteria: [String],
  application_process: {
    mode: String,
    steps: [String]
  },
  documents_required: [String],
  official_links: {
    guidelines: String
  }
});

module.exports = mongoose.model('Scheme', schemeSchema);