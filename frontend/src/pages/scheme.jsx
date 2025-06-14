import React, { useState } from 'react';
import {
  Search, Filter, Clock, Star, BookmarkPlus, ExternalLink, Users, MapPin, TrendingUp, Award, ChevronDown, X, Heart, Bell, Sparkles, Target, Gift, Shield, Zap, Sliders,
  Calendar, Building, Home, Briefcase, GraduationCap, Stethoscope, Sprout, Crown, Mountain, Car, Palette
} from 'lucide-react';

const Scheme = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');
  const [savedSchemes, setSavedSchemes] = useState(new Set());
  const [showProviderDropdown, setShowProviderDropdown] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [selectedState, setSelectedState] = useState('all');
  const [selectedFundingRange, setSelectedFundingRange] = useState('all');
  const [selectedApplicationType, setSelectedApplicationType] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [minFunding, setMinFunding] = useState('');
  const [maxFunding, setMaxFunding] = useState('');
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');

  const categories = [
    { id: 'all', label: 'All Categories', icon: Target, color: 'bg-gray-500' },
    { id: 'education', label: 'Education & Scholarships', icon: GraduationCap, color: 'bg-blue-400' },
    { id: 'business', label: 'Business & Startups', icon: Briefcase, color: 'bg-green-500' },
    { id: 'employment', label: 'Employment & Skills', icon: Users, color: 'bg-blue-400' },
    { id: 'innovation', label: 'Innovation & Technology', icon: Zap, color: 'bg-yellow-500' },
    { id: 'healthcare', label: 'Healthcare & Medical', icon: Stethoscope, color: 'bg-red-500' },
    { id: 'agriculture', label: 'Agriculture & Farming', icon: Sprout, color: 'bg-green-600' },
    { id: 'women-empowerment', label: 'Women Empowerment', icon: Crown, color: 'bg-blue-400' },
    { id: 'rural-development', label: 'Rural Development', icon: Mountain, color: 'bg-amber-500' },
    { id: 'housing', label: 'Housing & Infrastructure', icon: Home, color: 'bg-indigo-500' },
    { id: 'transport', label: 'Transport & Mobility', icon: Car, color: 'bg-cyan-500' },
    { id: 'arts-culture', label: 'Arts & Culture', icon: Palette, color: 'bg-rose-500' },
    { id: 'sports', label: 'Sports & Recreation', icon: Award, color: 'bg-orange-500' }
  ];

  const providers = [
    { id: 'all', name: 'All Providers', shortName: 'All' },
    { id: 'meit', name: 'Ministry of Electronics & Information Technology', shortName: 'MeitY' },
    { id: 'dpiit', name: 'Department for Promotion of Industry & Internal Trade', shortName: 'DPIIT' },
    { id: 'mof', name: 'Ministry of Finance', shortName: 'MoF' },
    { id: 'niti', name: 'NITI Aayog', shortName: 'NITI' },
    { id: 'mhrd', name: 'Ministry of Human Resource Development', shortName: 'MHRD' },
    { id: 'msme', name: 'Ministry of Micro, Small & Medium Enterprises', shortName: 'MSME' },
    { id: 'dst', name: 'Department of Science & Technology', shortName: 'DST' },
    { id: 'mwcd', name: 'Ministry of Women & Child Development', shortName: 'MWCD' },
    { id: 'mord', name: 'Ministry of Rural Development', shortName: 'MoRD' },
    { id: 'mha', name: 'Ministry of Health & Family Welfare', shortName: 'MoHFW' },
    { id: 'dbt', name: 'Department of Biotechnology', shortName: 'DBT' },
    { id: 'icssr', name: 'Indian Council of Social Science Research', shortName: 'ICSSR' }
  ];

  const states = [
    'All States', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
    'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'
  ];

  const fundingRanges = [
    { id: 'all', label: 'Any Amount' },
    { id: 'under-1l', label: 'Under ₹1 Lakh' },
    { id: '1l-5l', label: '₹1L - ₹5L' },
    { id: '5l-10l', label: '₹5L - ₹10L' },
    { id: '10l-50l', label: '₹10L - ₹50L' },
    { id: '50l-1cr', label: '₹50L - ₹1Cr' },
    { id: 'above-1cr', label: 'Above ₹1Cr' }
  ];

  const schemes = [
    {
      id: 1,
      name: "Digital India Scholarship Program",
      provider: "Ministry of Electronics & Information Technology",
      providerShort: "MeitY",
      eligibilityScore: 95,
      status: "active",
      category: "education",
      deadline: "2025-08-15",
      benefits: ["₹50,000 annual scholarship", "Internship opportunities", "Skill certification", "Industry mentorship"],
      whySuggested: "Perfect match for your computer science background and academic excellence.",
      description: "Empowering students in technology and digital literacy with comprehensive financial support.",
      applicants: 12540,
      successRate: 78,
      tags: ["Technology", "Higher Education", "Merit-based", "Digital Skills"],
      featured: true,
      urgency: "medium",
      fundingAmount: 50000,
      duration: "1 year",
      complexity: "medium",
      region: "Nationwide",
      applicantType: "individual",
      schemeType: "grant",
      location: "Pan India",
      applicationType: "Individual"
    },
    {
      id: 2,
      name: "Startup India Seed Fund",
      provider: "Department for Promotion of Industry & Internal Trade",
      providerShort: "DPIIT",
      eligibilityScore: 88,
      status: "active",
      category: "business",
      deadline: "2025-09-30",
      benefits: ["Up to ₹20 lakhs funding", "Mentorship program", "Market access support", "Legal compliance guidance"],
      whySuggested: "Your entrepreneurial profile and innovative business plan align perfectly.",
      description: "Supporting early-stage startups with seed funding and business support.",
      applicants: 8750,
      successRate: 45,
      tags: ["Entrepreneurship", "Funding", "Innovation", "Startup"],
      featured: true,
      urgency: "low",
      fundingAmount: 2000000,
      duration: "2 years",
      complexity: "high",
      region: "Nationwide",
      applicantType: "organization",
      schemeType: "grant",
      location: "Pan India",
      applicationType: "Organization"
    },
    {
      id: 3,
      name: "Atal Innovation Mission",
      provider: "NITI Aayog",
      providerShort: "NITI",
      eligibilityScore: 85,
      status: "closing-soon",
      category: "innovation",
      deadline: "2025-06-25",
      benefits: ["₹2 crore funding", "Incubation support", "Global exposure", "Patent assistance"],
      whySuggested: "Your innovative project ideas and technical expertise make you a strong candidate.",
      description: "Fostering innovation and entrepreneurship across educational institutions.",
      applicants: 3200,
      successRate: 32,
      tags: ["Innovation", "Research", "Technology", "Incubation"],
      featured: true,
      urgency: "high",
      fundingAmount: 20000000,
      duration: "3 years",
      complexity: "high",
      region: "Nationwide",
      applicantType: "group",
      schemeType: "grant",
      location: "Pan India",
      applicationType: "Institution"
    },
    {
      id: 4,
      name: "Pradhan Mantri Mudra Yojana",
      provider: "Ministry of Finance",
      providerShort: "MoF",
      eligibilityScore: 82,
      status: "active",
      category: "business",
      deadline: "2025-12-31",
      benefits: ["Loan up to ₹10 lakhs", "No collateral required", "Flexible repayment", "Business advisory services"],
      whySuggested: "Ideal for small business ventures with your credit profile.",
      description: "Providing micro-finance support to small and medium enterprises.",
      applicants: 25600,
      successRate: 65,
      tags: ["Micro-finance", "MSME", "Collateral-free", "Business Loan"],
      featured: false,
      urgency: "low",
      fundingAmount: 1000000,
      duration: "5 years",
      complexity: "medium",
      region: "Nationwide",
      applicantType: "individual",
      schemeType: "loan",
      location: "Pan India",
      applicationType: "Individual"
    },
    {
      id: 5,
      name: "National Career Service Portal",
      provider: "Ministry of Labour & Employment",
      providerShort: "MoLE",
      eligibilityScore: 76,
      status: "active",
      category: "employment",
      deadline: "2025-07-20",
      benefits: ["Job matching services", "Skill assessment", "Career counseling", "Interview preparation"],
      whySuggested: "Matches your skill set and career aspirations in the IT sector.",
      description: "Connecting job seekers with employers through advanced matching algorithms.",
      applicants: 45200,
      successRate: 58,
      tags: ["Employment", "Skill Development", "Career Growth", "Job Placement"],
      featured: false,
      urgency: "medium",
      fundingAmount: 0,
      duration: "Ongoing",
      complexity: "low",
      region: "Nationwide",
      applicantType: "individual",
      schemeType: "service",
      location: "Pan India",
      applicationType: "Individual"
    },
    {
      id: 6,
      name: "Skill India Digital Platform",
      provider: "Ministry of Skill Development",
      providerShort: "MSD",
      eligibilityScore: 84,
      status: "active",
      category: "education",
      deadline: "2025-10-15",
      benefits: ["Free certification courses", "Industry partnerships", "Job placement assistance", "Digital badges"],
      whySuggested: "Your interest in continuous learning aligns with this platform.",
      description: "Comprehensive digital platform offering skill development courses.",
      applicants: 18900,
      successRate: 72,
      tags: ["Skills", "Certification", "Digital Learning", "Employment"],
      featured: true,
      urgency: "medium",
      fundingAmount: 0,
      duration: "6 months",
      complexity: "low",
      region: "Nationwide",
      applicantType: "individual",
      schemeType: "service",
      location: "Pan India",
      applicationType: "Individual"
    },
    {
      id: 7,
      name: "Ayushman Bharat Health Scheme",
      provider: "Ministry of Health",
      providerShort: "MoHFW",
      eligibilityScore: 80,
      status: "active",
      category: "healthcare",
      deadline: "2025-11-30",
      benefits: ["Free healthcare coverage", "Hospitalization support", "Health check-ups", "Medical consultations"],
      whySuggested: "Your profile indicates a need for accessible healthcare support.",
      description: "Providing universal healthcare coverage for underprivileged families.",
      applicants: 30000,
      successRate: 70,
      tags: ["Healthcare", "Medical Support", "Universal Coverage", "Wellness"],
      featured: false,
      urgency: "medium",
      fundingAmount: 0,
      duration: "Ongoing",
      complexity: "low",
      region: "Nationwide",
      applicantType: "individual",
      schemeType: "service",
      location: "Pan India",
      applicationType: "Individual"
    },
    {
      id: 8,
      name: "Kisan Samman Nidhi",
      provider: "Ministry of Agriculture",
      providerShort: "MoA",
      eligibilityScore: 85,
      status: "active",
      category: "agriculture",
      deadline: "2025-09-15",
      benefits: ["₹6,000 annual support", "Crop insurance", "Agricultural training", "Market access"],
      whySuggested: "Ideal for your agricultural background and land ownership.",
      description: "Financial support for small and marginal farmers to enhance productivity.",
      applicants: 50000,
      successRate: 80,
      tags: ["Agriculture", "Farmer Support", "Financial Aid", "Rural Development"],
      featured: false,
      urgency: "medium",
      fundingAmount: 6000,
      duration: "Ongoing",
      complexity: "medium",
      region: "Nationwide",
      applicantType: "individual",
      schemeType: "grant",
      location: "Pan India",
      applicationType: "Individual"
    },
    {
      id: 9,
      name: "Beti Bachao Beti Padhao",
      provider: "Ministry of Women & Child Development",
      providerShort: "MWCD",
      eligibilityScore: 82,
      status: "active",
      category: "women-empowerment",
      deadline: "2025-12-15",
      benefits: ["Education subsidies", "Skill training", "Financial aid for girls", "Community support"],
      whySuggested: "Ideal for supporting female education and empowerment in your community.",
      description: "Promoting education and welfare for girls to ensure equal opportunities.",
      applicants: 22000,
      successRate: 75,
      tags: ["Women Empowerment", "Education", "Girl Child", "Financial Aid"],
      featured: false,
      urgency: "medium",
      fundingAmount: 10000,
      duration: "Ongoing",
      complexity: "low",
      region: "Nationwide",
      applicantType: "individual",
      schemeType: "grant",
      location: "Pan India",
      applicationType: "Individual"
    },
    {
      id: 10,
      name: "PM Gram Sadak Yojana",
      provider: "Ministry of Rural Development",
      providerShort: "MoRD",
      eligibilityScore: 78,
      status: "active",
      category: "rural-development",
      deadline: "2025-10-31",
      benefits: ["Infrastructure funding", "Road connectivity support", "Community development", "Employment opportunities"],
      whySuggested: "Suitable for your involvement in rural infrastructure projects.",
      description: "Enhancing rural connectivity through road infrastructure development.",
      applicants: 15000,
      successRate: 68,
      tags: ["Rural Development", "Infrastructure", "Connectivity", "Employment"],
      featured: false,
      urgency: "low",
      fundingAmount: 5000000,
      duration: "3 years",
      complexity: "high",
      region: "Rural Areas",
      applicantType: "group",
      schemeType: "grant",
      location: "Rural Areas",
      applicationType: "Group"
    }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesProvider = selectedProvider === 'all' || scheme.providerShort === selectedProvider;
    const matchesCategory = activeFilter === 'all' || scheme.category === activeFilter;
    const matchesFunding = selectedFundingRange === 'all' ||
                          (selectedFundingRange === 'under-1l' && scheme.fundingAmount < 100000) ||
                          (selectedFundingRange === '1l-5l' && scheme.fundingAmount >= 100000 && scheme.fundingAmount <= 500000) ||
                          (selectedFundingRange === '5l-10l' && scheme.fundingAmount > 500000 && scheme.fundingAmount <= 1000000) ||
                          (selectedFundingRange === '10l-50l' && scheme.fundingAmount > 1000000 && scheme.fundingAmount <= 5000000) ||
                          (selectedFundingRange === '50l-1cr' && scheme.fundingAmount > 5000000 && scheme.fundingAmount <= 10000000) ||
                          (selectedFundingRange === 'above-1cr' && scheme.fundingAmount > 10000000);
    const matchesApplicationType = selectedApplicationType === 'all' || scheme.applicationType.toLowerCase() === selectedApplicationType.toLowerCase();
    const matchesDuration = selectedDuration === 'all' || scheme.duration === selectedDuration;
    const matchesState = selectedState === 'all' || scheme.location === selectedState;
    const matchesSaved = !showSavedOnly || savedSchemes.has(scheme.id);

    return matchesSearch && matchesProvider && matchesCategory && matchesFunding &&
           matchesApplicationType && matchesDuration && matchesState && matchesSaved;
  });

  const sortedSchemes = [...filteredSchemes].sort((a, b) => {
    switch (sortBy) {
      case 'eligibility':
        return b.eligibilityScore - a.eligibilityScore;
      case 'deadline':
        return new Date(a.deadline) - new Date(b.deadline);
      case 'funding':
        return b.fundingAmount - a.fundingAmount;
      default:
        return b.eligibilityScore - a.eligibilityScore;
    }
  });

  const topSchemes = sortedSchemes.filter(scheme => scheme.featured).slice(0, 3);
  const regularSchemes = sortedSchemes.filter(scheme => !scheme.featured);

  const handleSaveScheme = (schemeId) => {
    const newSaved = new Set(savedSchemes);
    if (newSaved.has(schemeId)) {
      newSaved.delete(schemeId);
    } else {
      newSaved.add(schemeId);
    }
    setSavedSchemes(newSaved);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'closing-soon':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-blue-100 text-blue-400 border-blue-200';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatFunding = (amount) => {
    if (amount === 0) return 'Free';
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const formatDeadline = (deadline) => {
    const date = new Date(deadline);
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays <= 30) return `${diffDays} days left`;
    return date.toLocaleDateString();
  };

  const getSelectedProviderName = () => {
    const provider = providers.find(p => p.id === selectedProvider);
    return provider ? provider.shortName : 'All';
  };

  const resetFilters = () => {
    if (window.confirm('Are you sure you want to reset all filters?')) {
      setSearchQuery('');
      setSelectedProvider('all');
      setActiveFilter('all');
      setSelectedState('all');
      setSelectedFundingRange('all');
      setSelectedApplicationType('all');
      setSelectedDuration('all');
      setMinFunding('');
      setMaxFunding('');
      setSelectedAge('all');
      setSelectedGender('all');
      setSortBy('relevance');
      setShowSavedOnly(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out; }
          .animate-slide-in { animation: slideIn 0.3s ease-out; }
          .hover-scale { transition: transform 0.2s ease, box-shadow 0.3s ease; }
          .hover-scale:hover { transform: translateY(-2px); box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1); }
          .category-chip { transition: all 0.2s ease; }
          .category-chip:hover { transform: scale(1.02); }
          .progress-bar { background: linear-gradient(to right, #3B82F6 var(--progress), #E5E7EB var(--progress)); }
        `}
      </style>

      {/* Header */}
      <div className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Personalized Scheme Finder</h1>
                <p className="text-gray-600 mt-1 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  AI-driven recommendations tailored to your profile
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                <span className="text-sm text-green-700 font-semibold flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  {filteredSchemes.length} schemes found
                </span>
              </div>
              <div className="bg-blue-600 px-5 py-2 rounded-lg">
                <span className="text-sm text-white font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4 fill-current" />
                  Profile: 87% Complete
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Search and Filters Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-8 overflow-hidden">
          {/* Search Bar */}
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-600">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-blue-200" />
              </div>
              <input
                type="text"
                placeholder="Search schemes, providers, keywords, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-200 text-white placeholder-blue-200 text-lg"
              />
            </div>
          </div>

          {/* Enhanced Category Filters */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
              <span className="text-sm text-gray-500">({categories.length})</span>
            </div>
            
            {/* Horizontal Scrollable Categories */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map(category => {
                const IconComponent = category.icon;
                const isActive = activeFilter === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`category-chip group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md border-blue-600'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-400 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className={`p-1 rounded-full ${
                      isActive ? 'bg-white/20' : category.color
                    }`}>
                      <IconComponent className={`h-3.5 w-3.5 ${
                        isActive ? 'text-white' : 'text-white'
                      }`} />
                    </div>
                    <span>{category.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                  </button>
                );
              })}
            </div>
            
            {/* Compact Stats */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-600">
                  <span className="font-semibold text-blue-600">{filteredSchemes.length}</span> schemes
                </span>
                <span className="text-gray-600">
                  <span className="font-semibold text-green-600">{filteredSchemes.filter(s => s.status === 'active').length}</span> active
                </span>
                <span className="text-gray-600">
                  <span className="font-semibold text-orange-600">{filteredSchemes.filter(s => s.status === 'closing-soon').length}</span> closing soon
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-400 text-sm font-medium">
                View All →
              </button>
            </div>
          </div>

 {/* Enhanced Action Filters */}
<div className="px-6 py-6 relative"> {/* Ensure relative positioning for stacking context */}
  <div className="flex flex-wrap items-center gap-4">
    {/* Provider Filter with Selected Display */}
    <div className="relative z-50"> {/* Increased z-index for the entire provider filter block */}
      <button
        onClick={() => setShowProviderDropdown(!showProviderDropdown)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
          selectedProvider !== 'all' 
            ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
            : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'
        }`}
      >
        <Building className="h-4 w-4" />
        <span className="text-sm font-medium">{getSelectedProviderName()}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${showProviderDropdown ? 'rotate-180' : ''}`} />
      </button>
      {showProviderDropdown && (
        <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-xl shadow-xl z-[60] min-w-80 max-h-80 overflow-y-auto animate-fade-in"> {/* Increased z-index to 60 */}
          <div className="p-2">
            {providers.map(provider => (
              <button
                key={provider.id}
                onClick={() => {
                  setSelectedProvider(provider.id);
                  setShowProviderDropdown(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                  selectedProvider === provider.id 
                    ? 'bg-blue-50 text-blue-400 border border-blue-200' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{provider.shortName}</span>
                  {selectedProvider === provider.id && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
                <span className="text-xs text-gray-500 mt-1 block">{provider.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Enhanced Sort Dropdown */}
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 text-sm text-gray-700 font-medium"
    >
      <option value="relevance">🎯 Best Match</option>
      <option value="eligibility">📊 Eligibility Score</option>
      <option value="deadline">⏰ Deadline</option>
      <option value="funding">💰 Funding Amount</option>
    </select>

    {/* Enhanced Saved Toggle */}
    <button
      onClick={() => setShowSavedOnly(!showSavedOnly)}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 font-medium ${
        showSavedOnly 
          ? 'bg-red-600 text-white shadow-md' 
          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
      }`}
    >
      <Heart className={`h-4 w-4 ${showSavedOnly ? 'fill-current' : ''}`} />
      <span className="text-sm">Saved ({savedSchemes.size})</span>
    </button>

    {/* Advanced Filters */}
    <button
      onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 font-medium ${
        showAdvancedFilters 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700 border'
      }`}
    >
      <Sliders className="h-4 w-4" />
      <span className="text-sm">Advanced</span>
    </button>

    {/* Reset Filters */}
    <button
      onClick={resetFilters}
      className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-all duration-200 text-gray-700 font-medium"
    >
      <X className="h-4 w-4" />
      <span className="text-sm">Reset</span>
    </button>
  </div>
</div>

          {/* Enhanced Advanced Filters Panel */}
          {showAdvancedFilters && (
            <div className="px-6 py-6 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Sliders className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Advanced Filters</h4>
                    <p className="text-sm text-gray-600">Fine-tune your search criteria</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowAdvancedFilters(false)}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-white rounded-lg transition-all"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Location Filter */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    Location
                  </label>
                  <select 
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                  >
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* Funding Range */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Gift className="h-4 w-4 text-green-600" />
                    Funding Range
                  </label>
                  <select 
                    value={selectedFundingRange}
                    onChange={(e) => setSelectedFundingRange(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                  >
                    {fundingRanges.map(range => (
                      <option key={range.id} value={range.id}>{range.label}</option>
                    ))}
                  </select>
                </div>

                {/* Application Type */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Users className="h-4 w-4 text-blue-600" />
                    Applicant Type
                  </label>
                  <select 
                    value={selectedApplicationType}
                    onChange={(e) => setSelectedApplicationType(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                  >
                    <option value="all">All Types</option>
                    <option value="individual">Individual</option>
                    <option value="organization">Organization</option>
                    <option value="institution">Institution</option>
                    <option value="startup">Startup</option>
                    <option value="sme">SME</option>
                    <option value="ngo">NGO</option>
                  </select>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Calendar className="h-4 w-4 text-orange-600" />
                    Duration
                  </label>
                  <select 
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                  >
                    <option value="all">Any Duration</option>
                    <option value="3months">3 months</option>
                    <option value="6months">6 months</option>
                    <option value="1year">1 year</option>
                    <option value="2years">2 years</option>
                    <option value="3years">3+ years</option>
                  </select>
                </div>

                {/* Custom Funding Range */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <TrendingUp className="h-4 w-4 text-indigo-600" />
                    Custom Amount (₹)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={minFunding}
                      onChange={(e) => setMinFunding(e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxFunding}
                      onChange={(e) => setMaxFunding(e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                  </div>
                </div>

                {/* Age Group */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Users className="h-4 w-4 text-teal-600" />
                    Age Group
                  </label>
                  <select 
                    value={selectedAge}
                    onChange={(e) => setSelectedAge(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                  >
                    <option value="all">All Ages</option>
                    <option value="under-18">Under 18</option>
                    <option value="18-25">18-25 years</option>
                    <option value="26-35">26-35 years</option>
                    <option value="36-45">36-45 years</option>
                    <option value="above-45">Above 45</option>
                  </select>
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Crown className="h-4 w-4 text-blue-600" />
                    Gender Focus
                  </label>
                  <select 
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-sm bg-white"
                  >
                    <option value="all">All Genders</option>
                    <option value="women-only">Women Only</option>
                    <option value="men-only">Men Only</option>
                    <option value="transgender">Transgender</option>
                    <option value="gender-neutral">Gender Neutral</option>
                  </select>
                </div>

                {/* Quick Actions */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Zap className="h-4 w-4 text-yellow-600" />
                    Quick Filters
                  </label>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-all text-sm font-medium">
                      ⚡ Closing This Week
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-blue-50 text-blue-400 rounded-lg hover:bg-blue-100 transition-all text-sm font-medium">
                      🎯 High Match Score
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Top Picks Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 p-3 rounded-2xl">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">✨ Top Picks for You</h2>
              <p className="text-gray-600 text-lg">AI-powered recommendations based on your profile and preferences</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {topSchemes.map((scheme, index) => (
              <div key={scheme.id} className="group hover-scale animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 h-full overflow-hidden">
                  {/* Gradient Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 to-blue-400/10 rounded-full -mr-16 -mt-16"></div>
                  
                  {/* Enhanced Header */}
                  <div className="flex items-start justify-between mb-6 relative">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getUrgencyColor(scheme.urgency)} shadow-lg`}></div>
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${getStatusColor(scheme.status)}`}>
                        {scheme.status === 'closing-soon' ? '🔥 Closing Soon' : '✅ Active'}
                      </span>
                      {scheme.eligibilityScore >= 90 && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold border border-yellow-200">
                          🏆 Top Match
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleSaveScheme(scheme.id)}
                      className={`p-2.5 rounded-xl transition-all duration-200 ${
                        savedSchemes.has(scheme.id)
                          ? 'bg-red-50 text-red-600 shadow-md scale-110'
                          : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:scale-110'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${savedSchemes.has(scheme.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Enhanced Scheme Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">{scheme.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-1.5 bg-blue-100 rounded-lg">
                        <Building className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{scheme.providerShort}</p>
                        <p className="text-xs text-gray-500">{scheme.provider}</p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Match Score */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        Match Score
                      </span>
                      <span className="text-lg font-bold text-blue-600">{scheme.eligibilityScore}%</span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${scheme.eligibilityScore}%` }}
                      ></div>
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>

                  {/* Enhanced Quick Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Gift className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-semibold text-green-700">Funding</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">{formatFunding(scheme.fundingAmount)}</span>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border border-orange-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-700">Deadline</span>
                      </div>
                      <span className={`text-sm font-bold ${
                        scheme.status === 'closing-soon' ? 'text-red-600' : 'text-gray-900'
                      }`}>
                        {formatDeadline(scheme.deadline)}
                      </span>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-semibold text-blue-400">Location</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">{scheme.location}</span>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-semibold text-blue-400">Type</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">{scheme.applicationType}</span>
                    </div>
                  </div>

                  {/* Enhanced Apply Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 text-white px-6 py-4 rounded-xl hover:from-blue-400 hover:via-blue-400 hover:to-blue-400 transition-all duration-200 flex items-center justify-center gap-3 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                    <ExternalLink className="h-5 w-5" />
                    Apply Now
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </button>
                  
                  {/* Additional Actions */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium">
                      📋 Details
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium">
                      📊 Eligibility
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium">
                      🔔 Remind
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Schemes */}
        <div className="grid gap-6">
          {regularSchemes.map(scheme => (
            <div key={scheme.id} className="bg-white rounded-xl shadow-md border border-gray-200 hover-scale transition-all duration-300">
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{scheme.name}</h3>
                          <div className={`w-3 h-3 rounded-full ${getUrgencyColor(scheme.urgency)}`}></div>
                        </div>
                        <p className="text-gray-600 mb-4">{scheme.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {scheme.provider}
                          </span>
                          <span className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {scheme.applicants.toLocaleString()} applicants
                          </span>
                          <span className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            {scheme.successRate}% success rate
                          </span>
                          <span className="flex items-center gap-2">
                            <Gift className="h-4 w-4" />
                            {formatFunding(scheme.fundingAmount)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleSaveScheme(scheme.id)}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          savedSchemes.has(scheme.id)
                            ? 'bg-red-50 text-red-600 hover:bg-red-100'
                            : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${savedSchemes.has(scheme.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="progress-bar h-2 rounded-full" style={{ '--progress': `${scheme.eligibilityScore}%` }}></div>
                    </div>
                    <div className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-bold">{scheme.eligibilityScore}% Match</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(scheme.status)}`}>
                      {scheme.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Why Suggested */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    Why this scheme fits you
                  </h4>
                  <p className="text-blue-800">{scheme.whySuggested}</p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    Key Benefits
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {scheme.benefits.map((benefit, index) => (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center gap-2">
                        <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {scheme.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm border border-gray-200 hover:bg-gray-200 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Deadline: </span>
                    <span className={`font-semibold ${scheme.status === 'closing-soon' ? 'text-yellow-600' : 'text-gray-900'}`}>
                      {formatDeadline(scheme.deadline)}
                    </span>
                    {scheme.status === 'closing-soon' && (
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Bell className="h-3 w-3" />
                        URGENT
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleSaveScheme(scheme.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 transition-all duration-200 ${
                        savedSchemes.has(scheme.id) ? 'bg-gray-100 text-gray-700' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <BookmarkPlus className="h-4 w-4" />
                      {savedSchemes.has(scheme.id) ? 'Saved' : 'Save'}
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition-all duration-200 flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedSchemes.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-12 max-w-md mx-auto">
              <div className="text-gray-400 mb-6">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No schemes found</h3>
              <p className="text-gray-600 mb-6">Adjust your search or filters to explore more opportunities.</p>
              <button
                onClick={resetFilters}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition-all duration-200"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{schemes.length}</div>
              <div className="text-gray-600">Total Schemes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">
                {Math.round(schemes.reduce((acc, scheme) => acc + scheme.eligibilityScore, 0) / schemes.length)}%
              </div>
              <div className="text-gray-600">Avg Match Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600 mb-1">
                {schemes.reduce((acc, scheme) => acc + scheme.applicants, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Total Applicants</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {Math.round(schemes.reduce((acc, scheme) => acc + scheme.successRate, 0) / schemes.length)}%
              </div>
              <div className="text-gray-600">Avg Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheme;