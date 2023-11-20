import "./portfolio.css";

import IMG1 from "../../assets/rick and morty.png";
import IMG2 from "../../assets/Seguimiento citas pacientes Veterinario.png";
import IMG3 from "../../assets/buscador de clima.png";
import IMG4 from "../../assets/control de gastos.png";
import IMG5 from "../../assets/simpsons.png";
import IMG6 from "../../assets/cotizador criptomonedas.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Rick and Morty",
      img: IMG1,
      description:
        "Aquí podrás encontrar a todos los personajes de Rick and Morty de una manera muy sencilla",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://vermillion-starlight-90c2b6.netlify.app",
      github: "https://github.com/Estela-Ex/RickandMortyApiPRO",
    },
    {
      id: 2,
      title: "Seguimiento de pacientes para un Veterinario",
      img: IMG2,
      description:
        "Esta web está creada para llevar un control de los pacientes en un veterinario",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://citasreactudemy.netlify.app",
      github: "https://github.com/Estela-Ex/crm-react",
    },
    {
      id: 3,
      title: "Buscador de clima",
      img: IMG3,
      description: "Buscador de clima",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://resonant-duckanoo-0266b1.netlify.app",
      github: "https://github.com/Estela-Ex/Buscador-de-clima",
    },
    {
      id: 4,
      title: "Control de Gastos",
      img: IMG4,
      description:
        "Con esta web podrás llevar un control de todos tus gastos, ayudandote a llegar al ahorro",
      technologies: "Html | CSS | Javascript | React Js ",
      link: "https://delicate-clafoutis-196abf.netlify.app",
      github: "https://github.com/Estela-Ex/control-de-presupuestos",
    },
    {
      id: 5,
      title: "Simpsons",
      img: IMG5,
      description:
        "Con esta web podrás acceder a todos tus personajes favoritos de los Simpsons",
      technologies: "Html | CSS | Javascript | React Js | Typescript",
      link: "https://ubiquitous-smakager-37a061.netlify.app",
      github: "https://github.com/Estela-Ex/Api_Simpsons",
    },
    {
      id: 6,
      title: "Cotizador de Criptomonedas",
      img: IMG6,
      description: "Sencillo cotizador de criptomonedas",
      technologies: "Html | CSS | Javascript | React Js | tailwind CSS",
      link: "https://delightful-bavarois-118b96.netlify.app",
      github: "https://github.com/Estela-Ex/Cotizador-Criptomonedas",
    },
  ];

  return (
    <section id="portfolio">
      {/* <h5>My Recent Work</h5> */}
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
