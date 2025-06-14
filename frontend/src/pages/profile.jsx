import React, { useState } from 'react';
import { 
  User, MapPin, GraduationCap, Briefcase, Heart, Settings, Edit2, Phone, Mail, Calendar, 
  Shield, Award, FileText, Users, Home, DollarSign, Building, UserCheck, Target, 
  BookOpen, Zap, Download, Eye, RefreshCw, ChevronRight, Star, CheckCircle2
} from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Sample user data - this would typically come from props or API
  const userData = {
    fullName: 'Rajesh Kumar Sharma',
    fatherName: 'Suresh Kumar Sharma',
    motherName: 'Sunita Sharma',
    spouseName: 'Priya Sharma',
    dateOfBirth: '1990-05-15',
    age: '33',
    gender: 'Male',
    maritalStatus: 'Married',
    phoneNumber: '9876543210',
    pincode: '110001',
    state: 'Delhi',
    district: 'Central Delhi',
    urbanRural: 'Urban',
    educationLevel: 'Graduate',
    occupation: 'Software Developer',
    workSector: 'Private',
    annualIncome: '5-10 Lakhs',
    rationCardType: 'APL',
    disability: '',
    aadhaarLinked: 'Yes',
    govtPreference: 'Both',
    preferredSector: 'Employment',
    benefitType: 'Training',
    eligibilityAwareness: 'Partially Aware'
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const ProfileCard = ({ icon: Icon, title, children, className = "" }) => (
    <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100/50 overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="bg-gradient-to-r from-blue-50/80 to-slate-50/80 px-6 py-4 border-b border-blue-100/50">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-lg">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );

  const InfoItem = ({ label, value, icon: Icon }) => (
    <div className="flex items-start space-x-3 py-3 border-b border-blue-50 last:border-b-0 group hover:bg-blue-25 rounded-lg px-2 -mx-2 transition-colors duration-200">
      {Icon && (
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-lg mt-0.5 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-200">
          <Icon className="h-4 w-4 text-blue-600" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
        <p className="text-base text-slate-800 font-medium">{value || 'Not provided'}</p>
      </div>
    </div>
  );

  const StatCard = ({ title, value, bgColor, textColor, icon: Icon }) => (
    <div className={`${bgColor} rounded-2xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
      <div className="text-center">
        <div className="flex justify-center mb-3">
          <div className="bg-white/30 p-3 rounded-xl">
            <Icon className={`h-6 w-6 ${textColor}`} />
          </div>
        </div>
        <p className={`text-2xl font-bold ${textColor} mb-2`}>{value}</p>
        <p className="text-sm text-slate-600 font-medium">{title}</p>
      </div>
    </div>
  );

  const getGenderIcon = (gender) => {
    return gender === 'Male' ? User : Users;
  };

  const getMaritalIcon = (status) => {
    return status === 'Married' ? Heart : User;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100/50 overflow-hidden mb-8">
          <div className="bg-blue-400 px-8 py-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-36 -translate-x-36"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <div className="bg-white/20 backdrop-blur-sm p-5 rounded-3xl border border-white/10 shadow-lg">
                  <User className="h-14 w-14 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold">{userData.fullName}</h1>
                    <CheckCircle2 className="h-6 w-6 text-emerald-300" />
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Briefcase className="h-4 w-4 text-blue-200" />
                    <p className="text-blue-100 text-lg">{userData.occupation}</p>
                  </div>
                  <div className="flex items-center space-x-6 text-blue-100">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{userData.district}, {userData.state}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Age {userData.age}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 border border-white/10 hover:border-white/20"
                >
                  <Edit2 className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Annual Income" 
            value={`₹${userData.annualIncome}`} 
            bgColor="bg-gradient-to-br from-blue-100 to-blue-200" 
            textColor="text-blue-700"
            icon={DollarSign}
          />
          <StatCard 
            title="Work Sector" 
            value={userData.workSector} 
            bgColor="bg-gradient-to-br from-emerald-100 to-emerald-200" 
            textColor="text-emerald-700"
            icon={Building}
          />
          <StatCard 
            title="Education" 
            value={userData.educationLevel} 
            bgColor="bg-gradient-to-br from-violet-100 to-violet-200" 
            textColor="text-violet-700"
            icon={GraduationCap}
          />
          <StatCard 
            title="Aadhaar Status" 
            value={userData.aadhaarLinked === 'Yes' ? 'Linked' : 'Not Linked'} 
            bgColor={userData.aadhaarLinked === 'Yes' ? "bg-gradient-to-br from-green-100 to-green-200" : "bg-gradient-to-br from-red-100 to-red-200"} 
            textColor={userData.aadhaarLinked === 'Yes' ? "text-green-700" : "text-red-700"}
            icon={Shield}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <ProfileCard icon={User} title="Personal Information">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem label="Full Name" value={userData.fullName} icon={User} />
                <InfoItem label="Father's Name" value={userData.fatherName} icon={Users} />
                <InfoItem label="Mother's Name" value={userData.motherName} icon={Users} />
                {userData.maritalStatus === 'Married' && (
                  <InfoItem label="Spouse Name" value={userData.spouseName} icon={Heart} />
                )}
                <InfoItem label="Date of Birth" value={formatDate(userData.dateOfBirth)} icon={Calendar} />
                <InfoItem label="Age" value={`${userData.age} years`} icon={UserCheck} />
                <InfoItem label="Gender" value={userData.gender} icon={getGenderIcon(userData.gender)} />
                <InfoItem label="Marital Status" value={userData.maritalStatus} icon={getMaritalIcon(userData.maritalStatus)} />
              </div>
            </ProfileCard>

            {/* Contact & Location */}
            <ProfileCard icon={MapPin} title="Contact & Location">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem label="Phone Number" value={userData.phoneNumber} icon={Phone} />
                <InfoItem label="Email" value="rajesh.sharma@email.com" icon={Mail} />
                <InfoItem label="Pincode" value={userData.pincode} icon={MapPin} />
                <InfoItem label="State" value={userData.state} icon={Home} />
                <InfoItem label="District" value={userData.district} icon={MapPin} />
                <InfoItem label="Area Type" value={userData.urbanRural} icon={Building} />
              </div>
            </ProfileCard>

            {/* Professional Information */}
            <ProfileCard icon={Briefcase} title="Professional Details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem label="Education Level" value={userData.educationLevel} icon={GraduationCap} />
                <InfoItem label="Occupation" value={userData.occupation} icon={Briefcase} />
                <InfoItem label="Work Sector" value={userData.workSector} icon={Building} />
                <InfoItem label="Annual Income" value={`₹${userData.annualIncome}`} icon={DollarSign} />
              </div>
            </ProfileCard>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Social & Economic Details */}
            <ProfileCard icon={Shield} title="Social & Economic">
              <div className="space-y-4">
                <InfoItem label="Ration Card Type" value={userData.rationCardType} icon={FileText} />
                <InfoItem label="Disability" value={userData.disability || 'None'} icon={UserCheck} />
                <InfoItem label="Aadhaar Linked" value={userData.aadhaarLinked} icon={Shield} />
              </div>
            </ProfileCard>

            {/* Scheme Preferences */}
            <ProfileCard icon={Award} title="Scheme Preferences">
              <div className="space-y-4">
                <InfoItem label="Government Preference" value={userData.govtPreference} icon={Star} />
                <InfoItem label="Preferred Sector" value={userData.preferredSector} icon={Target} />
                <InfoItem label="Benefit Type" value={userData.benefitType} icon={BookOpen} />
                <InfoItem label="Eligibility Awareness" value={userData.eligibilityAwareness} icon={Zap} />
              </div>
            </ProfileCard>

            {/* Action Panel */}
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl border border-blue-400/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-4 rounded-xl transition-all duration-300 text-left flex items-center justify-between group border border-white/10 hover:border-white/20">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-4 w-4" />
                    <span>View Eligible Schemes</span>
                  </div>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-4 rounded-xl transition-all duration-300 text-left flex items-center justify-between group border border-white/10 hover:border-white/20">
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="h-4 w-4" />
                    <span>Update Information</span>
                  </div>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-4 rounded-xl transition-all duration-300 text-left flex items-center justify-between group border border-white/10 hover:border-white/20">
                  <div className="flex items-center space-x-3">
                    <Download className="h-4 w-4" />
                    <span>Download Profile</span>
                  </div>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Profile Completion */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-emerald-800 flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Profile Completion
                </h3>
                <span className="text-2xl font-bold text-emerald-700">85%</span>
              </div>
              <div className="w-full bg-emerald-200 rounded-full h-3 mb-3">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full" style={{width: '85%'}}></div>
              </div>
              <p className="text-sm text-emerald-700">
                Add email and more details to complete your profile
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50">
            <p className="text-slate-500 text-sm flex items-center justify-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Profile last updated on {formatDate(new Date().toISOString())}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;