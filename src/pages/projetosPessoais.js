import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Head from "../components/head"

import projetosPessoaisStyles from "../styles/projetosPessoais.module.scss"

import filmesbrScreens from "../images/projects-screens/filmesbr-ps.png"
import casaDoCodigoScreen from "../images/projects-screens/casaDoCodigoMain.jpg"
import jsHuntScreens from "../images/projects-screens/jshunt-screens.png"
import iCooking from "../images/projects-screens/iCooking.png"
import trab from "../images/projects-screens/trabKanesh.png"

const ProjetosPessoais = () => {
  return (
    <Layout>
      <Head title="Projetos Pessoais" />
      <div className={projetosPessoaisStyles.header}>
        <div className="title-container">
          <h1>Projetos</h1>
        </div>
      </div>
      <div className="container">
        <div id="1" className={projetosPessoaisStyles.project}>
          <div className={projetosPessoaisStyles.cardProject}>
            <h1>filmesbr</h1>
            <div className={projetosPessoaisStyles.description}>
              <p>
                O filmesbr é um website em Javascript, com estilização feita com
                a ferramenta Bootstrap.
              </p>
              <p>
                O site possui um banco de dados de filmes. O usuário clica em um
                botão de sorteio e lhe é sorteado um filme do banco, as
                informações são apresentadas
              </p>
            </div>
            <div className={projetosPessoaisStyles.repos}>
              <a
                href="https://github.com/leonardonegrao/filmesbr-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          <div className={projetosPessoaisStyles.picture}>
            <img alt="prints do projeto" src={filmesbrScreens}></img>
          </div>
        </div>

        <div id="2" className={projetosPessoaisStyles.projectRight}>
          <div className={projetosPessoaisStyles.picture}>
            <img alt="prints do projeto" src={casaDoCodigoScreen}></img>
          </div>

          <div className={projetosPessoaisStyles.cardProject}>
            <h1>Casa do Código</h1>
            <div className={projetosPessoaisStyles.description}>
              <p>
                Projeto simples para estudo de ReactJS, seguindo as aulas de um
                curso da Alura. O site permite a adição e remoção de livros de
                uma lista. O projeto ainda está em desenvolvimento, conforme o
                acompanhamento do curso.
              </p>
            </div>
            <div className={projetosPessoaisStyles.repos}>
              <a
                href="https://github.com/leonardonegrao/alura-react-casa-do-codigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        <div id="3" className={projetosPessoaisStyles.project}>
          <div className={projetosPessoaisStyles.cardProject}>
            <h1>JSHunt</h1>
            <div className={projetosPessoaisStyles.description}>
              <p>
                Site em ReactJS para acompanhamento de curso da Rocketseat. O
                projeto tinha como propósito treinar o que foi ensinado no
                curso, principalmente paginação e a utilização de uma lista
                dinâmica.
              </p>
            </div>
            <div className={projetosPessoaisStyles.repos}>
              <a
                href="https://github.com/leonardonegrao/rocketseat-reactjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          <div className={projetosPessoaisStyles.picture}>
            <img alt="prints do projeto" src={jsHuntScreens}></img>
          </div>
        </div>

        <div id="4" className={projetosPessoaisStyles.projectRight}>
          <div className={projetosPessoaisStyles.picture}>
            <img alt="prints do projeto" src={iCooking}></img>
          </div>

          <div className={projetosPessoaisStyles.cardProject}>
            <h1>iCooking</h1>
            <div className={projetosPessoaisStyles.description}>
              <p>
                Aplicativo em Ionic realizado para o projeto interdisciplinar do
                ano anterior. O projeto tinha como propósito agilizar os
                processos de compra e retirada de produtos das cantinas da
                Unifil.
              </p>
            </div>
          </div>
        </div>

        <div id="5" className={projetosPessoaisStyles.project}>
          <div className={projetosPessoaisStyles.cardProject}>
            <h1>Projeto sobre vetor</h1>
            <div className={projetosPessoaisStyles.description}>
              <p>
                Projeto realizado para a aula do professor Edson Shinki
                Kaneshima no 1º semestre de 2020. Esse projeto tinha como
                objetivo inserir valores em posições vazias e não vazias de um
                array, retornar valores da primeira posição, do ultimo número e
                o array depois de fazer as alterações, remover elementos,
                verificar quantos elementos possui e converter esse array em
                String.
              </p>
            </div>
          </div>

          <div className={projetosPessoaisStyles.picture}>
            <img alt="prints do projeto" src={trab}></img>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjetosPessoais
