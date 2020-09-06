import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { node } from "prop-types"
import Cover from "../components/cover"

import BackgroundImage from "gatsby-background-image"
import coverStyle from "../components/styles/cover.module.css"

export default function Blog(props) {
  return (
    <Layout current={props.location.pathname} pageTitle="Blog">
      <BackgroundImage fluid={props.data.file.childImageSharp.fluid} className={coverStyle.cover} preserveStackingContext={true}>
        <Cover legend="Studying rocket feed systems, July 2019" />
      </BackgroundImage>
      <main className={coverStyle.offsetMain}>
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
            <h4>{nodes.frontmatter.author} - {nodes.parent.modifiedTime}</h4>
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
          author
        }
        fields {
          slug
        }
        excerpt
        id
        parent {
          ... on File {
            modifiedTime(formatString: "dddd, MMMM DD, YYYY")
          }
        }
      }
    }
    file(relativePath: {eq: "content/covers/board.jpg"}) {
      ...CoverQuery
    }
  }
`