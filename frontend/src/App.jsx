import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Application from './pages/application';
import ProfileForm from './pages/profileform';
import Landing from './pages/landing';
import Profile from './pages/profile';
import Sidebar from './components/sidebar';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/signup';
import Scheme from './pages/scheme';

function App() {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      {/* Sidebar - shown on all pages except landing, login, and signup */}
      {!(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') && (
        <div className="w-72 flex-shrink-0">
          <Sidebar isOpen={true} onClose={() => {}} />
        </div>
      )}
      
      {/* Main content area */}
      <div className={`flex-1 overflow-auto ${!(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') ? 'ml-0' : ''}`}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/application' element={<Application />} />
          <Route path='/profileform' element={<ProfileForm />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/scheme' element={<Scheme />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;