import React from "react"

import Layout from "../components/layout"

import "../styles/quemSomos.css"

import avatarDaniel from "../images/quem-somos/Screenshot_4.png"
import avatarMatheus from "../images/quem-somos/avatar-matheus.jpeg"
import avatarLeonardo from "../images/quem-somos/avatar-leonardo.jpg"

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
              <img
                src={avatarLeonardo}
                height="150"
                alt="Leonardo Negrão"
              ></img>
              <h3>Leonardo Negrão</h3>
            </div>
            <p>
              Estudante de Engenharia de Software na UniFil. Estudando React,
              NodeJS, entre outras tecnologias web, como também Java.
            </p>
            <div className="contact">
              <h5>Contato:</h5>
              <a
                href="https://github.com/leonardonegrao"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leonardo-negr%C3%A3o-698b75190/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="perfil-wrapper">
            <div>
              <img src={avatarMatheus} height="150" alt="Matheus Pedrero"></img>
              <h3>Matheus Pedrero</h3>
            </div>
            <p>
              Atualmente estudando Java, JavaScript e tecnologias web (React,
              NodeJS, entre outras).
            </p>
            <div className="contact">
              <h5>Contato:</h5>
              <a
                href="https://github.com/MatheusPedrero"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="perfil-wrapper">
            <div>
              <img src={avatarDaniel} height="150" alt="Daniel Pereira"></img>
              <h3>Daniel Pereira</h3>
            </div>
            <p>
              Estudando Engenharia de Software, com maior foco em Java,
              JavaScript e outras linguagens web.
            </p>
            <div className="contact">
              <h5>Contato:</h5>
              <a
                href="https://github.com/danielPereiraV"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QuemSomos
