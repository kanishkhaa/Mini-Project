import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Application from './pages/application';
import ProfileForm from './pages/profileform';
import Landing from './pages/landing';
import Profile from './pages/profile';
import Sidebar from './components/sidebar';
import Chatbot from './components/Chatbot'; // Import the chatbot component

function App() {
  const location = useLocation();

  // Define pages where chatbot should be shown (all pages except landing, login, signup)
  const excludedFromChatbot = ['/', '/login', '/signup'];
  const shouldShowChatbot = !excludedFromChatbot.includes(location.pathname);

  // Define pages where sidebar should be shown
  const excludedFromSidebar = ['/', '/login', '/signup'];
  const shouldShowSidebar = !excludedFromSidebar.includes(location.pathname);

  return (
    <div className="flex h-screen">
      {/* Sidebar - shown on all pages except landing, login, and signup */}
      {shouldShowSidebar && (
        <div className="w-72 flex-shrink-0">
          <Sidebar isOpen={true} onClose={() => {}} />
        </div>
      )}
      
      {/* Main content area */}
      <div className={`flex-1 overflow-auto ${shouldShowSidebar ? 'ml-0' : ''}`}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/application' element={<Application />} />
          <Route path='/profileform' element={<ProfileForm />} />
          <Route path='/profile' element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>

      {/* Chatbot - shown on all pages except landing, login, signup */}
      {shouldShowChatbot && <Chatbot />}
    </div>
  );
}

export default App;