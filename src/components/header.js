import React from "react"
import { Link } from "gatsby"

import icon from "../images/big-three-icon.png"

import "../styles/header.css"

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">
            <img src={icon}></img>
          </Link>
        </h1>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link
              className="menu-option"
              activeClassName="active-menu-option"
              to="/"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="menu-option"
              activeClassName="active-menu-option"
              to="/projetosPessoais"
            >
              Projetos Pessoais
            </Link>
          </li>
          <li>
            <Link
              className="menu-option"
              activeClassName="active-menu-option"
              to="/quemSomos"
            >
              Quem Somos
            </Link>
          </li>
          <li>
            <Link
              className="menu-option"
              activeClassName="active-menu-option"
              to="/techStack"
            >
              Tech Stack
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
