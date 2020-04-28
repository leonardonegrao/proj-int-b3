import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import Head from "../components/head"

import blogPostStyles from "../styles/blogPosts.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      date(formatString: "LLLL", locale: "pt-br")
      updatedAt(formatString: "LLLL", locale: "pt-br")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img className={blogPostStyles.postImg} alt={alt} src={url} />
      },
    },
  }

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: props.data.contentfulBlogPost.slug,
      title: props.data.contentfulBlogPost.title,
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className="page-body">
        <div className="wrapper">
          <div className="content-wrapper">
            <article className={blogPostStyles.post}>
              <h1>{props.data.contentfulBlogPost.title}</h1>
              <h2>{props.data.contentfulBlogPost.subtitle}</h2>
              <sub>{props.data.contentfulBlogPost.date}</sub>
              <div className={blogPostStyles.postBody}>
                {documentToReactComponents(
                  props.data.contentfulBlogPost.body.json,
                  options
                )}
              </div>

              <sub>Criado {props.data.contentfulBlogPost.date}</sub>
              <br></br>
              <sub>
                Última vez atualizado {props.data.contentfulBlogPost.updatedAt}
              </sub>
              <div className={blogPostStyles.disqus}>
                <DiscussionEmbed {...disqusConfig} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
