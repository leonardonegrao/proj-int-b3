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
            date
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
                    <Link to={`/blog/${edge.node.slug}`}>
                      <li>
                        <h2>{edge.node.title}</h2>

                        <h5 className={indexStyles.notLink}>
                          {edge.node.date}
                        </h5>
                        <h3 className={indexStyles.notLink}>
                          {edge.node.subtitle}
                        </h3>
                      </li>
                    </Link>
                    <div className="separator"></div>
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
