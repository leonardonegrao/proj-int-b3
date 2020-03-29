import React from "react"

import Layout from "../components/layout"

import "../styles/global.css"
import "../styles/index.css"

import gatsbyjsLogo from "../images/blog-posts/gatsbyjs-logo.jpg"

export default () => (
  <Layout>
    <div className="blog-main">
      <h2>Blog</h2>
      <div className="wrapper">
        <article>
          <div className="content">
            <h3>Criação do Website: GatsbyJS e Personalização</h3>
            <h5>Utilização das ferramentas e as escolhas.</h5>
            <img
              className="post-image-header"
              src={gatsbyjsLogo}
              alt="GatsbyJS"
            ></img>
            <p>
              Este website tem como propósito servir de portfólio para o grupo.
              Para tal, pesquisamos entre as tecnologias dispostas e
              determinamos que a melhor opção seria o{" "}
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GatsbyJS
              </a>
              . Com isso, montamos todo o site do zero. Iniciamos com o preset
              "hello-world", que é completamente limpo. O CSS é todo de nossa
              autoria, como também o material da Tech Stack e a logo.
            </p>
            <p>
              Tentamos seguir as melhores convenções React, então utilizamos
              Link para acesso a páginas internas, mantendo assim a velocidade.
              E utilizamos um componente Layout para diminuir repetição de
              código em importações comuns por todo o site.
            </p>
            <p>
              Na parte de identidade visual do site, optamos por cores frias e
              uma fonte com visual moderno (
              <a
                href="https://fonts.google.com/specimen/Montserrat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Montserrat
              </a>
              ). Aplicamos também bordas arredondadas em grande parte da
              aplicação, para manter-se similar ao padrão visual hoje comum na
              web.
            </p>
            <p>
              O repositório do site pode ser encontrado clicando{" "}
              <a
                href="https://github.com/leonardonegrao/proj-int-b3"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
              </a>
              .
            </p>
            <sub>29 de Março de 2020</sub>
          </div>
        </article>
      </div>
    </div>
  </Layout>
)
