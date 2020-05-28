import React from "react"
import { Link, graphql } from "gatsby"
import styles from "../components/styles/people.module.css"
import Layout from "../components/layout"

import BackgroundImage from "gatsby-background-image"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function People(props) {
  return (
    <Layout current={props.location.pathname}>
      {/* <Cover title="Test Cover" legend="yo mama" /> */}
      <BackgroundImage fluid={props.data.file.childImageSharp.fluid}>
        <p>Test legend</p>
        <h1>Test Cover</h1>
      </BackgroundImage>
      <User
        username={props.data.higgins.nodes[0].frontmatter.name}
        avatar="https://pbs.twimg.com/profile_images/1040042180826542082/pxjqhJb7_400x400.jpg"
        title={props.data.higgins.nodes[0].frontmatter.position}
        excerpt={props.data.higgins.nodes[0].internal.content}
      />
      <h2>Current Members</h2>
      <h2>Past Members</h2>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "content/covers/santaBarbara.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1216) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }

    higgins: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(people)/higgins.md$/"}}) {
      nodes {
        frontmatter {
          email
          github
          linkedin
          name
          position
          twitter
          website
        }
        internal {
          content
        }
      }
    }
  }
`