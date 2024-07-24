import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1>K<i class="fa-solid fa-house"></i>sa</h1>
        <nav>
          <ul>
            <li><NavLink to="/home" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Accueil</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>A Propos</NavLink></li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <p>K<i class="fa-solid fa-house"></i>sa</p>
        <span>© 2024 Kasa. All rights reserved</span>
      </footer>
    </>
  );
};

export default Layout;