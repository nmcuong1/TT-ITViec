import React from 'react';
import '../assets/styles/FeaturedCompanies.css';

function FeaturedCompanies() {
  const companies = [
    { id: 1, name: 'ABC Tech', location: 'Ho Chi Minh City' },
    { id: 2, name: 'XYZ Inc.', location: 'Hanoi' },
    // Thêm các công ty khác
  ];

  return (
    <section className="featured-companies">
      <h2>Featured Companies</h2>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
            <h3>{company.name}</h3>
            <p>{company.location}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FeaturedCompanies;
