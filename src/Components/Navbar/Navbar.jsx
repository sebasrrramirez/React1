import React from 'react';

//import mi archivo css
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <img src="/src/Components/Navbar/logo.png" alt="Logo" className="logo"/>
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
