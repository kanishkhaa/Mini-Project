import React, { useState } from 'react';
import { 
  Menu, 
  MapPin, 
  Bell, 
  User, 
  X,
  Home,
  FileText,
  TrendingUp,
  Gift,
  XCircle,
  Clock,
  Eye,
  ArrowRight,
  Calendar
} from 'lucide-react';

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [username] = useState('John Doe');

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const statsCards = [
    {
      title: 'Total Schemes Discovered',
      value: '24',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
      iconBg: 'bg-sky-100'
    },
    {
      title: 'Schemes Applied',
      value: '8',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
      iconBg: 'bg-sky-100'
    },
    {
      title: 'Ongoing Schemes',
      value: '5',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
      iconBg: 'bg-sky-100'
    },
    {
      title: 'Benefits Available',
      value: '₹1,25,000',
      icon: <Gift className="w-8 h-8" />,
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
      iconBg: 'bg-sky-100'
    },
    {
      title: 'Rejected/Expired Application',
      value: '2',
      icon: <XCircle className="w-8 h-8" />,
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
      iconBg: 'bg-sky-100'
    },
    {
      title: 'Incomplete Application',
      value: '1',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
      iconBg: 'bg-sky-100'
    }
  ];

  const recentSchemes = [
    {
      id: 1,
      name: 'PM Kisan Samman Nidhi',
      category: 'Agriculture',
      status: 'Applied',
      date: '2024-06-10',
      amount: '₹6,000'
    },
    {
      id: 2,
      name: 'Pradhan Mantri Awas Yojana',
      category: 'Housing',
      status: 'Under Review',
      date: '2024-06-08',
      amount: '₹2,50,000'
    },
    {
      id: 3,
      name: 'Ayushman Bharat',
      category: 'Healthcare',
      status: 'Eligible',
      date: '2024-06-05',
      amount: '₹5,00,000'
    },
    {
      id: 4,
      name: 'Skill India Mission',
      category: 'Education',
      status: 'Ongoing',
      date: '2024-06-03',
      amount: '₹10,000'
    }
  ];

  const navigationItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <FileText className="w-5 h-5" />, label: 'All Schemes' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'My Applications' },
    { icon: <Gift className="w-5 h-5" />, label: 'Benefits' },
    { icon: <User className="w-5 h-5" />, label: 'Profile' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied': return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'Under Review': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Eligible': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Ongoing': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50 text-gray-900">
      {/* Header */}
      <header className="relative">
        <div className="flex items-center justify-between px-6 py-6">
          {/* Left side */}
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleNav}
              className="p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl group"
            >
              <Menu className="w-6 h-6 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="animate-fade-in-up">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                Hello {username}!
              </h1>
              <p className="text-sm mt-1 text-gray-600">
                Welcome to your Dashboard
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            <button className="p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl group">
              <MapPin className="w-5 h-5 transition-all duration-300 group-hover:text-sky-500" />
            </button>
            <button className="p-3 rounded-xl transition-all duration-300 hover:scale-105 relative hover:bg-white bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl group">
              <Bell className="w-5 h-5 transition-all duration-300 group-hover:animate-pulse" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full animate-pulse"></span>
            </button>
            <button className="p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl group">
              <User className="w-5 h-5 transition-all duration-300 group-hover:text-sky-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Sidebar */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${isNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleNav}></div>
        <nav className={`absolute left-0 top-0 h-full w-72 transform transition-all duration-500 ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} bg-white/95 backdrop-blur-xl border-gray-200 shadow-2xl border-r`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Menu</h2>
            <button onClick={toggleNav} className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-gray-100">
              <X className="w-5 h-5 transition-transform duration-300 hover:rotate-90" />
            </button>
          </div>
          <div className="p-6 space-y-3">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 hover:scale-105 group ${
                  item.active 
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg' 
                    : 'hover:bg-gray-100 text-gray-700 hover:text-sky-600'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="px-6 pb-8 max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group bg-white/80 border-gray-200 backdrop-blur-xl border shadow-lg hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-lg font-bold mb-3 text-gray-600">
                    {card.title}
                  </p>
                  <p className="text-3xl font-bold transition-all duration-300 group-hover:scale-110">
                    {card.value}
                  </p>
                </div>
                <div className={`p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${card.iconBg}`}>
                  <div className={`transition-all duration-300 ${card.textColor}`}>
                    {card.icon}
                  </div>
                </div>
              </div>
              <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${card.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Recently Viewed Schemes */}
        <div className="rounded-2xl transition-all duration-500 hover:shadow-2xl bg-white/80 border-gray-200 backdrop-blur-xl border shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Recently Viewed Schemes
                </h2>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 group">
                <span className="text-sm font-medium">View All</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {recentSchemes.map((scheme, index) => (
                <div
                  key={scheme.id}
                  className="p-5 rounded-xl border transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer group border-gray-200 hover:bg-gray-50/80 hover:border-sky-300 shadow-sm hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="font-semibold text-lg transition-all duration-300 group-hover:text-sky-600">
                          {scheme.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${getStatusColor(scheme.status)}`}>
                          {scheme.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span className="flex items-center space-x-2 group-hover:text-sky-600 transition-colors duration-300">
                          <FileText className="w-4 h-4" />
                          <span>{scheme.category}</span>
                        </span>
                        <span className="flex items-center space-x-2 group-hover:text-sky-600 transition-colors duration-300">
                          <Calendar className="w-4 h-4" />
                          <span>{scheme.date}</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
                        {scheme.amount}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;