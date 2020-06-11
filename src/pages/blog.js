import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { node } from "prop-types"

export default function Blog(props) {
  return (
    <Layout current={props.location.pathname}>
      <main>
        <h1>Blog</h1>
        
        {props.data.allMarkdownRemark.nodes.map(nodes => (
          <div key={nodes.id}>
            <h2>
              <Link
                to={nodes.fields.slug}
              >
                {nodes.frontmatter.title}
              </Link>
            </h2>
            <h4>{nodes.frontmatter.author} - {nodes.frontmatter.date}</h4>
            <p>{nodes.excerpt}</p>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          date(formatString: "dddd, MMMM DD, YYYY")
          author
        }
        fields {
          slug
        }
        excerpt
        id
      }
    }
  }
`