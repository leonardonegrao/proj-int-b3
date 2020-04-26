import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import "../styles/global.css"
import "../styles/index.css"

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
      <div className="blog-main">
        <h2>Blog</h2>
        <div className="wrapper">
          <article>
            <div className="content">
              <ol>
                {data.allContentfulBlogPost.edges.map(edge => {
                  return (
                    <li>
                      <Link to={`/blog/${edge.node.slug}`}>
                        <h3>{edge.node.title}</h3>
                      </Link>
                      <h5>{edge.node.date}</h5>
                      <h4>{edge.node.subtitle}</h4>
                      <p>{edge.node.excerpt}</p>
                    </li>
                  )
                })}
              </ol>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}
