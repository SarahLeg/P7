import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1>K<i class="fa-solid fa-house"></i>sa</h1>
        <nav>
          <ul>
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/about">A Propos</Link></li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <p>K<i></i>sa</p>
        <span>© 2024 Kasa. All rights reserved</span>
      </footer>
    </>
  );
};

export default Layout;