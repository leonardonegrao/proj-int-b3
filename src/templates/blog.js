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
        return (
          <div className={blogPostStyles.postImgContainer}><img className={blogPostStyles.postImg} alt={alt} src={url} /></div>
        )
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
      <div className="container">
        <div className="main">
          <div className="content-wrapper">
            <article className={blogPostStyles.post}>
              <h1 className={blogPostStyles.title} >{props.data.contentfulBlogPost.title}</h1>
              <h2 className={blogPostStyles.subtitle}>{props.data.contentfulBlogPost.subtitle}</h2>
              <div className={blogPostStyles.containerPostBody}>

                <div className={blogPostStyles.date}><sub>{props.data.contentfulBlogPost.date}</sub></div>
                <div className={blogPostStyles.divisor}></div>
                <div className={blogPostStyles.postBody}>
                  {documentToReactComponents(
                    props.data.contentfulBlogPost.body.json,
                    options
                  )}
                </div>
                <div className={blogPostStyles.divisor}></div>
              </div>

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
