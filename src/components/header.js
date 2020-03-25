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
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/projetosPessoais">Projetos Pessoais</Link>
          </li>
          <li>
            <Link to="/quemSomos">Quem Somos</Link>
          </li>
          <li>
            <Link to="/techStack">Tech Stack</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
