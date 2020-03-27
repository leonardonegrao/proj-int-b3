import React from "react"

import Layout from "../components/layout"

import "../styles/quemSomos.css"

import avatar from "../images/53981024.png"
import foto from "../images/Screenshot_4.png"

const QuemSomos = () => {
  return (
    <Layout>
      <div className="quem-somos">
        <h2 className="title">Quem Somos</h2>
        <p id="description">
          Somos três estudantes de Engenharia de Software da UniFil, atualmente
          no 3º Período.
        </p>

        <div>
          <div className="perfil-wrapper">
            <div>
              <img src={avatar} height="150"></img>
              <h3>Leonardo Negrão</h3>
            </div>
            <p>
              Estudante de Engenharia de Software na UniFil. Estudando React,
              NodeJS, entre outras tecnologias web, como também Java.
            </p>
            <h5>Contato:</h5>
            <a href="https://github.com/leonardonegrao" target="_blank">
              GitHub
            </a>
          </div>

          <div className="perfil-wrapper">
            <div>
              <img src={avatar} height="150"></img>
              <h3>Matheus Pedrero</h3>
              </div>
            <p>
              Atualmente estudando Java, JavaScript e tecnologias web
              (React, NodeJS, entre outras.)
            </p>
            <h5>Contato:</h5>
            <a href="https://github.com/MatheusPedrero" target="_blank">
              GitHub
            </a>
          </div>

          <div className="perfil-wrapper">
            <div>
              <img src={foto} height="150"></img>
              <h3>Daniel Pereira</h3>
            </div>
            <p>
              Estudando Engenharia de Software, com maior foco em Java, JavaScript e outras linguagens web.
            </p>
            <h5>Contato:</h5>
            <a href="https://github.com/danielPereiraV" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QuemSomos
