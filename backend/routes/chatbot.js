const express = require('express');
const router = express.Router();
const { Groq } = require('groq-sdk');
const ChatbotService = require('../services/chatbotService');
const axios = require('axios');

// Initialize Groq with API key from environment variable
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// Map query keywords to API endpoints
const categoryEndpoints = {
  women: 'http://localhost:3000/api/women',
  agriculture: 'http://localhost:3000/api/agriculture',
  education: 'http://localhost:3000/api/education',
  healthcare: 'http://localhost:3000/api/healthcare',
  transport: 'http://localhost:3000/api/transport',
  socialwelfare: 'http://localhost:3000/api/social-welfare'
};

// Chatbot endpoint
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const query = message.toLowerCase();
    let relevantSchemes = [];
    let category = null;

    // Determine if query is category-specific
    for (const [cat, endpoint] of Object.entries(categoryEndpoints)) {
      if (query.includes(cat)) {
        category = cat;
        try {
          const response = await axios.get(endpoint);
          // Filter schemes based on query keywords
          const keywords = query.split(/\s+/);
          relevantSchemes = response.data.filter(scheme =>
            keywords.some(keyword => 
              scheme.scheme_name?.toLowerCase().includes(keyword) ||
              scheme.description?.toLowerCase().includes(keyword)
            )
          );
          break;
        } catch (error) {
          console.error(`Error fetching from ${endpoint}:`, error.message);
        }
      }
    }

    // If no category-specific schemes found, use ChatbotService for broader search
    if (relevantSchemes.length === 0) {
      relevantSchemes = await ChatbotService.getRelevantSchemes(query);
    }

    // Prepare context for Groq
    const context = `
      You are a helpful assistant for government schemes in India. The user asked: "${message}".
      Here are relevant schemes from the dataset:
      ${JSON.stringify(relevantSchemes, null, 2)}.
      Provide a concise and informative response based on the user's query and the provided dataset.
      For each scheme, include ALL relevant details from the dataset, such as scheme name, objectives, benefits (including interest rate, tax benefits, investment limits, maturity period, partial withdrawal if applicable), eligibility criteria, application process, documents required, and official links (e.g., guidelines URL).
      Format the response clearly, using bullet points for key details and including the official link for applying if available.
      If specific details about a scheme are in the dataset, prioritize those over general knowledge.
      Supplement with additional accurate information only if it enhances the dataset details without contradicting them.
      If no relevant schemes are found, provide a general response or suggest related information.
      If multiple schemes are relevant, summarize the most relevant ones (up to 3) to keep the response concise.
    `;

    // Query Groq LLM
    const response = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a knowledgeable assistant about government schemes.' },
        { role: 'user', content: context }
      ],
      model: 'llama-3.3-70b-versatile',
      max_tokens: 1000
    });

    const botResponse = response.choices[0].message.content;
    res.json({ response: botResponse });
  } catch (error) {
    console.error('Error in chatbot route:', error.message);
    res.status(500).json({ error: 'Failed to process chatbot request' });
  }
});

module.exports = router;