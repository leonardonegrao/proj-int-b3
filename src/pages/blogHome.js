import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "../styles/blog.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            title
            slug
            subtitle
            date(formatString: "DD/MM/YYYY")
            banner {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />

      <div className={blogStyles.header}><div className='title-container'><h1>Blog</h1></div></div>

      <div className={`${blogStyles.postsContainer} main`}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <article className={blogStyles.post}>
              <div className={blogStyles.titleAndDateContainer}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                </Link>
                <sub>{edge.node.date}</sub>
              </div>
              <p>{edge.node.subtitle}</p>
              <div className={blogStyles.bannerContainer}>
                <img src={edge.node.banner.file.url}></img>
              </div>
            </article>
          )
        })}
      </div>

      {/* <div className="page-body">
        <h1>Blog</h1>
        <div className="wrapper">
          <div className={indexStyles.content}>
            <ol>
              {data.allContentfulBlogPost.edges.map(edge => {
                return (
                  <article className="content-wrapper">
                    <li>
                      <div className={indexStyles.banner}>
                        <img
                          alt={edge.node.banner.file.title}
                          src={edge.node.banner.file.url}
                        ></img>
                      </div>

                      <div>
                        <Link to={`/blog/${edge.node.slug}`}>
                          <h2>{edge.node.title}</h2>
                        </Link>
                        <h3 className={indexStyles.notLink}>
                          {edge.node.subtitle}
                        </h3>
                        <h4 className={indexStyles.notLink}>
                          {edge.node.date}
                        </h4>
                        <p
                          className={`${indexStyles.excerpt} ${indexStyles.notLink}`}
                        >
                          {edge.node.excerpt}
                        </p>
                      </div>
                    </li>
                  </article>
                )
              })}
            </ol>
          </div>
        </div>
      </div> */}
    </Layout >
  )
}
