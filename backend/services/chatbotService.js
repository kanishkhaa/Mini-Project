const AgricultureService = require('./agricultureService');
const EducationService = require('./educationService');
const HealthcareService = require('./healthcareService');
const SocialWelfareService = require('./socialWelfareService');
const TransportService = require('./transportService');
const WomenService = require('./womenService');

class ChatbotService {
  static async getRelevantSchemes(query) {
    try {
      const keywords = query.toLowerCase().split(/\s+/);
      const categories = ['education', 'healthcare', 'agriculture', 'transport', 'women'];

      // Fetch all schemes from all categories
      const [agriculture, education, healthcare, socialWelfare, transport, women] = await Promise.all([
        AgricultureService.getAllData().then(data => data.flatMap(doc => doc.agriculture_schemes || [])),
        EducationService.getAllData().then(data => data.flatMap(doc => doc.education_schemes || [])),
        HealthcareService.getAllData().then(data => data.flatMap(doc => doc.healthcare_schemes || [])),
        SocialWelfareService.getAllData().then(data => data.flatMap(doc => doc.social_welfare_schemes || [])),
        TransportService.getAllData().then(data => data.flatMap(doc => doc.transport_and_infrastructure_schemes || [])),
        WomenService.getAllData().then(data => data.flatMap(doc => doc.women_schemes || []))
      ]);

      const allSchemes = [
        ...agriculture.map(s => ({ ...s, category: 'agriculture' })),
        ...education.map(s => ({ ...s, category: 'education' })),
        ...healthcare.map(s => ({ ...s, category: 'healthcare' })),
        ...socialWelfare.map(s => ({ ...s, category: 'socialWelfare' })),
        ...transport.map(s => ({ ...s, category: 'transport' })),
        ...women.map(s => ({ ...s, category: 'women' }))
      ];

      // Simple keyword-based filtering
      const relevantSchemes = allSchemes.filter(scheme => {
        const schemeText = `${scheme.name || ''} ${scheme.description || ''}`.toLowerCase();
        return keywords.some(keyword => schemeText.includes(keyword)) || 
               categories.some(category => query.toLowerCase().includes(category));
      });

      return relevantSchemes.slice(0, 5); // Limit to 5 schemes for brevity
    } catch (error) {
      console.error('Error fetching relevant schemes:', error.message);
      return [];
    }
  }
}

module.exports = ChatbotService;