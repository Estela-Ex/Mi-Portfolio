import "./contact.css";

import React, { useRef, useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "contacto_porfolio",
        "template_xpycmke",
        formRef.current,
        "iy3zefHSlkUm-Ewvh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      {/* <h5>Póngase en contacto</h5> */}
      {/* <h5>
        Contestaré al email lo antes posible :)
      </h5> */}
      <h2>Contacto</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>estelaextremeracampos@gmail.com</h5>
            <a href="mailto:estelaextremeracampos@gmail.com">Enviar Mensaje</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" name="user_name" required />
          <input type="text" placeholder="Email" name="user_email" required />
          <textarea
            placeholder="Introduce tu mensaje"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
          {message && <span>Gracias, contestaré lo antes posible</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
