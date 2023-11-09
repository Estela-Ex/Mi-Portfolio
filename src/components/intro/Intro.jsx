import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/foto linkedln.jpg'


const Intro = () => {
  return (
    <section id="about">
      <h2>Sobre mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Estela Extremera" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>1 año</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>+16 Proyectos</small>
            </article>
          </div>
          <p>
            Después de más de 17 años en otro sector (Telemarketing), donde realizaba formaciones para nuevas incorporaciones a las empresas, cursos de reciclaje para los agentes veteranos, además de llevar equipos de ventas con objetivos grupales e individuales, llegué a un punto donde no avanzaba y por esto decidí reinventarme. Gracias a personas cercanas a mi entorno empecé con la programación y descubrí que me encantaba y que se abría un abanico muy amplio de posibilidades. Así que comencé en este maravilloso mundo, donde tengo muy claro que quiero seguir aprendiendo y avanzando todos los días
          </p>
          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
