import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import projetosPessoaisStyles from "../styles/projetosPessoais.module.scss"

import filmesbrScreens from "../images/projects-screens/filmesbr-ps.png"
import casaDoCodigoScreen from "../images/projects-screens/casaDoCodigoMain.jpg"
import jsHuntScreens from "../images/projects-screens/jshunt-screens.png"
import iCooking from "../images/projects-screens/iCooking.png"
import trab from "../images/projects-screens/trabKanesh.png"
import gitHubLogo from "../images/quem-somos/github-logo.png"

const ProjetosPessoais = () => {
  return (
    <Layout>
      <Head title="Projetos Pessoais" />
      <div className="page-body">
        <h1>Projetos Pessoais</h1>

        <div className="wrapper">
          <div className="content-wrapper">
            <div className={projetosPessoaisStyles.projeto}>
              <h2>filmesbr - Leonardo Negrão</h2>
              <p>
                O filmesbr é um website em Javascript, com estilização feita com
                a ferramenta Bootstrap. O projeto tinha como intuito o treino
                das habilidades de Javascript avançado, como também OOP.
              </p>

              <img
                src={filmesbrScreens}
                className={projetosPessoaisStyles.projetoImagem}
                alt="filmesbr screens"
              ></img>

              <p>
                O site possui um banco de dados de filmes (guardado em um
                arquivo JSON). O usuário clica em um botão de sorteio e lhe é
                sorteado um filme do banco, as informações são apresentadas, e.g
                as plataformas on-line que podem ser utilizadas para assistir.
              </p>
              <a
                href="https://github.com/leonardonegrao/filmesbr-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHubLogo} className="social"></img>
              </a>
            </div>
          </div>

          <div className="content-wrapper">
            <div className={projetosPessoaisStyles.projeto}>
              <h2>Casa Do Código - Leonardo Negrão</h2>
              <p>
                Projeto simples para estudo de ReactJS, seguindo as aulas de um
                curso da Alura.
              </p>
              <img
                src={casaDoCodigoScreen}
                className={projetosPessoaisStyles.projetoImagem}
                alt="casa do código screens"
              ></img>
              <p>
                O site permite a adição e remoção de livros de uma lista. O
                projeto ainda está em desenvolvimento, conforme o acompanhamento
                do curso.
              </p>
              <a
                href="https://github.com/leonardonegrao/alura-react-casa-do-codigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHubLogo} className="social"></img>
              </a>
            </div>
          </div>

          <div className="content-wrapper">
            <div className={projetosPessoaisStyles.projeto}>
              <h2>JSHunt - Leonardo Negrão</h2>
              <p>Site em ReactJS para acompanhamento de curso da Rocketseat.</p>
              <img
                src={jsHuntScreens}
                className={projetosPessoaisStyles.projetoImagem}
                alt="JSHunt screens"
              ></img>
              <p>
                O projeto tinha como propósito treinar o que foi ensinado no
                curso, principalmente paginação e a utilização de uma lista
                dinâmica.
              </p>
              <a
                href="https://github.com/leonardonegrao/rocketseat-reactjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHubLogo} className="social"></img>
              </a>
            </div>
          </div>

          <div className="content-wrapper">
            <div className={projetosPessoaisStyles.projeto}>
              <h2>iCooking - Matheus Pedrero</h2>
              <p>
                Aplicativo em Ionic realizado para o projeto interdisciplinar do
                ano anterior.
              </p>
              <img
                src={iCooking}
                className={projetosPessoaisStyles.projetoImagem}
                alt="iCooking screens"
              ></img>
              <p>
                O projeto tinha como propósito agilizar os processos de compra e
                retirada de produtos das cantinas da Unifil.
              </p>
            </div>
          </div>

          <div className="content-wrapper">
            <div className={projetosPessoaisStyles.projeto}>
              <h2>Projeto sobre Vetor - Daniel Pereira</h2>
              <p>
                Projeto realizado para a aula do professor Edson Shinki
                Kaneshima no 1º semestre de 2020.{" "}
              </p>
              <img
                src={trab}
                className={projetosPessoaisStyles.projetoImagem}
                alt="Projeto sobre Vetor screens"
              ></img>
              <p>
                Esse projeto tinha como objetivo inserir valores em posições
                vazias e não vazias de um array, retornar valores da primeira
                posição, do ultimo número e o array depois de fazer as
                alterações, remover elementos, verificar quantos elementos
                possui e converter esse array em String.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjetosPessoais
