// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard'; // Capital D if your file is Dashboard.jsx
import Application from './pages/application';
import ProfileForm from './pages/profileform';
import Landing from './pages/landing';
function App() {
  return (
    <Routes>
      <Route path ='/' element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path ='/application' element={<Application/>}/>
      <Route path = '/profileform'element={<ProfileForm />}/>
      
    </Routes>
  );
}

export default App;