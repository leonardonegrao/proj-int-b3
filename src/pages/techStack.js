import React from "react"

import Layout from "../components/layout"

import "../styles/techStack.css"

import angularIcon from "../images/tech-stack-icons/angular-icon.png"
import cssIcon from "../images/tech-stack-icons/css-icon.png"
import htmlIcon from "../images/tech-stack-icons/html-icon.png"
import ionicIcon from "../images/tech-stack-icons/ionic-icon.png"
import javaIcon from "../images/tech-stack-icons/java-icon.png"
import javascriptIcon from "../images/tech-stack-icons/javascript-icon.png"
import nodejsIcon from "../images/tech-stack-icons/nodejs-icon.png"
import reactIcon from "../images/tech-stack-icons/react-icon.png"
import gatsbyIcon from "../images/tech-stack-icons/gatsby-icon.png"

const TechStack = () => {
  return (
    <Layout>
      <div className="main-tech-stack">
        <h2>Tech Stack</h2>

        <p>
          Com as tecnologias mais versáteis do mercado, mantendo um padrão, é
          possível criar diferentes tipos de aplicações, sejam elas mobile, web
          ou até mesmo para desktops.
        </p>
        <p className="description">
          Angular | ReactJS | NodeJS | HTML5 | Javascript | CSS3 | Ionic |
          GatsbyJS | Java
        </p>

        <div className="techs">
          <div id="line-one">
            <a
              href="https://angularjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={angularIcon} alt="Angular"></img>
            </a>
          </div>
          <div id="line-two">
            <a
              href="https://pt-br.reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={reactIcon} alt="React"></img>
            </a>
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nodejsIcon} alt="Node"></img>
            </a>
          </div>
          <div id="line-three">
            <img src={htmlIcon} alt="HTML"></img>
            <img src={javascriptIcon} alt="Javascript"></img>
            <img src={cssIcon} alt="CSS"></img>
          </div>
          <div id="line-four">
            <a
              href="https://ionicframework.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ionicIcon} alt="Ionic"></img>
            </a>

            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gatsbyIcon}></img>
            </a>
          </div>
          <div id="line-five">
            <a
              href="https://www.oracle.com/br/java/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={javaIcon} alt="Java"></img>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TechStack
