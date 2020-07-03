import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <main>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h4>By {post.frontmatter.author} - {post.parent.modifiedTime}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        title
      }
      parent {
        ... on File {
          modifiedTime(formatString: "dddd, MMMM DD, YYYY")
        }
      }
    }
  }
`