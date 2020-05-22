import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import indexStyles from "../styles/index.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            title
            slug
            subtitle
            excerpt
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
      <div className="page-body">
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
      </div>
    </Layout>
  )
}
