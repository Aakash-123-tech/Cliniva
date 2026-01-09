import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Appointments from './pages/Appointments';
import AppointmentView from './pages/AppointmentView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Header />
        <div style={{ marginTop: '60px' }}>
          <Routes>
            <Route path="/" element={<Appointments />} />
            <Route path="/appointment/:id" element={<AppointmentView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;