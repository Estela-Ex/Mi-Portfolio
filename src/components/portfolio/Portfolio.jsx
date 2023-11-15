import "./portfolio.css";

import IMG1 from "../../assets/rick and morty.png";
import IMG2 from "../../assets/Seguimiento citas pacientes Veterinario.png";
import IMG3 from "../../assets/simpsons.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
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
      title: "Simpsons",
      img: IMG3,
      description:
        "Con esta web podrás acceder a todos tus personajes favoritos de los Simpsons",
      technologies: "Html | CSS | Javascript | React Js | Typescript",
      link: "https://ubiquitous-smakager-37a061.netlify.app",
      github: "https://github.com/Estela-Ex/Api_Simpsons",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://alpha-agency-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://jokes-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Joke-App",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
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
