import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

require(`katex/dist/katex.min.css`)

export default function Project({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <main>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`