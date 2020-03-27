import React from "react"

import Layout from "../components/layout"

import "../styles/ProjetosPessoais.css"

import filmesbrScreens from "../images/projects-screens/filmesbr-ps.png"
import casaDoCodigoScreen from "../images/projects-screens/casaDoCodigoMain.jpg"
import jsHuntScreens from "../images/projects-screens/jshunt-screens.png"

const ProjetosPessoais = () => {
  return (
    <Layout>
      <h2>Projetos Pessoais</h2>

      <div className="projeto-wrapper">
        <h3>filmesbr - Leonardo Negrão</h3>
        <p>
          O filmesbr é um website em Javascript, com estilização feita com a
          ferramenta Bootstrap. O projeto tinha como intuito o treino das
          habilidades de Javascript avançado, como também OOP.
        </p>

        <img src={filmesbrScreens}></img>

        <p>
          O site possui um banco de dados de filmes (guardado em um arquivo
          JSON). O usuário clica em um botão de sorteio e lhe é sorteado um
          filme do banco, as informações são apresentadas, e.g as plataformas
          on-line que podem ser utilizadas para assistir.
        </p>
        <a
          href="https://github.com/leonardonegrao/filmesbr-site"
          target="_blank"
        >
          Repositório no GitHub
        </a>
        <p className="separator">
          __________________________________________________________________________________________________
        </p>
        <h3>Casa Do Código - Leonardo Negrão</h3>
        <p>
          Projeto simples para estudo de ReactJS, seguindo as aulas de um curso
          da Alura.
        </p>
        <img src={casaDoCodigoScreen}></img>
        <p>
          O site permite a adição e remoção de livros de uma lista. O projeto
          ainda está em desenvolvimento, conforme o acompanhamento do curso.
        </p>
        <a
          href="https://github.com/leonardonegrao/alura-react-casa-do-codigo"
          target="_blank"
        >
          Repositório no GitHub
        </a>
        <p className="separator">
          __________________________________________________________________________________________________
        </p>
        <h3>JSHunt - Leonardo Negrão</h3>
        <p>Site em ReactJS para acompanhamento de curso da Rocketseat.</p>
        <img src={jsHuntScreens}></img>
        <p>
          O projeto tinha como propósito treinar o que foi ensinado no curso,
          principalmente paginação e a utilização de uma lista dinâmica.
        </p>
        <a
          href="https://github.com/leonardonegrao/rocketseat-reactjs"
          target="_blank"
        >
          Repositório no GitHub
        </a>
        <p className="separator">
          __________________________________________________________________________________________________
        </p>
      </div>
    </Layout>
  )
}

export default ProjetosPessoais
