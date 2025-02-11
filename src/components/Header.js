import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo_itviec.webp';

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">
              <img src={logo} alt="ITviec Logo" className="logo" />
            </Link>
        <ul>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
