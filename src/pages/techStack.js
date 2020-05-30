import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact, faNodeJs, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import Head from "../components/head"

import techStackStyles from "../styles/techStack.module.scss"

const TechStack = () => {
  return (
    <Layout>
      <Head title="Tech Stack" />
      <div className={techStackStyles.header}>
        <div>
          <div className='title-container'><h1>Tech Stack</h1></div>
        </div>
      </div>
      <div className='container'>
        <div className='main'>
          <div className={techStackStyles.containerNecessities}>
            <div style={{ position: 'absolute', top: '663px', left: '140px' }} className={techStackStyles.containerBubble}>
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faAngular} />
              </div>
              <p>Angular</p>
            </div>

            <div style={{ position: 'absolute', top: '936px', left: '140px' }} className={techStackStyles.containerBubble}>
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faReact} />
              </div>
              <p>ReactJS</p>
            </div>

            <div style={{ position: 'absolute', top: '1209px', left: '140px' }} className={techStackStyles.containerBubble}>
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
              <p>NodeJS</p>
            </div>

            <div style={{ position: 'absolute', top: '663px', left: '1680px' }} className={techStackStyles.containerBubble}>
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <p>HTML5</p>
            </div>

            <div style={{ position: 'absolute', top: '936px', left: '1680px' }} className={techStackStyles.containerBubble}>
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faCss3} />
              </div>
              <p>CSS3</p>
            </div>

            <div style={{ position: 'absolute', top: '1209px', left: '1680px' }} className={techStackStyles.containerBubble}>
              <div className={techStackStyles.bubble}>
                <FontAwesomeIcon icon={faJs} />
              </div>
              <p>JavaScript</p>
            </div>

            <div className={techStackStyles.necessities}>
              <p style={{ fontSize: '36px', fontWeight: '700' }}>Necessidades</p>
              <p style={{ fontSize: '24px' }}>diferentes exigem soluções diferentes. Mas com ferramentas flexíveis, as soluções não precisam ser <b>tão</b> diferentes assim.</p>
            </div>
          </div>
        </div>


      </div>
    </Layout >
  )
}

export default TechStack
