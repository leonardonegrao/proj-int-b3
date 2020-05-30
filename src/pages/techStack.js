import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngular,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons"

import angular from "../images/tech-stack-assets/angular.jpg"
import graphql from "../images/tech-stack-assets/graphql.jpg"
import figma from "../images/tech-stack-assets/figma.png"
import gatsby from "../images/tech-stack-assets/gatsby.png"
import javascript from "../images/tech-stack-assets/javascript.png"
import react from "../images/tech-stack-assets/react.png"

import Layout from "../components/layout"
import Head from "../components/head"

import techStackStyles from "../styles/techStack.module.scss"

const TechStack = () => {
  return (
    <Layout>
      <Head title="Tech Stack" />
      <div className={techStackStyles.header}>
        <div>
          <div className="title-container">
            <h1>Tech Stack</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={techStackStyles.main}>
          <div className={techStackStyles.containerNecessities}>
            <div
              style={{ position: "absolute", top: "0px", left: "0px" }}
              className={techStackStyles.containerBubble}
            >
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faAngular} />
              </div>
              <p>Angular</p>
              <svg
                className={techStackStyles.angularPath}
                viewBox="8200 1042.993 523.574 231.356"
              >
                <path
                  fill="transparent"
                  stroke="rgba(81,192,192,1)"
                  stroke-width="2px"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                  stroke-miterlimit="4"
                  shape-rendering="auto"
                  id="Path_8"
                  d="M 8200 1062.841796875 C 8545.080078125 962.650146484375 8723.57421875 1274.34912109375 8723.57421875 1274.34912109375"
                ></path>
              </svg>
            </div>

            <div
              style={{ position: "absolute", top: "273px", left: "0px" }}
              className={techStackStyles.containerBubble}
            >
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faReact} />
              </div>
              <p>ReactJS</p>
              <svg className={techStackStyles.reactPath} viewBox="0 0 523 2">
                <path
                  fill="transparent"
                  stroke="rgba(81,192,192,1)"
                  stroke-width="2px"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                  stroke-miterlimit="4"
                  shape-rendering="auto"
                  id="Line_3"
                  d="M 0 0 L 523 0"
                ></path>
              </svg>
            </div>

            <div
              style={{ position: "absolute", top: "546px", left: "0px" }}
              className={techStackStyles.containerBubble}
            >
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
              <p>NodeJS</p>
              <svg
                className={techStackStyles.nodePath}
                viewBox="8200 1042.993 523.574 231.356"
              >
                <path
                  fill="transparent"
                  stroke="rgba(81,192,192,1)"
                  stroke-width="2px"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                  stroke-miterlimit="4"
                  shape-rendering="auto"
                  id="Path_6"
                  d="M 8200 1254.5 C 8545.080078125 1354.691650390625 8723.57421875 1042.99267578125 8723.57421875 1042.99267578125"
                ></path>
              </svg>
            </div>

            <div
              style={{ position: "absolute", top: "0px", left: "1139px" }}
              className={techStackStyles.containerBubble}
            >
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <p>HTML5</p>
              <svg
                className={techStackStyles.htmlPath}
                viewBox="8200 1042.993 523.574 231.356"
              >
                <path
                  fill="transparent"
                  stroke="rgba(81,192,192,1)"
                  stroke-width="2px"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                  stroke-miterlimit="4"
                  shape-rendering="auto"
                  id="Path_9"
                  d="M 8723.57421875 1062.841796875 C 8378.494140625 962.650146484375 8200 1274.34912109375 8200 1274.34912109375"
                ></path>
              </svg>
            </div>

            <div
              style={{ position: "absolute", top: "273px", left: "1139px" }}
              className={techStackStyles.containerBubble}
            >
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faCss3} />
              </div>
              <p>CSS3</p>
              <svg className={techStackStyles.cssPath} viewBox="0 0 523 2">
                <path
                  fill="transparent"
                  stroke="rgba(81,192,192,1)"
                  stroke-width="2px"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                  stroke-miterlimit="4"
                  shape-rendering="auto"
                  id="Line_4"
                  d="M 0 0 L 523 0"
                ></path>
              </svg>
            </div>

            <div
              style={{ position: "absolute", top: "546px", left: "1139px" }}
              className={techStackStyles.containerBubble}
            >
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faJs} />
              </div>
              <p>JS</p>
              <svg
                className={techStackStyles.jsPath}
                viewBox="8200 1042.993 523.574 231.356"
              >
                <path
                  fill="transparent"
                  stroke="rgba(81,192,192,1)"
                  stroke-width="2px"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                  stroke-miterlimit="4"
                  shape-rendering="auto"
                  id="Path_7"
                  d="M 8723.57421875 1254.5 C 8378.494140625 1354.691650390625 8200 1042.99267578125 8200 1042.99267578125"
                ></path>
              </svg>
            </div>

            <div className={techStackStyles.necessities}>
              <p style={{ fontSize: "36px", fontWeight: "700" }}>
                Necessidades
              </p>
              <p style={{ fontSize: "24px" }}>
                diferentes exigem soluções diferentes. Mas com ferramentas
                flexíveis, as soluções não precisam ser <b>tão</b> diferentes
                assim.
              </p>
            </div>
          </div>
        </div>

        <div className={techStackStyles.mainTechs}>
          <div id="1" className={techStackStyles.techDescription}>
            <div className={techStackStyles.cardTech}>
              <img src={javascript}></img>
            </div>
            <div className={techStackStyles.description}>
              <h1>JavaScript: A base de tudo</h1>
              <p>
                JavaScript nasceu como a linguagem da web. Hoje, é uma das
                linguagens mais populares do mundo, e junto com o HTML5 e o
                CSS3, compõe a tríade mais popular da web.
              </p>
              <p>
                Após 24 anos da sua criação, muita coisa mudou. Do JS nasceu o
                NodeJS, para lidar com lógica de back-end, várias frameworks
                como Angular, ReactJS e VueJS e também a possibilidade de
                desenvolver para desktops e mobile, com o Electron e o React
                Native, respectivamente.
              </p>
              <p>
                Portanto, o JS é uma linguagem essencial para qualquer stack,
                que não para de crescer, entrando em novas áreas e permitindo
                que o desenvolvedor que a domine possa desenvolver quase tudo.
              </p>
            </div>
          </div>

          <div
            id="2"
            className={`${techStackStyles.techDescription} ${techStackStyles.techDescriptionRight}`}
          >
            <div className={techStackStyles.description}>
              <h1>ReactJS: Levando o JS ao próximo nível</h1>
              <p>
                ReactJS é uma biblioteca JavaScript criada pelo Facebook. Seu
                propósito é tornar o desenvolvimento web o mais eficiente
                possível. Ao trazer o HTML5 para o arquivo JS, com o JSX, o
                React simplifica tarefas repetitivas na criação de sites (e
                aplicativos mobile com o React Native).
              </p>
              <p>
                Essa biblioteca é, hoje em dia, uma das mais populares do mundo
                e seu sucesso está longe do ápice, flexibilizando suas
                capacidades dia após dia, o ReactJS promete levar o JS ao
                futuro.
              </p>
              <p>Saiba mais sobre a biblioteca ReactJS clicando aqui.</p>
            </div>
            <div className={techStackStyles.cardTech}>
              <img src={react}></img>
            </div>
          </div>

          <div id="3" className={techStackStyles.techDescription}>
            <div className={techStackStyles.cardTech}>
              <img src={angular}></img>
            </div>
            <div className={techStackStyles.description}>
              <h1>Angular: JS polido para não perder tempo</h1>
              <p>
                O Angular é uma plataforma mantida pela Google e usa uma
                variação do JavaScript: o TypeScript.
              </p>
              <p>
                Para todos aqueles momentos que o desenvolvedor só queria
                definir o tipo de uma variável no JS, ou achou que o JavaScript
                não entregava organização suficiente para seus projetos grandes.
              </p>
              <p>
                Todos esses benefícios estão presentes no Angular. Mas não é só
                isso. Como o ReactJS, o Angular busca facilitar o
                desenvolvimento web e mobile ao lidar com o HTML5 e o CSS3
                direto no código TS.
              </p>
              <p> Saiba mais sobre a plataforma Angular clicando aqui.</p>
            </div>
          </div>
        </div>

        <div>
          <h1 style={{ textAlign: "center" }}>E muito mais:</h1>

          <div className={techStackStyles.containerFlexOutrasTechs}>
            <div className={techStackStyles.containerCardOutrasTechs}>
              <h3>Design de interfaces com Figma</h3>
              <div className={techStackStyles.cardTech}>
                <img src={figma}></img>
              </div>
            </div>
            <div className={techStackStyles.containerCardOutrasTechs}>
              <h3>Consumo de APIs com GraphQL</h3>
              <div className={techStackStyles.cardTech}>
                <img src={graphql}></img>
              </div>
            </div>
            <div className={techStackStyles.containerCardOutrasTechs}>
              <h3>Criação de sites estáticos com Gatsby</h3>
              <div className={techStackStyles.cardTech}>
                <img src={gatsby}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TechStack
