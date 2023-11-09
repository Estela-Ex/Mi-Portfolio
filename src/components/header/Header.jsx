import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import img from "../../assets/foto linkedln.jpg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Estela Extremera" />
          </div>
        </div>
        <h2>Hola soy</h2>
        <h1>Estela Extremera</h1>
        <h2 className="text-light">Full Stack Developer</h2>
        <CTA />
        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
