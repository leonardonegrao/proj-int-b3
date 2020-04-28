import React from "react"
import { Link } from "gatsby"

import icon from "../images/LogoMakr_161lgY.png"

import "../styles/global.scss"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">
            <img src={icon} alt="Big Three"></img>
          </Link>
        </h1>
      </div>
      <div className={headerStyles.nav}>
        <ul>
          <li>
            <Link
              className={headerStyles.menuOption}
              activeClassName={headerStyles.activeMenuOption}
              to="/"
            >
              <h3>Blog</h3>
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.menuOption}
              activeClassName={headerStyles.activeMenuOption}
              to="/projetosPessoais"
            >
              <h3>Projetos Pessoais</h3>
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.menuOption}
              activeClassName={headerStyles.activeMenuOption}
              to="/quemSomos"
            >
              <h3>Quem Somos</h3>
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.menuOption}
              activeClassName={headerStyles.activeMenuOption}
              to="/techStack"
            >
              <h3>Tech Stack</h3>
            </Link>
          </li>
          <li>
            <a
              className={headerStyles.menuOption}
              href="https://github.com/leonardonegrao/proj-int-b3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Repositório</h3>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
