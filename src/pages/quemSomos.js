import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Head from "../components/head"
import Patterns from "../patterns/quemSomosPatterns"

import quemSomosStyles from "../styles/quemSomos.module.scss"

import avatarDaniel from "../images/quem-somos/Screenshot_4.png"
import avatarMatheus from "../images/quem-somos/avatar-matheus.jpeg"
import avatarLeonardo from "../images/quem-somos/avatar-leonardo.jpg"

const QuemSomos = () => {
  return (
    <Layout>
      <Head title="Quem Somos" />
      <div className={quemSomosStyles.header}>
        <div className="title-container">
          <h1>Quem Somos</h1>
        </div>
      </div>

      <div className={quemSomosStyles.main}>
        <div className="container">
          <div className={quemSomosStyles.patterns}>
            <Patterns />
          </div>

          <div id="1" className={quemSomosStyles.member}>
            <div className={quemSomosStyles.cardMember}>
              <div className={quemSomosStyles.avatar}>
                <img alt="Leonardo Negrão" src={avatarLeonardo}></img>
              </div>
              <h1>Leonardo Negrão</h1>
              <div className={quemSomosStyles.social}>
                <a
                  href="https://github.com/leonardonegrao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-negr%C3%A3o-698b75190/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="mailto:leonardolnegrao@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
            <div className={quemSomosStyles.description}>
              <p>Estudante de Engenharia de Software na Unifil.</p>
              <p>
                Trabalha com Javascript e os frameworks React e Angular, além de
                Node para lógicas de back-end.
              </p>
              <p>
                Também tem envolvimento na parte de design e front-end com
                HTML5, CSS3 e design de interfaces em Figma e Adobe XD.
              </p>
            </div>
          </div>

          <div className={quemSomosStyles.rightContainer}>
            <div className={quemSomosStyles.member}>
              <div className={quemSomosStyles.description}>
                <p>Estudante de Engenharia de Software na Unifil.</p>
                <p>
                  Desenvolve em Java e JavaScript. Utiliza tecnologias como
                  Angular e Ionic para ampliar as possibilidades de
                  desenvolvimento.
                </p>
              </div>
              <div className={quemSomosStyles.cardMember}>
                <div className={quemSomosStyles.avatar}>
                  <img alt="Matheus Pedrero" src={avatarMatheus}></img>
                </div>
                <h1>Matheus Pedrero</h1>
                <div className={quemSomosStyles.social}>
                  <a
                    href="https://github.com/MatheusPedrero"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://br.linkedin.com/in/matheus-pedrero-7a71081a7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="mailto:matheus.pedrero@outlook.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="3" className={quemSomosStyles.member}>
            <div className={quemSomosStyles.cardMember}>
              <div className={quemSomosStyles.avatar}>
                <img alt="Daniel Pereira" src={avatarDaniel}></img>
              </div>
              <h1>Daniel Pereira</h1>
              <div className={quemSomosStyles.social}>
                <a
                  href="https://github.com/leonardonegrao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-negr%C3%A3o-698b75190/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="mailto:leonardolnegrao@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
            <div className={quemSomosStyles.description}>
              <p>Estudante de Engenharia de Software na Unifil.</p>
              <p>
                Focado em programação Java, complementa seu conhecimento com
                front-end web e React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QuemSomos
