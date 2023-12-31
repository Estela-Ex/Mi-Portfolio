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
        "Aquí podrás encontrar a todos los personajes de Rick and Morty de una manera muy sencilla, como caracteristicas, episodios, etc...",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://rickandmortypro.netlify.app/",
      github: "https://github.com/Estela-Ex/RickandMortyApiPRO",
    },
    {
      id: 2,
      title: "Seguimiento de pacientes para un Veterinario",
      img: IMG2,
      description:
        "Esta web está creada para llevar un control de los pacientes en un veterinario, pudiendo aplicarse a cualquier negocio que necesite un control de citas",
      technologies: "Html | CSS | Javascript | React Js | Tailwind CSS",
      link: "https://seguimientosdepacientes.netlify.app/",
      github: "https://github.com/Estela-Ex/crm-react",
    },
    {
      id: 3,
      title: "Buscador de clima",
      img: IMG3,
      description: "Buscador de clima",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://buscadordeclimaeex.netlify.app/",
      github: "https://github.com/Estela-Ex/Buscador-de-clima",
    },
    {
      id: 4,
      title: "Control de Gastos",
      img: IMG4,
      description:
        "Con esta aplicación podrás llevar un control de tu economia, teniendo en cuenta todos los gastos e ingresos. En todo momento sabremos el porcentaje gastado",
      technologies: "Html | CSS | Javascript | React Js ",
      link: "https://controldegastoseex.netlify.app/",
      github: "https://github.com/Estela-Ex/control-de-presupuestos",
    },
    {
      id: 5,
      title: "Simpsons",
      img: IMG5,
      description:
        "Con esta web podrás acceder a todos tus personajes favoritos de los Simpsons",
      technologies: "Html | CSS | Javascript | React Js | Typescript",
      link: "https://apisimpsons.netlify.app/",
      github: "https://github.com/Estela-Ex/Api_Simpsons",
    },
    {
      id: 6,
      title: "Cotizador de Criptomonedas",
      img: IMG6,
      description:
        "Con la ayuda de esta web, podremos obtener una serie de valores en función de que criptomoneda queramos la información y en que divisa la queremos",
      technologies: "Html | CSS | Javascript | React Js | tailwind CSS",
      link: "https://cotizadorcriptomonedaseex.netlify.app/",
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
