import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import CompanyPage from './pages/CompanyPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/companies" element={<CompanyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
