import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/8172954?s=460&u=d104bc96b5246bfea62d118c49e28333e962cd68&v=4"
          alt="Imagem do Perfil"
        />
        <div>
          <strong>Bruno</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências.
      </p>
      <footer>
        <p>
          Preço/hora<strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp Icone" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
