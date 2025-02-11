import React from 'react';
import '../assets/styles/BlogHighlights.css';

function BlogHighlights() {
  const posts = [
    { id: 1, title: 'Latest Trends in IT', snippet: 'Explore the latest trends in the IT industry...' },
    { id: 2, title: 'Top IT Companies to Work For', snippet: 'Discover the top IT companies that offer the best work environment...' },
    // Thêm các bài viết khác
  ];

  return (
    <section className="blog-highlights">
      <h2>Blog Highlights</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.snippet}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BlogHighlights;
