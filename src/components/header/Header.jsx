import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h2>Hola soy</h2>
        <h1>Estela Extremera</h1>
        <h2 className="text-light">Full Stack Developer</h2>
        <CTA />
        <a href="#contact" className="scroll__down">
          Haz scroll
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
