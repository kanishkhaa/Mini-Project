import React, { useState, useEffect } from 'react';
import { Moon, Sun, CheckCircle, Bot, Languages, FileCheck, Users } from 'lucide-react';

const Landing = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark 
      ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' 
      : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDark 
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 shadow-lg shadow-yellow-400/25' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/25'
          }`}
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          
          {/* Left Side - Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Discover the 
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> schemes </span>
                  you deserve
                </h1>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Personalized. Multilingual. Hassle-free
                </p>
              </div>

              {/* Description */}
              <div className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                <p className="mb-4">
                  An AI-powered digital assistant that simplifies the discovery, eligibility checking, and application process for <strong>all types of government welfare schemes</strong>.
                </p>
                <p>
                  The system offers personalized recommendations, multilingual support, and step-by-step guidance, enabling citizens to access the benefits they are entitled to—efficiently and independently.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-300">
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Animations */}
          <div className="lg:w-1/2 flex items-center justify-center relative">
            <div className="relative w-96 h-96">
              
              {/* Main Animation - Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 shadow-2xl animate-pulse ${
                  isDark ? 'shadow-blue-400/30' : 'shadow-blue-500/40'
                }`}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Bot className="w-20 h-20 text-white animate-bounce" />
                  </div>
                </div>
              </div>

              {/* Revolving Animation 1 */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-emerald-400/30' : 'shadow-emerald-500/40'
                }`}>
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Revolving Animation 2 */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-orange-400/30' : 'shadow-orange-500/40'
                }`}>
                  <Languages className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Revolving Animation 3 */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s' }}>
                <div className={`absolute top-1/2 -left-4 transform -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-indigo-400/30' : 'shadow-indigo-500/40'
                }`}>
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Revolving Animation 4 */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '14s', animationDirection: 'reverse' }}>
                <div className={`absolute top-1/2 -right-4 transform -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-pink-400/30' : 'shadow-pink-500/40'
                }`}>
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full ${
                      isDark ? 'bg-cyan-400' : 'bg-blue-400'
                    } animate-ping opacity-70`}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 12}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-20">
          <h2 className={`text-3xl lg:text-4xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/20' 
                : 'bg-white/70 border border-white/20 hover:shadow-2xl hover:shadow-blue-500/20'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                AI-Based Scheme Recommendations
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Suggests suitable central and state government schemes based on your profile. Uses AI to match users with welfare programs across healthcare, education, housing, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 hover:shadow-2xl hover:shadow-emerald-500/20' 
                : 'bg-white/70 border border-white/20 hover:shadow-2xl hover:shadow-emerald-500/20'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Instant Eligibility Checker
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Easy question-based flow to verify eligibility in real-time. Region-aware logic adapts to specific scheme rules and requirements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 hover:shadow-2xl hover:shadow-orange-500/20' 
                : 'bg-white/70 border border-white/20 hover:shadow-2xl hover:shadow-orange-500/20'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Languages className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Multilingual Chatbot Support
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Conversational AI assistant supporting major Indian languages. Offers real-time help for navigation, document guidance, and common queries.
              </p>
            </div>

            {/* Feature 4 */}
            <div className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 hover:shadow-2xl hover:shadow-indigo-500/20' 
                : 'bg-white/70 border border-white/20 hover:shadow-2xl hover:shadow-indigo-500/20'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Automated Application Assistance
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Guides users through the scheme application process step-by-step. Auto-fills known data and verifies document requirements to save time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;