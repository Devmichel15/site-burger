import React, { useState } from "react";
import { BiCoffee } from "react-icons/bi";

import "../styles/Header.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a className="navbar-logo" href="#">
        <BiCoffee />
        Kadosh Café
      </a>

      {/* Toggle Mobile */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <div className={`navbar-menu ${menuActive ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
        <a href="#" className="btn-pedido">Pedido</a>
      </div>
    </nav>
  );
}

export default Header;
