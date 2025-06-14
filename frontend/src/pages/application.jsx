import React, { useState } from 'react';
import {
  FileText,
  CheckCircle,
  Upload,
  Lightbulb,
  List,
  Info,
  AlertTriangle,
  Search,
  Filter,
  Download,
  ChevronRight,
  Clock,
  DollarSign,
  Users,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
} from 'lucide-react';

const Application = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [error, setError] = useState(null);

  const schemes = [
    {
      id: 1,
      name: 'Soil Health Card',
      category: 'Agriculture',
      description: 'Providing farmers with comprehensive nutrient management solutions to improve soil quality and increase crop yield',
      eligibility: 'Small and marginal farmers with cultivable land',
      amount: '₹6,000 per year',
      deadline: '2025-12-31',
      applicants: '12M+',
      status: 'Active',
      rating: 4.8,
      location: 'Pan India',
    },
    {
      id: 2,
      name: 'Startup India Initiative',
      category: 'Business',
      description: 'Comprehensive support ecosystem for startups and entrepreneurs to foster innovation and business growth',
      eligibility: 'Innovative startups with DPIIT recognition',
      amount: 'Up to ₹10 Lakhs',
      deadline: '2025-10-15',
      applicants: '500K+',
      status: 'Active',
      rating: 4.6,
      location: 'Pan India',
    },
    {
      id: 3,
      name: 'Beti Bachao Beti Padhao',
      category: 'Education',
      description: 'Promotes girls\' education and empowerment through comprehensive support and awareness programs',
      eligibility: 'Girl child and women empowerment initiatives',
      amount: 'Varies by component',
      deadline: '2025-11-30',
      applicants: '2M+',
      status: 'Active',
      rating: 4.9,
      location: 'Pan India',
    },
    {
      id: 4,
      name: 'Ayushman Bharat',
      category: 'Healthcare',
      description: 'National health protection scheme providing cashless healthcare services to vulnerable families',
      eligibility: 'Families identified through SECC database',
      amount: 'Up to ₹5 Lakhs per family',
      deadline: '2025-12-31',
      applicants: '50M+',
      status: 'Active',
      rating: 4.7,
      location: 'Pan India',
    },
  ];

  const categories = ['all', 'Agriculture', 'Business', 'Education', 'Healthcare', 'Women Empowerment'];

  const schemeDetails = {
    requiredDocuments: [
      'Aadhaar Card (Original + Photocopy)',
      'Bank Account Details (Passbook/Statement)',
      'Income Certificate (Latest)',
      'Residence Proof (Utility Bill/Rent Agreement)',
      'Category Certificate (if applicable)',
      'Educational Qualification Certificate',
      'Passport Size Photographs (Recent)',
      'Active Mobile Number',
      'Active Email ID',
    ],
    eligibilityCriteria: [
      'Must be an Indian citizen',
      'Age between 18-60 years',
      'Annual family income within specified limit',
      'Not a beneficiary of similar schemes',
      'Valid bank account in applicant\'s name',
      'Complete address proof required',
      'Meets scheme-specific educational qualifications',
    ],
    submissionFormat: [
      'Complete application form in BLOCK LETTERS',
      'Attach documents in specified order',
      'Self-attest all photocopies',
      'Use black/blue ink for signatures',
      'Submit before deadline',
      'Retain acknowledgment receipt',
      'Ensure information matches documents',
    ],
    smartTips: [
      'Apply early to avoid delays',
      'Verify all documents before submission',
      'Keep multiple document copies',
      'Use official portal for applications',
      'Save application reference number',
      'Confirm eligibility thoroughly',
      'Contact helpline for clarification',
      'Track application status regularly',
    ],
    stepByStepGuide: [
      'Visit official scheme portal',
      'Review scheme guidelines',
      'Verify eligibility',
      'Collect required documents',
      'Complete application accurately',
      'Upload/attach documents',
      'Review before submission',
      'Submit and save receipt',
      'Note application reference number',
      'Monitor application status',
    ],
    postSubmissionInfo: [
      'Receive SMS/Email confirmation',
      'Verification within 15-30 days',
      'Possible field verification',
      'Status updates via SMS/Email',
      'Funds credited to bank account',
      'Check status online',
      'Contact helpline if no response after 45 days',
      'Certificate/sanction letter issued',
    ],
    dosAndDonts: {
      dos: [
        'Verify eligibility criteria thoroughly before applying',
        'Submit applications well before the deadline',
        'Ensure all documents are self-attested and valid',
        'Use the official portal for submissions',
        'Keep copies of all submitted documents',
        'Track application status regularly',
        'Provide accurate bank account details',
        'Contact the helpline for any clarifications',
      ],
      donts: [
        'Don\'t submit incomplete or illegible forms',
        'Don\'t provide false or mismatched information',
        'Don\'t miss the submission deadline',
        'Don\'t apply without meeting eligibility criteria',
        'Don\'t lose the acknowledgment receipt',
        'Don\'t use invalid or expired documents',
        'Don\'t ignore status updates or verification requests',
        'Don\'t share sensitive information on unofficial platforms',
      ],
    },
  };

  const filteredSchemes = schemes.filter(scheme => {
    try {
      const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
      return matchesSearch && matchesCategory;
    } catch (err) {
      setError('Error filtering schemes. Please try again.');
      return false;
    }
  });

  const TabButton = ({ id, label, icon: Icon, active, onClick }) => (
    <button
      onClick={() => {
        try {
          onClick(id.toLowerCase());
        } catch (err) {
          setError('Error switching tabs. Please try again.');
        }
      }}
      className={`flex items-center px-6 py-3.5 rounded-2xl font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
        active 
          ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-xl shadow-blue-500/30 border border-blue-200' 
          : 'bg-white/70 text-slate-700 hover:bg-sky-50/80 hover:text-sky-700 hover:shadow-md border border-sky-100 backdrop-blur-sm'
      }`}
    >
      <Icon className="w-5 h-5 mr-2.5" />
      {label}
    </button>
  );

  const SchemeCard = ({ scheme }) => (
    <div
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 border border-sky-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer group relative overflow-hidden"
      onClick={() => {
        try {
          setSelectedScheme(scheme);
        } catch (err) {
          setError('Error selecting scheme. Please try again.');
        }
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Left border accent */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-3">
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-700 transition-colors duration-300">{scheme.name}</h3>
              <span className="inline-block bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-3 py-1.5 rounded-full text-xs font-semibold border border-sky-200">
                {scheme.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-current" />
                <span className="text-sm font-medium text-slate-600">{scheme.rating}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-slate-600 text-sm mb-5 leading-relaxed">{scheme.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-sm text-slate-600 bg-sky-50/50 p-3 rounded-xl">
            <DollarSign className="w-4 h-4 mr-2 text-emerald-500" />
            <span className="font-medium">{scheme.amount}</span>
          </div>
          <div className="flex items-center text-sm text-slate-600 bg-sky-50/50 p-3 rounded-xl">
            <Users className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-medium">{scheme.applicants}</span>
          </div>
          <div className="flex items-center text-sm text-slate-600 bg-sky-50/50 p-3 rounded-xl">
            <Calendar className="w-4 h-4 mr-2 text-amber-500" />
            <span className="font-medium">{scheme.deadline}</span>
          </div>
          <div className="flex items-center text-sm text-slate-600 bg-sky-50/50 p-3 rounded-xl">
            <MapPin className="w-4 h-4 mr-2 text-rose-500" />
            <span className="font-medium">{scheme.location}</span>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3.5 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group/btn">
          View Details
          <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );

  const DetailSection = ({ title, icon: Icon, items, color }) => {
    const colorClasses = {
      green: {
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
        numberBg: 'bg-emerald-50',
        numberColor: 'text-emerald-600',
        borderColor: 'border-emerald-200',
        hoverBg: 'hover:bg-emerald-50'
      },
      blue: {
        iconBg: 'bg-sky-100',
        iconColor: 'text-sky-600',
        numberBg: 'bg-sky-50',
        numberColor: 'text-sky-600',
        borderColor: 'border-sky-200',
        hoverBg: 'hover:bg-sky-50'
      },
      purple: {
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        numberBg: 'bg-purple-50',
        numberColor: 'text-purple-600',
        borderColor: 'border-purple-200',
        hoverBg: 'hover:bg-purple-50'
      },
      yellow: {
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
        numberBg: 'bg-amber-50',
        numberColor: 'text-amber-600',
        borderColor: 'border-amber-200',
        hoverBg: 'hover:bg-amber-50'
      },
      indigo: {
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
        numberBg: 'bg-indigo-50',
        numberColor: 'text-indigo-600',
        borderColor: 'border-indigo-200',
        hoverBg: 'hover:bg-indigo-50'
      },
      teal: {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        numberBg: 'bg-teal-50',
        numberColor: 'text-teal-600',
        borderColor: 'border-teal-200',
        hoverBg: 'hover:bg-teal-50'
      },
      red: {
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        numberBg: 'bg-red-50',
        numberColor: 'text-red-600',
        borderColor: 'border-red-200',
        hoverBg: 'hover:bg-red-50'
      }
    };

    const colors = colorClasses[color] || colorClasses.blue;

    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-sky-100 shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="flex items-center mb-7">
          <div className={`p-4 rounded-2xl ${colors.iconBg} mr-4 shadow-sm`}>
            <Icon className={`w-7 h-7 ${colors.iconColor}`} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
        </div>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className={`flex items-start p-4 bg-slate-50/70 rounded-2xl ${colors.hoverBg} transition-colors duration-300 border ${colors.borderColor}/30`}>
              <div className={`w-8 h-8 rounded-full ${colors.numberBg} ${colors.numberColor} flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0 shadow-sm border ${colors.borderColor}`}>
                {index + 1}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const DosAndDontsSection = ({ dos, donts }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-sky-100 shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-7">
            <div className="p-4 rounded-2xl bg-emerald-100 mr-4 shadow-sm">
              <CheckCircle className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Do's</h3>
          </div>
          
          <div className="space-y-4">
            {dos.map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-emerald-50/70 rounded-2xl hover:bg-emerald-100/70 transition-colors duration-300 border border-emerald-200/30">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0 shadow-sm border border-emerald-200">
                  {index + 1}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-7">
            <div className="p-4 rounded-2xl bg-red-100 mr-4 shadow-sm">
              <AlertTriangle className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Don'ts</h3>
          </div>
          
          <div className="space-y-4">
            {donts.map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-red-50/70 rounded-2xl hover:bg-red-100/70 transition-colors duration-300 border border-red-200/30">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0 shadow-sm border border-red-200">
                  {index + 1}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50/30 to-indigo-50">
      {error && (
        <div className="fixed top-6 right-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center animate-bounce border border-red-400">
          <AlertTriangle className="w-5 h-5 mr-3" />
          {error}
          <button onClick={() => setError(null)} className="ml-4 text-white font-bold text-lg hover:scale-110 transition-transform duration-200">
            ×
          </button>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
            Government Schemes Portal
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover and access comprehensive information about government schemes designed to empower citizens
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/20 mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            <TabButton id="browse" label="Browse Schemes" icon={Search} active={activeTab === 'browse'} onClick={setActiveTab} />
            <TabButton id="documents" label="Required Documents" icon={FileText} active={activeTab === 'documents'} onClick={setActiveTab} />
            <TabButton id="eligibility" label="Eligibility Criteria" icon={CheckCircle} active={activeTab === 'eligibility'} onClick={setActiveTab} />
            <TabButton id="submission" label="Submission Guidelines" icon={Upload} active={activeTab === 'submission'} onClick={setActiveTab} />
            <TabButton id="tips" label="Smart Tips" icon={Lightbulb} active={activeTab === 'tips'} onClick={setActiveTab} />
            <TabButton id="guide" label="Application Guide" icon={List} active={activeTab === 'guide'} onClick={setActiveTab} />
            <TabButton id="post-submission" label="Post-Submission Info" icon={Info} active={activeTab === 'post-submission'} onClick={setActiveTab} />
            <TabButton id="dos-donts" label="Do's & Don'ts" icon={AlertTriangle} active={activeTab === 'dos-donts'} onClick={setActiveTab} />
          </div>
        </div>

        <div className="content-container">
          {activeTab === 'browse' && (
            <div className="space-y-8">
              {/* Search and Filter */}
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/20">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search schemes by name or description..."
                      value={searchTerm}
                      onChange={(e) => {
                        try {
                          setSearchTerm(e.target.value);
                        } catch (err) {
                          setError('Error updating search term. Please try again.');
                        }
                      }}
                      className="w-full pl-14 pr-6 py-4 border border-sky-100 rounded-2xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-400 transition-all duration-300 shadow-sm"
                    />
                  </div>
                  <div className="relative min-w-[200px]">
                    <Filter className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => {
                        try {
                          setSelectedCategory(e.target.value);
                        } catch (err) {
                          setError('Error selecting category. Please try again.');
                        }
                      }}
                      className="w-full pl-14 pr-10 py-4 border border-sky-100 rounded-2xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-400 transition-all duration-300 appearance-none cursor-pointer shadow-sm"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Schemes Grid */}
              <div className="grid gap-8">
                {filteredSchemes.length > 0 ? (
                  filteredSchemes.map(scheme => <SchemeCard key={scheme.id} scheme={scheme} />)
                ) : (
                  <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl border border-sky-100 shadow-lg">
                    <Search className="w-20 h-20 mx-auto mb-6 text-slate-300" />
                    <h3 className="text-xl font-semibold text-slate-600 mb-2">No schemes found</h3>
                    <p className="text-slate-500">Try adjusting your search criteria or category filter.</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {activeTab === 'documents' && (
            <DetailSection title="Required Documents" icon={FileText} items={schemeDetails.requiredDocuments} color="green" />
          )}
          {activeTab === 'eligibility' && (
            <DetailSection title="Eligibility Criteria" icon={CheckCircle} items={schemeDetails.eligibilityCriteria} color="blue" />
          )}
          {activeTab === 'submission' && (
            <DetailSection title="Submission Guidelines" icon={Upload} items={schemeDetails.submissionFormat} color="purple" />
          )}
          {activeTab === 'tips' && (
            <DetailSection title="Smart Tips" icon={Lightbulb} items={schemeDetails.smartTips} color="yellow" />
          )}
          {activeTab === 'guide' && (
            <DetailSection title="Step-by-Step Application Guide" icon={List} items={schemeDetails.stepByStepGuide} color="indigo" />
          )}
          {activeTab === 'post-submission' && (
            <DetailSection title="Post-Submission Information" icon={Info} items={schemeDetails.postSubmissionInfo} color="teal" />
          )}
          {activeTab === 'dos-donts' && (
            <DosAndDontsSection dos={schemeDetails.dosAndDonts.dos} donts={schemeDetails.dosAndDonts.donts} />
          )}
        </div>
      </div>

      {/* Scheme Detail Modal */}
      {selectedScheme && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 z-50">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-sky-100">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">{selectedScheme.name}</h2>
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-4 py-2 rounded-full text-sm font-semibold border border-sky-200">
                      {selectedScheme.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-400 fill-current" />
                      <span className="text-lg font-semibold text-slate-700">{selectedScheme.rating}</span>
                    </div>
                  </div>
                </div>
                <button
                  className="text-slate-400 hover:text-slate-600 text-3xl font-bold transition-colors duration-200 p-2 hover:bg-slate-100 rounded-full"
                  onClick={() => {
                    try {
                      setSelectedScheme(null);
                    } catch (err) {
                      setError('Error closing modal. Please try again.');
                    }
                  }}
                >
                  ×
                </button>
              </div>
              
              <div className="mb-8 p-6 bg-sky-50/50 rounded-2xl border border-sky-100">
                <p className="text-slate-700 text-lg leading-relaxed">{selectedScheme.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/80 p-5 rounded-2xl border border-sky-100 shadow-sm">
                  <div className="flex items-center mb-3">
                    <DollarSign className="w-5 h-5 text-emerald-500 mr-2" />
                    <label className="text-sm font-semibold text-slate-500">Amount</label>
                  </div>
                  <p className="text-slate-800 font-semibold text-lg">{selectedScheme.amount}</p>
                </div>
                <div className="bg-white/80 p-5 rounded-2xl border border-sky-100 shadow-sm">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-amber-500 mr-2" />
                    <label className="text-sm font-semibold text-slate-500">Deadline</label>
                  </div>
                  <p className="text-slate-800 font-semibold text-lg">{selectedScheme.deadline}</p>
                </div>
                <div className="bg-white/80 p-5 rounded-2xl border border-sky-100 shadow-sm">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-blue-500 mr-2" />
                    <label className="text-sm font-semibold text-slate-500">Applicants</label>
                  </div>
                  <p className="text-slate-800 font-semibold text-lg">{selectedScheme.applicants}</p>
                </div>
                <div className="bg-white/80 p-5 rounded-2xl border border-sky-100 shadow-sm">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-rose-500 mr-2" />
                    <label className="text-sm font-semibold text-slate-500">Coverage</label>
                  </div>
                  <p className="text-slate-800 font-semibold text-lg">{selectedScheme.location}</p>
                </div>
              </div>
              
              <div className="mb-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                  <label className="text-sm font-semibold text-slate-500">Eligibility Requirements</label>
                </div>
                <p className="text-slate-700 leading-relaxed">{selectedScheme.eligibility}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group">
                  <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Apply Now
                </button>
                <button className="flex-1 bg-white/80 border border-sky-200 text-slate-700 py-4 px-6 rounded-2xl font-semibold flex items-center justify-center hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform duration-300" />
                  Download Guidelines
                </button>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl border border-sky-100">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-1.5 text-sky-500" />
                      <span>Helpline: 1800-XXX-XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-1.5 text-sky-500" />
                      <span>support@gov.in</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-slate-500">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;