import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Patterns from '../patterns/homePatterns'

import homeStyles from '../styles/home.module.scss'

const Home = () => {
  return (
    <Layout>
      <div className={homeStyles.main}>
        <Patterns />
        <section className={homeStyles.top}>
          <h1>Desenvolvimento Web do começo ao fim</h1>
          <p>Serviços de design, desenvolvimento front-end, back-end e mobile para satisfazer todas as suas necessidades.</p>
          <div className={homeStyles.cardTop}></div>
        </section>

        <section className={homeStyles.blogSection}>
          <h2>Acompanhe nosso blog!</h2>
          <div className={homeStyles.flexBlog}>
            <div className={homeStyles.cardBlog}></div>
            <div className={homeStyles.descButtonBlog}>
              <p>Opiniões e experiências sobre grandes tecnologias e serviços do mercado.</p>
              <Link to='/blogHome'>
                <button type="button">Ver Mais</button>
              </Link>
            </div>
          </div>
        </section>

        <section className={homeStyles.techsSection}>
          <h2>Conheça nossas tecnologias!</h2>
          <div className={homeStyles.techsCards}>
            <div className={`${homeStyles.techCard} ${homeStyles.reactCard}`}></div>
            <div className={`${homeStyles.techCard} ${homeStyles.jsCard}`}></div>
            <div className={`${homeStyles.techCard} ${homeStyles.angularCard}`}></div>
          </div>
          <div className={homeStyles.buttonCenter}>
            <Link to='/techStack'>
              <button>Conhecer</button>
            </Link>
          </div>
        </section>

        <section className={homeStyles.contactSection}>
          <h2>Fale Conosco!</h2>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <div className={homeStyles.contactCard}>
              <fieldset>
                <label for="in-email">E-mail</label>
                <input id="in-email" type="email" required></input>

                <label for="in-subject">Assunto</label>
                <input id="in-subject" type="text" required></input>

                <label for="in-message">Sua Mensagem</label>
                <textarea id="in-message" type="text" required></textarea>
              </fieldset>
            </div>
            <div className={homeStyles.buttonContainer}>
              <button type="submit">Enviar</button>
            </div>
          </form>


        </section>
      </div>




    </Layout>
  )
}
export default Home;