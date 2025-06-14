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
      description: 'Providing farmers with nutrient management',
      eligibility: 'Small and marginal farmers with cultivable land',
      amount: '₹6,000 per year',
      deadline: '2025-12-31',
      applicants: '12M+',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Startup India Initiative',
      category: 'Business',
      description: 'Support for startups and entrepreneurs',
      eligibility: 'Innovative startups with DPIIT recognition',
      amount: 'Up to ₹10 Lakhs',
      deadline: '2025-10-15',
      applicants: '500K+',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Beti Bachao Beti Padhao',
      category: 'Education',
      description: 'Promotes girls’ education and empowerment',
      eligibility: 'Girl child and women empowerment initiatives',
      amount: 'Varies by component',
      deadline: '2025-11-30',
      applicants: '2M+',
      status: 'Active',
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
      'Valid bank account in applicant’s name',
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
        'Don’t submit incomplete or illegible forms',
        'Don’t provide false or mismatched information',
        'Don’t miss the submission deadline',
        'Don’t apply without meeting eligibility criteria',
        'Don’t lose the acknowledgment receipt',
        'Don’t use invalid or expired documents',
        'Don’t ignore status updates or verification requests',
        'Don’t share sensitive information on unofficial platforms',
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
      className={`tab-button ${active ? 'active' : ''}`}
    >
      <Icon className="icon" />
      {label}
    </button>
  );

  const SchemeCard = ({ scheme }) => (
    <div
      className="scheme-card"
      onClick={() => {
        try {
          setSelectedScheme(scheme);
        } catch (err) {
          setError('Error selecting scheme. Please try again.');
        }
      }}
    >
      <div className="card-header">
        <div className="card-title-container">
          <div className="title-category">
            <h3 className="card-title">{scheme.name}</h3>
            <span className="category-tag">{scheme.category}</span>
          </div>
        </div>
      </div>
      <p className="description">{scheme.description}</p>
      <div className="info-grid">
        <div className="info-item">
          <DollarSign className="info-icon green" />
          {scheme.amount}
        </div>
        <div className="info-item">
          <Users className="info-icon blue" />
          {scheme.applicants}
        </div>
        <div className="info-item">
          <Clock className="info-icon red" />
          {scheme.deadline}
        </div>
        <div className="info-item">
          <CheckCircle className="info-icon green" />
          {scheme.status}
        </div>
      </div>
      <button className="details-button">
        View Details
        <ChevronRight className="chevron" />
      </button>
    </div>
  );

  const DetailSection = ({ title, icon: Icon, items, color }) => (
    <div className="detail-section">
      <div className="section-header">
        <div className={`icon-container ${color}`}>
          <Icon className="section-icon" />
        </div>
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="items-container">
        {items.map((item, index) => (
          <div key={index} className="item">
            <div className={`item-number ${color}`}>{index + 1}</div>
            <p className="item-text">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const DosAndDontsSection = ({ dos, donts }) => (
    <div className="dos-donts-section">
      <div className="dos-donts-container">
        <div className="dos">
          <div className="section-header">
            <div className="icon-container green">
              <CheckCircle className="section-icon green" />
            </div>
            <h3 className="section-title">Do's</h3>
          </div>
          <div className="items-container">
            {dos.map((item, index) => (
              <div key={index} className="item">
                <div className="item-number green">{index + 1}</div>
                <p className="item-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="donts">
          <div className="section-header">
            <div className="icon-container red">
              <AlertTriangle className="section-icon red" />
            </div>
            <h3 className="section-title">Dont's</h3>
          </div>
          <div className="items-container">
            {donts.map((item, index) => (
              <div key={index} className="item">
                <div className="item-number red">{index + 1}</div>
                <p className="item-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #e6f0ff 0%, #f0f7ff 100%);
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          padding: 0;
          margin: 0;
          color: #1a202c;
          position: relative;
          overflow-x: hidden;
        }

        .error-notification {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          background: #ef4444;
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          display: flex;
          align-items: center;
          animation: slide-in 0.4s ease-out;
        }

        .error-notification button {
          margin-left: 1rem;
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .error-notification button:hover {
          transform: scale(1.2);
        }

        header {
          background: linear-gradient(90deg, #1e3a8a, #3b82f6);
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .header-content {
          max-width: 85rem;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
        }

        .header-text {
          font-size: 1rem;
          color: #dbeafe;
          font-weight: 400;
        }

        .main-content {
          max-width: 85rem;
          margin: 0 auto;
          padding: 2rem;
        }

        .tab-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 0.75rem;
          padding: 1.25rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          margin-bottom: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .tab-button {
          display: flex;
          align-items: center;
          padding: 0.875rem 1.75rem;
          border-radius: 0.5rem;
          font-family: 'Poppins', sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          color: #374151;
          background: #f3f4f6;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-button:hover {
          background: #dbeafe;
          color: #1e3a8a;
          box-shadow: 0 0 12px rgba(30, 58, 138, 0.2);
          transform: translateY(-2px);
        }

        .tab-button.active {
          background: linear-gradient(90deg, #1e3a8a, #3b82f6);
          color: white;
          box-shadow: 0 0 12px rgba(30, 58, 138, 0.4);
        }

        .icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.625rem;
        }

        .search-container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 0.75rem;
          padding: 1.75rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          margin-bottom: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .search-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .search-grid {
            flex-direction: row;
            gap: 1.5rem;
          }
        }

        .input-container {
          position: relative;
          flex: 1;
        }

        .search-icon,
        .filter-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1.25rem;
          height: 1.25rem;
          color: #9ca3af;
        }

        input,
        select {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 2.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          background: white;
          font-size: 0.9375rem;
          color: #1a202c;
          transition: all 0.3s ease;
        }

        input:focus,
        select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }

        select {
          appearance: none;
        }

        .schemes-grid {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .scheme-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.75rem;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .scheme-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(30, 58, 138, 0.2);
          border-color: #3b82f6;
        }

        .scheme-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: #3b82f6;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .scheme-card:hover::before {
          opacity: 1;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .card-title-container {
          flex: 1;
        }

        .title-category {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
        }

        .category-tag {
          display: inline-block;
          background: #dbeafe;
          color: #1e3a8a;
          padding: 0.375rem 0.875rem;
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 500;
        }

        .description {
          color: #4b5563;
          font-size: 0.9375rem;
          margin-bottom: 1rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: #4b5563;
        }

        .info-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
        }

        .info-icon.green {
          color: #10b981;
        }

        .info-icon.blue {
          color: #3b82f6;
        }

        .info-icon.red {
          color: #ef4444;
        }

        .details-button {
          width: 100%;
          background: linear-gradient(90deg, #1e3a8a, #3b82f6);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .details-button:hover {
          background: linear-gradient(90deg, #3b82f6, #1e3a8a);
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
        }

        .chevron {
          width: 1rem;
          height: 1rem;
          margin-left: 0.5rem;
        }

        .detail-section {
          background: white;
          border-radius: 0.75rem;
          padding: 1.75rem;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .detail-section:hover {
          box-shadow: 0 8px 24px rgba(30, 58, 138, 0.2);
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .icon-container {
          padding: 0.75rem;
          border-radius: 9999px;
          margin-right: 0.75rem;
        }

        .icon-container.green {
          background: rgba(16, 185, 129, 0.1);
        }

        .icon-container.blue {
          background: rgba(59, 130, 246, 0.1);
        }

        .icon-container.purple {
          background: rgba(139, 92, 246, 0.1);
        }

        .icon-container.yellow {
          background: rgba(245, 158, 11, 0.1);
        }

        .icon-container.indigo {
          background: rgba(99, 102, 241, 0.1);
        }

        .icon-container.teal {
          background: rgba(20, 184, 166, 0.1);
        }

        .icon-container.red {
          background: rgba(239, 68, 68, 0.1);
        }

        .section-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .section-icon.green {
          color: #10b981;
        }

        .section-icon.blue {
          color: #3b82f6;
        }

        .section-icon.purple {
          color: #8b5cf6;
        }

        .section-icon.yellow {
          color: #f59e0b;
        }

        .section-icon.indigo {
          color: #6366f1;
        }

        .section-icon.teal {
          color: #14b8a6;
        }

        .section-icon.red {
          color: #ef4444;
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
        }

        .items-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .item {
          display: flex;
          align-items: flex-start;
          padding: 0.75rem;
          background: #f9fafb;
          border-radius: 0.5rem;
          transition: background 0.2s ease;
        }

        .item:hover {
          background: #dbeafe;
        }

        .item-number {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8125rem;
          font-weight: 600;
          margin-right: 0.75rem;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }

        .item-number.green {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .item-number.blue {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .item-number.purple {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }

        .item-number.yellow {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }

        .item-number.indigo {
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
        }

        .item-number.teal {
          background: rgba(20, 184, 166, 0.1);
          color: #14b8a6;
        }

        .item-number.red {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .item-text {
          font-size: 0.9375rem;
          color: #4b5563;
          line-height: 1.5;
        }

        .dos-donts-section {
          background: white;
          border-radius: 0.75rem;
          padding: 1.75rem;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .dos-donts-section:hover {
          box-shadow: 0 8px 24px rgba(30, 58, 138, 0.2);
        }

        .dos-donts-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .dos-donts-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        .dos, .donts {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          z-index: 50;
        }

        .modal {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          max-width: 40rem;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          border: 1px solid #e5e7eb;
          animation: fade-in 0.4s ease-out;
        }

        .modal-content {
          padding: 1.75rem;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .modal-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
        }

        .close-button {
          color: #9ca3af;
          font-size: 1.25rem;
          font-weight: 600;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .close-button:hover {
          color: #4b5563;
        }

        .modal-description {
          color: #4b5563;
          font-size: 0.9375rem;
          margin-bottom: 1rem;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .modal-item label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #4b5563;
          margin-bottom: 0.25rem;
        }

        .modal-item p {
          font-size: 0.9375rem;
          color: #4b5563;
        }

        .modal-buttons {
          display: flex;
          gap: 1rem;
          padding-top: 1rem;
        }

        .apply-button {
          flex: 1;
          background: linear-gradient(90deg, #1e3a8a, #3b82f6);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .apply-button:hover {
          background: linear-gradient(90deg, #3b82f6, #1e3a8a);
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
        }

        .download-button {
          flex: 1;
          background: #f3f4f6;
          color: #4b5563;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .download-button:hover {
          background: #dbeafe;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.2);
        }

        .download-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
        }

        .no-results {
          color: #4b5563;
          text-align: center;
          font-size: 1rem;
          padding: 2rem;
        }

        @keyframes slide-in {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      {error && (
        <div className="error-notification">
          {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}
      <header>
        <div className="header-content">
          <h1 className="header-title">Government Schemes Portal</h1>
          <div className="header-text">Discover and apply for suitable schemes</div>
        </div>
      </header>
      <div className="main-content">
        <div className="tab-container">
          <TabButton id="browse" label="Browse Schemes" icon={Search} active={activeTab === 'browse'} onClick={setActiveTab} />
          <TabButton id="documents" label="Required Documents" icon={FileText} active={activeTab === 'documents'} onClick={setActiveTab} />
          <TabButton id="eligibility" label="Eligibility Criteria" icon={CheckCircle} active={activeTab === 'eligibility'} onClick={setActiveTab} />
          <TabButton id="submission" label="Submission Guidelines" icon={Upload} active={activeTab === 'submission'} onClick={setActiveTab} />
          <TabButton id="tips" label="Smart Tips" icon={Lightbulb} active={activeTab === 'tips'} onClick={setActiveTab} />
          <TabButton id="guide" label="Application Guide" icon={List} active={activeTab === 'guide'} onClick={setActiveTab} />
          <TabButton id="post-submission" label="Post-Submission Info" icon={Info} active={activeTab === 'post-submission'} onClick={setActiveTab} />
          <TabButton id="dos-donts" label="Do's & Don'ts" icon={AlertTriangle} active={activeTab === 'dos-donts'} onClick={setActiveTab} />
        </div>
        <div className="content-container">
          {activeTab === 'browse' && (
            <>
              <div className="search-container">
                <div className="search-grid">
                  <div className="input-container">
                    <Search className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search schemes..."
                      value={searchTerm}
                      onChange={(e) => {
                        try {
                          setSearchTerm(e.target.value);
                        } catch (err) {
                          setError('Error updating search term. Please try again.');
                        }
                      }}
                    />
                  </div>
                  <div className="input-container">
                    <Filter className="filter-icon" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => {
                        try {
                          setSelectedCategory(e.target.value);
                        } catch (err) {
                          setError('Error selecting category. Please try again.');
                        }
                      }}
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
              <div className="schemes-grid">
                {filteredSchemes.length > 0 ? (
                  filteredSchemes.map(scheme => <SchemeCard key={scheme.id} scheme={scheme} />)
                ) : (
                  <p className="no-results">No schemes found.</p>
                )}
              </div>
            </>
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
      {selectedScheme && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{selectedScheme.name}</h2>
                <button
                  className="close-button"
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
              <div className="modal-body">
                <p className="modal-description">{selectedScheme.description}</p>
                <div className="modal-grid">
                  <div className="modal-item">
                    <label>Category</label>
                    <p>{selectedScheme.category}</p>
                  </div>
                  <div className="modal-item">
                    <label>Amount</label>
                    <p>{selectedScheme.amount}</p>
                  </div>
                  <div className="modal-item">
                    <label>Deadline</label>
                    <p>{selectedScheme.deadline}</p>
                  </div>
                  <div className="modal-item">
                    <label>Applicants</label>
                    <p>{selectedScheme.applicants}</p>
                  </div>
                </div>
                <div className="modal-item">
                  <label>Eligibility</label>
                  <p>{selectedScheme.eligibility}</p>
                </div>
                <div className="modal-buttons">
                  <button className="apply-button">Apply Now</button>
                  <button className="download-button">
                    <Download className="download-icon" />
                    Download Guidelines
                  </button>
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