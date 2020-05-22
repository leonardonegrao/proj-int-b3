import React from "react"

import logo from '../images/logo-square-claro.svg'

import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footerContent}>
        <h3 className={footerStyles.copyright}>2020, Copyright</h3>
        <div></div>
        <img src={logo}></img>
      </div>
    </footer>
  )
}

export default Footer
