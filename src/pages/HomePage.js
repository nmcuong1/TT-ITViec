import React from 'react';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';
import FeaturedCompanies from '../components/FeaturedCompanies';
import BlogHighlights from '../components/BlogHighlights';
import '../assets/styles/HomePage.css';
import backg from '../assets/images/background_itviec.webp'
import backgr from'../assets/images/background2.webp'

function HomePage() {
  return (
    <div className="homepage">
      <main>
      
        <section className="hero">
          <h1>970 Việc làm IT cho Developer "Chất"</h1>
          <SearchBar />
        <div className="backgr">
        <img className = "image"src={backg} alt="ITviec Logo"/>
        <img className = "image2"src={backgr} alt="ITviec Logo"/>
        </div>
        </section>
        <JobList />
        <FeaturedCompanies />
        <BlogHighlights />
      </main>
    </div>
  );
}

export default HomePage;
