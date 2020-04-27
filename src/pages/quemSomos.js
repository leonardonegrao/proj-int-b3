import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import quemSomosStyles from "../styles/quemSomos.module.scss"

import avatarDaniel from "../images/quem-somos/Screenshot_4.png"
import avatarMatheus from "../images/quem-somos/avatar-matheus.jpeg"
import avatarLeonardo from "../images/quem-somos/avatar-leonardo.jpg"
import gitHubLogo from "../images/quem-somos/github-logo.png"
import linkedInLogo from "../images/quem-somos/linkedin-logo.png"

const QuemSomos = () => {
  return (
    <Layout>
      <Head title="Quem Somos" />
      <div className="page-body">
        <h1>Quem Somos</h1>

        <div className="wrapper">
          <div className={"content-wrapper"}>
            <div className={quemSomosStyles.bio}>
              <img
                src={avatarLeonardo}
                className={quemSomosStyles.avatar}
                alt="Leonardo Negrão"
              ></img>
              <h2>Leonardo Negrão</h2>

              <p>
                Estudante de Engenharia de Software na UniFil. Estudando React,
                NodeJS, entre outras tecnologias web, como também Java.
              </p>
              <div className={quemSomosStyles.contact}>
                <a
                  href="https://github.com/leonardonegrao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gitHubLogo} alt="GitHub" className="social"></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-negr%C3%A3o-698b75190/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedInLogo}
                    alt="LinkedIn"
                    className="social"
                  ></img>
                </a>
              </div>
            </div>
          </div>

          <div className="content-wrapper">
            <div className={quemSomosStyles.bio}>
              <img
                src={avatarMatheus}
                className={quemSomosStyles.avatar}
                alt="Matheus Pedrero"
              ></img>
              <h2>Matheus Pedrero</h2>

              <p>
                Atualmente estudando Java, JavaScript e tecnologias web (React,
                NodeJS, entre outras).
              </p>
              <div className={quemSomosStyles.contact}>
                <a
                  href="https://github.com/MatheusPedrero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gitHubLogo} alt="GitHub" className="social"></img>
                </a>
              </div>
            </div>
          </div>

          <div className="content-wrapper">
            <div className={quemSomosStyles.bio}>
              <img
                src={avatarDaniel}
                className={quemSomosStyles.avatar}
                alt="Daniel Pereira"
              ></img>
              <h2>Daniel Pereira</h2>

              <p>
                Estudando Engenharia de Software, com maior foco em Java,
                JavaScript e outras linguagens web.
              </p>
              <div className={quemSomosStyles.contact}>
                <a
                  href="https://github.com/danielPereiraV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gitHubLogo} alt="GitHub" className="social"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QuemSomos
