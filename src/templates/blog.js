import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

import blogPostStyles from "../styles/blogPosts.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      date
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
        return <img className="post-image" alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className="page-body">
        <h2>{props.data.contentfulBlogPost.title}</h2>
        <h4>{props.data.contentfulBlogPost.date}</h4>
        <h3>{props.data.contentfulBlogPost.subtitle}</h3>

        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default Blog
