import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompanyList from '../components/CompanyList';
import '../assets/styles/CompanyPage.css';

function CompanyPage() {
  return (
    <div className="company-page">
     
      <main>
        <CompanyList />
      </main>
     
    </div>
  );
}

export default CompanyPage;
