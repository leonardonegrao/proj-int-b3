import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

import logo from '../images/logo-full-claro.svg'

import "../styles/global.scss"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header>
      <div className={headerStyles.headerContainer}>
        <h1>
          <div className={headerStyles.logoWrapper}>
            <Link to='/'>
              <img src={logo}></img>
            </Link>
          </div>

        </h1>

        <div>
          <ul>
            <div>
              <Link exact className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/blogHome'><li>Blog</li></Link>
            </div>
            <div>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/quemSomos'><li>Quem Somos</li></Link>
            </div>
            <div>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/projetosPessoais'><li>Projetos</li></Link>
            </div>
            <div>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/techStack'><li>Tech Stack</li></Link>
            </div>
          </ul>
        </div>

        <div className={headerStyles.githubLogo}>
          <a href="https://github.com/leonardonegrao/proj-int-b3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </header>
  )
}

export default Header
