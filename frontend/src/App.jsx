// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Application from './pages/application';
import ProfileForm from './pages/profileform';
import Landing from './pages/landing';
import Profile from './pages/profile'; // Assuming you have a Profile page
import Scheme from './pages/scheme';
import Sidebar from './components/sidebar'; // Adjust path as needed
import AccessibilityDialog from './pages/accessibility';

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="flex h-screen">
      {/* Sidebar - shown on all pages except landing */}
      {!isLandingPage && (
        <div className="w-72 flex-shrink-0">
          <Sidebar isOpen={true} onClose={() => {}} />
        </div>
      )}
      
      {/* Main content area */}
      <div className={`flex-1 overflow-auto ${!isLandingPage ? 'ml-0' : ''}`}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/application' element={<Application />} />
          <Route path='/profileform' element={<ProfileForm />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/scheme' element={<Scheme />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>

      {/* Accessibility Dialog - shown on all pages except landing */}
      {!isLandingPage && <AccessibilityDialog />}
    </div>
  );
}

export default App;