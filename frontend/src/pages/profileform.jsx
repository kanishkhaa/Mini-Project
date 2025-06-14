import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const profileform = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    spouseName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    maritalStatus: '',
    phoneNumber: '',
    pincode: '',
    state: '',
    district: '',
    urbanRural: '',
    educationLevel: '',
    occupation: '',
    workSector: '',
    annualIncome: '',
    rationCardType: '',
    disability: '',
    aadhaarLinked: '',
    govtPreference: '',
    preferredSector: '',
    benefitType: '',
    eligibilityAwareness: ''
  });

  // Pincode data
  const pincodeData = {
    '110001': { state: 'Delhi', district: 'Central Delhi', type: 'Urban' },
    '110002': { state: 'Delhi', district: 'Central Delhi', type: 'Urban' },
    '110003': { state: 'Delhi', district: 'Central Delhi', type: 'Urban' },
    '400001': { state: 'Maharashtra', district: 'Mumbai City', type: 'Urban' },
    '400002': { state: 'Maharashtra', district: 'Mumbai City', type: 'Urban' },
    '400003': { state: 'Maharashtra', district: 'Mumbai City', type: 'Urban' },
    '700001': { state: 'West Bengal', district: 'Kolkata', type: 'Urban' },
    '700002': { state: 'West Bengal', district: 'Kolkata', type: 'Urban' },
    '600001': { state: 'Tamil Nadu', district: 'Chennai', type: 'Urban' },
    '600002': { state: 'Tamil Nadu', district: 'Chennai', type: 'Urban' },
    '560001': { state: 'Karnataka', district: 'Bengaluru Urban', type: 'Urban' },
    '560002': { state: 'Karnataka', district: 'Bengaluru Urban', type: 'Urban' },
    '500001': { state: 'Telangana', district: 'Hyderabad', type: 'Urban' },
    '500002': { state: 'Telangana', district: 'Hyderabad', type: 'Urban' },
    '380001': { state: 'Gujarat', district: 'Ahmedabad', type: 'Urban' },
    '380002': { state: 'Gujarat', district: 'Ahmedabad', type: 'Urban' },
    '302001': { state: 'Rajasthan', district: 'Jaipur', type: 'Urban' },
    '302002': { state: 'Rajasthan', district: 'Jaipur', type: 'Urban' },
    '226001': { state: 'Uttar Pradesh', district: 'Lucknow', type: 'Urban' },
    '226002': { state: 'Uttar Pradesh', district: 'Lucknow', type: 'Urban' },
    '800001': { state: 'Bihar', district: 'Patna', type: 'Urban' },
    '800002': { state: 'Bihar', district: 'Patna', type: 'Urban' },
    '160001': { state: 'Chandigarh', district: 'Chandigarh', type: 'Urban' },
    '751001': { state: 'Odisha', district: 'Khordha', type: 'Urban' },
    '682001': { state: 'Kerala', district: 'Ernakulam', type: 'Urban' },
    '444001': { state: 'Maharashtra', district: 'Akola', type: 'Urban' },
    '490001': { state: 'Chhattisgarh', district: 'Raipur', type: 'Urban' },
    '534001': { state: 'Andhra Pradesh', district: 'West Godavari', type: 'Urban' },
    '788001': { state: 'Assam', district: 'Cachar', type: 'Urban' },
    '797001': { state: 'Nagaland', district: 'Kohima', type: 'Urban' },
    '796001': { state: 'Mizoram', district: 'Aizawl', type: 'Urban' },
    '795001': { state: 'Manipur', district: 'Imphal West', type: 'Urban' },
    '793001': { state: 'Meghalaya', district: 'East Khasi Hills', type: 'Urban' },
    '792001': { state: 'Arunachal Pradesh', district: 'Papum Pare', type: 'Urban' },
    '737001': { state: 'Sikkim', district: 'East Sikkim', type: 'Urban' },
    '799001': { state: 'Tripura', district: 'West Tripura', type: 'Urban' },
    '110020': { state: 'Delhi', district: 'North West Delhi', type: 'Rural' },
    '400070': { state: 'Maharashtra', district: 'Mumbai Suburban', type: 'Rural' },
    '700150': { state: 'West Bengal', district: 'South 24 Parganas', type: 'Rural' },
    '600070': { state: 'Tamil Nadu', district: 'Kanchipuram', type: 'Rural' },
    '560070': { state: 'Karnataka', district: 'Bengaluru Rural', type: 'Rural' },
    '500070': { state: 'Telangana', district: 'Rangareddy', type: 'Rural' },
  };

  // Calculate age based on date of birth
  useEffect(() => {
    if (formData.dateOfBirth) {
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      setFormData(prev => ({ ...prev, age: age.toString() }));
    } else {
      setFormData(prev => ({ ...prev, age: '' }));
    }
  }, [formData.dateOfBirth]);

  const handleInputChange = (field, value) => {
    let isValid = true;
    let errorMessage = '';

    // Validation for name fields
    const nameFields = ['fullName', 'fatherName', 'motherName', 'spouseName', 'occupation'];
    if (nameFields.includes(field)) {
      if (value && !/^[a-zA-Z\s]*$/.test(value)) {
        isValid = false;
        errorMessage = 'Please enter alphabets only';
      }
    }

    // Validation for phone number
    if (field === 'phoneNumber') {
      if (value && !/^\d*$/.test(value)) {
        isValid = false;
        errorMessage = 'Please enter numbers only';
      } else if (value.length > 10) {
        value = value.slice(0, 10);
      } else if (value.length < 10 && value.length > 0) {
        isValid = false;
        errorMessage = 'Please enter 10 digits';
      }
    }

    // Validation for pincode
    if (field === 'pincode') {
      if (value && !/^\d*$/.test(value)) {
        isValid = false;
        errorMessage = 'Please enter numbers only';
      } else if (value.length > 6) {
        value = value.slice(0, 6);
      } else if (value.length < 6 && value.length > 0) {
        isValid = false;
        errorMessage = 'Pincode must be 6 digits';
      }
    }

    // Update errors
    if (!isValid) {
      setErrors(prev => ({ ...prev, [field]: errorMessage }));
    } else if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    // Update form data
    setFormData(prev => ({ ...prev, [field]: value }));

    // Auto-detect location based on pincode
    if (field === 'pincode' && value.length === 6) {
      const locationData = pincodeData[value];
      if (locationData) {
        setFormData(prev => ({
          ...prev,
          state: locationData.state,
          district: locationData.district,
          urbanRural: locationData.type
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          state: '',
          district: '',
          urbanRural: ''
        }));
      }
    }

    // Clear spouse name if marital status is not married
    if (field === 'maritalStatus' && value !== 'Married') {
      setFormData(prev => ({ ...prev, spouseName: '' }));
      setErrors(prev => ({ ...prev, spouseName: '' }));
    }
  };

  const validateCurrentStep = () => {
    const newErrors = {};
    
    switch (currentStep) {
      case 1:
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.fatherName.trim()) newErrors.fatherName = 'Father\'s Name is required';
        if (!formData.motherName.trim()) newErrors.motherName = 'Mother\'s Name is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital Status is required';
        if (!formData.phoneNumber || formData.phoneNumber.length !== 10) 
          newErrors.phoneNumber = 'Please enter 10 digits';
        if (!formData.pincode || formData.pincode.length !== 6) 
          newErrors.pincode = 'Pincode must be 6 digits';
        if (formData.maritalStatus === 'Married' && !formData.spouseName.trim())
          newErrors.spouseName = 'Spouse Name is required';
        break;
      
      case 2:
        if (!formData.educationLevel) newErrors.educationLevel = 'Education Level is required';
        if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required';
        if (!formData.workSector) newErrors.workSector = 'Work Sector is required';
        if (!formData.annualIncome) newErrors.annualIncome = 'Annual Income Range is required';
        if (!formData.aadhaarLinked) newErrors.aadhaarLinked = 'Aadhaar Linked status is required';
        break;
      
      case 3:
        if (!formData.govtPreference) newErrors.govtPreference = 'Government preference is required';
        if (!formData.preferredSector) newErrors.preferredSector = 'Preferred sector is required';
        if (!formData.benefitType) newErrors.benefitType = 'Benefit type is required';
        if (!formData.eligibilityAwareness) newErrors.eligibilityAwareness = 'Eligibility awareness is required';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setCurrentStep(5);
  };

  const renderStepIndicator = () => {
    const steps = [
      { id: 1, title: 'Basic Info' },
      { id: 2, title: 'Social & Economic' },
      { id: 3, title: 'Preferences' },
      { id: 4, title: 'Preview' },
      { id: 5, title: 'Complete' }
    ];

    return (
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep > step.id ? 'bg-green-600 text-white' : 
                currentStep === step.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step.id}
              </div>
              <span className={`text-xs mt-2 ${
                currentStep > step.id ? 'text-green-600 font-medium' : 
                currentStep === step.id ? 'text-blue-600 font-medium' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-3 bg-gray-200 rounded-full"></div>
          <div 
            className="absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ease-in-out shadow-lg"
            style={{ 
              width: `${((currentStep - 1) / 4) * 100}%`,
              background: currentStep > 1 ? 'linear-gradient(to right, #059669, #34d399)' : 'linear-gradient(to right, #2563eb, #60a5fa)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
          </div>
        </div>
        <style jsx>{`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shine {
            animation: shine 2s infinite;
          }
        `}</style>
      </div>
    );
  };

  const renderBasicInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Father's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fatherName}
            onChange={(e) => handleInputChange('fatherName', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter father's name"
          />
          {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mother's Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.motherName}
            onChange={(e) => handleInputChange('motherName', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter mother's name"
          />
          {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marital Status <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.maritalStatus}
            onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
          {errors.maritalStatus && <p className="text-red-500 text-sm mt-1">{errors.maritalStatus}</p>}
        </div>

        {formData.maritalStatus === 'Married' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Spouse Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.spouseName}
              onChange={(e) => handleInputChange('spouseName', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter spouse name"
            />
            {errors.spouseName && <p className="text-red-500 text-sm mt-1">{errors.spouseName}</p>}
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{ color: formData.dateOfBirth ? 'inherit' : '#9CA3AF' }}
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age
          </label>
          <input
            type="text"
            value={formData.age}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            placeholder="Auto-calculated"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
            <option value="Rather not say">Rather not say</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter 10-digit phone number"
            maxLength="10"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Location Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pincode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.pincode}
              onChange={(e) => handleInputChange('pincode', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter 6-digit pincode"
              maxLength="6"
            />
            {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <input
              type="text"
              value={formData.state}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
              placeholder="Auto-filled based on pincode"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              District
            </label>
            <input
              type="text"
              value={formData.district}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
              placeholder="Auto-filled based on pincode"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Urban/Rural
            </label>
            <input
              type="text"
              value={formData.urbanRural}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
              placeholder="Auto-filled based on pincode"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSocialEconomic = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Social & Economic Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Education Level <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.educationLevel}
            onChange={(e) => handleInputChange('educationLevel', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Education Level</option>
            <option value="Below 10th">Below 10th</option>
            <option value="10th Pass">10th Pass</option>
            <option value="12th Pass">12th Pass</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
            <option value="Doctorate">Doctorate</option>
          </select>
          {errors.educationLevel && <p className="text-red-500 text-sm mt-1">{errors.educationLevel}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Occupation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.occupation}
            onChange={(e) => handleInputChange('occupation', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your occupation"
          />
          {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work Sector <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.workSector}
            onChange={(e) => handleInputChange('workSector', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Work Sector</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
          </select>
          {errors.workSector && <p className="text-red-500 text-sm mt-1">{errors.workSector}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Income Range <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.annualIncome}
            onChange={(e) => handleInputChange('annualIncome', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Income Range</option>
            <option value="Below 1 Lakh">Below ₹1 Lakh</option>
            <option value="1-3 Lakhs">₹1-3 Lakhs</option>
            <option value="3-5 Lakhs">₹3-5 Lakhs</option>
            <option value="5-10 Lakhs">₹5-10 Lakhs</option>
            <option value="Above 10 Lakhs">Above ₹10 Lakhs</option>
          </select>
          {errors.annualIncome && <p className="text-red-500 text-sm mt-1">{errors.annualIncome}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ration Card Type
          </label>
          <select
            value={formData.rationCardType}
            onChange={(e) => handleInputChange('rationCardType', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Ration Card Type</option>
            <option value="APL">APL (Above Poverty Line)</option>
            <option value="BPL">BPL (Below Poverty Line)</option>
            <option value="AAY">AAY (Antyodaya Anna Yojana)</option>
            <option value="None">None</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Disability (if any)
          </label>
          <input
            type="text"
            value={formData.disability}
            onChange={(e) => handleInputChange('disability', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Specify disability if any"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Aadhaar Linked <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.aadhaarLinked}
            onChange={(e) => handleInputChange('aadhaarLinked', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Is your Aadhaar linked?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.aadhaarLinked && <p className="text-red-500 text-sm mt-1">{errors.aadhaarLinked}</p>}
        </div>
      </div>
    </div>
  );

  const renderSchemePreferences = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Scheme Preferences</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Government Preference <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.govtPreference}
            onChange={(e) => handleInputChange('govtPreference', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select preference</option>
            <option value="Central Government">Central Government</option>
            <option value="State Government">State Government</option>
            <option value="Both">Both</option>
          </select>
          {errors.govtPreference && <p className="text-red-500 text-sm mt-1">{errors.govtPreference}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Sector <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.preferredSector}
            onChange={(e) => handleInputChange('preferredSector', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select sector</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Employment">Employment</option>
            <option value="Housing">Housing</option>
            <option value="Financial Assistance">Financial Assistance</option>
          </select>
          {errors.preferredSector && <p className="text-red-500 text-sm mt-1">{errors.preferredSector}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Benefit Type <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.benefitType}
            onChange={(e) => handleInputChange('benefitType', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select benefit type</option>
            <option value="Subsidies">Subsidies</option>
            <option value="Grants">Grants</option>
            <option value="Loans">Loans</option>
            <option value="Training">Training</option>
            <option value="Other">Other</option>
          </select>
          {errors.benefitType && <p className="text-red-500 text-sm mt-1">{errors.benefitType}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Eligibility Awareness <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.eligibilityAwareness}
            onChange={(e) => handleInputChange('eligibilityAwareness', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select awareness level</option>
            <option value="Fully Aware">Fully Aware</option>
            <option value="Partially Aware">Partially Aware</option>
            <option value="Not Aware">Not Aware</option>
          </select>
          {errors.eligibilityAwareness && <p className="text-red-500 text-sm mt-1">{errors.eligibilityAwareness}</p>}
        </div>
      </div>
    </div>
  );

  const renderPreview = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Preview Your Information</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><strong>Full Name:</strong> {formData.fullName || 'N/A'}</p>
          <p><strong>Father's Name:</strong> {formData.fatherName || 'N/A'}</p>
          <p><strong>Mother's Name:</strong> {formData.motherName || 'N/A'}</p>
          {formData.maritalStatus === 'Married' && <p><strong>Spouse Name:</strong> {formData.spouseName || 'N/A'}</p>}
          <p><strong>Date of Birth:</strong> {formData.dateOfBirth || 'N/A'}</p>
          <p><strong>Age:</strong> {formData.age || 'N/A'}</p>
          <p><strong>Gender:</strong> {formData.gender || 'N/A'}</p>
          <p><strong>Marital Status:</strong> {formData.maritalStatus || 'N/A'}</p>
          <p><strong>Phone Number:</strong> {formData.phoneNumber || 'N/A'}</p>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Location Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><strong>Pincode:</strong> {formData.pincode || 'N/A'}</p>
          <p><strong>State:</strong> {formData.state || 'N/A'}</p>
          <p><strong>District:</strong> {formData.district || 'N/A'}</p>
          <p><strong>Urban/Rural:</strong> {formData.urbanRural || 'N/A'}</p>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Social & Economic Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><strong>Education Level:</strong> {formData.educationLevel || 'N/A'}</p>
          <p><strong>Occupation:</strong> {formData.occupation || 'N/A'}</p>
          <p><strong>Work Sector:</strong> {formData.workSector || 'N/A'}</p>
          <p><strong>Annual Income:</strong> {formData.annualIncome || 'N/A'}</p>
          <p><strong>Ration Card Type:</strong> {formData.rationCardType || 'N/A'}</p>
          <p><strong>Disability:</strong> {formData.disability || 'N/A'}</p>
          <p><strong>Aadhaar Linked:</strong> {formData.aadhaarLinked || 'N/A'}</p>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Scheme Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><strong>Government Preference:</strong> {formData.govtPreference || 'N/A'}</p>
          <p><strong>Preferred Sector:</strong> {formData.preferredSector || 'N/A'}</p>
          <p><strong>Benefit Type:</strong> {formData.benefitType || 'N/A'}</p>
          <p><strong>Eligibility Awareness:</strong> {formData.eligibilityAwareness || 'N/A'}</p>
        </div>
      </div>
    </div>
  );

  const renderComplete = () => (
    <div className="text-center space-y-6">
      <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
      <h2 className="text-2xl font-bold text-gray-800">Form Submitted Successfully!</h2>
      <p className="text-gray-600">Thank you for completing the profile form. Your information has been submitted successfully.</p>
      <button
        onClick={() => setCurrentStep(1)}
        className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Start Over
      </button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {renderStepIndicator()}
      
      {currentStep === 1 && renderBasicInfo()}
      {currentStep === 2 && renderSocialEconomic()}
      {currentStep === 3 && renderSchemePreferences()}
      {currentStep === 4 && renderPreview()}
      {currentStep === 5 && renderComplete()}

      {currentStep < 5 && (
        <div className="mt-8 flex justify-between">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Previous
            </button>
          )}
          
          {currentStep < 4 ? (
            <button
              onClick={nextStep}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Next
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          ) : currentStep === 4 ? (
            <button
              onClick={handleSubmit}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default profileform;