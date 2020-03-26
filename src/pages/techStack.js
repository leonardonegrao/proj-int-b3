import React from "react"

import Layout from "../components/layout"

import "../styles/techStack.css"

import angularIcon from "../images/angular-icon.png"
import cssIcon from "../images/css-icon.png"
import htmlIcon from "../images/html-icon.png"
import ionicIcon from "../images/ionic-icon.png"
import javaIcon from "../images/java-icon.png"
import javascriptIcon from "../images/javascript-icon.png"
import nodejsIcon from "../images/nodejs-icon.png"
import reactIcon from "../images/react-icon.png"

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
          Angular, ReactJS, NodeJS, HTML5, Javascript, CSS3, Ionic, Java
        </p>

        <div className="techs">
          <div className="line-one">
            <img src={angularIcon} alt="Angular"></img>
          </div>
          <div className="line-two">
            <img src={reactIcon} alt="React"></img>
            <img src={nodejsIcon} alt="Node"></img>
          </div>
          <div className="line-three">
            <img src={htmlIcon} alt="HTML"></img>
            <img src={javascriptIcon} alt="Javascript"></img>
            <img src={cssIcon} alt="CSS"></img>
          </div>
          <div className="line-four">
            <img src={ionicIcon} alt="Ionic"></img>
            <img src={javaIcon} alt="Java"></img>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TechStack
