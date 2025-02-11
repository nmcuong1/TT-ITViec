import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobList from '../components/JobList';
import '../assets/styles/JobPage.css';

function JobPage() {
  return (
    <div className="job-page">
    
      <main>
        <JobList />
      </main>
    
    </div>
  );
}

export default JobPage;
