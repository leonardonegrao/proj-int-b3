import React from "react"

import Layout from "../components/layout"

import "../styles/quemSomos.css"

import avatar from "../images/53981024.png"

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo orci et risus rutrum, nec tincidunt neque
              sollicitudin. Ut sodales molestie aliquet.
            </p>
            <h5>Contato:</h5>
          </div>

          <div className="perfil-wrapper">
            <div>
              <img src={avatar} height="150"></img>
              <h3>Daniel Pereira</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo orci et risus rutrum, nec tincidunt neque
              sollicitudin. Ut sodales molestie aliquet.
            </p>
            <h5>Contato:</h5>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QuemSomos
