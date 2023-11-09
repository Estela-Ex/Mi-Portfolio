import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Estela Extremera
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Página Principal</a>
        </li>
        <li>
          <a href="#about">Sobre mi</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonios</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/estela-extremera"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://https://github.com/Estela-Ex"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2023. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
}

export default Footer