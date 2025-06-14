// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Application from './pages/application';
import ProfileForm from './pages/profileform';
import Landing from './pages/landing';
import Sidebar from './components/sidebar'; // Adjust path as needed

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
        </Routes>
      </div>
    </div>
  );
}

export default App;