import React from 'react';
import '../assets/styles/JobList.css';

function JobList() {
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'ABC Tech', location: 'Ho Chi Minh City' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Inc.', location: 'Hanoi' },
    // Thêm các công việc khác
  ];

  return (
    <section className="job-list">
      <h2>Available IT Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default JobList;
