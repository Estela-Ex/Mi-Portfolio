import React from 'react';
import CV from '../../assets/cv_Estela_Extremera_2023.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Hablemos
      </a>
    </div>
  );
};

export default CTA;
