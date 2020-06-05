import React from "react"
import { Link, graphql } from "gatsby"
import styles from "../components/styles/people.module.css"
import Layout from "../components/layout"
import SocialLinks from "../components/social"

import BackgroundImage from "gatsby-background-image"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <div className={styles.social}>
        <SocialLinks email={props.email} website={props.website} git={props.git} linkedin={props.linkedin} twitter={props.twitter}/>
      </div>
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
        email={props.data.higgins.nodes[0].frontmatter.email}
        website={props.data.higgins.nodes[0].frontmatter.website}
        twitter={props.data.higgins.nodes[0].frontmatter.twitter}
        git={props.data.higgins.nodes[0].frontmatter.git}
        linkedin={props.data.higgins.nodes[0].frontmatter.linkedin}
        excerpt={props.data.higgins.nodes[0].internal.content}
      />
      <h2>Group Members</h2>
      
      {props.data.current.nodes.map(nodes => (
        <User
          username={nodes.frontmatter.name}
          avatar={nodes.frontmatter.pic}
          title={nodes.frontmatter.position}
          email={nodes.frontmatter.email}
          website={nodes.frontmatter.website}
          twitter={nodes.frontmatter.twitter}
          git={nodes.frontmatter.git}
          linkedin={nodes.frontmatter.linkedin}
          excerpt={nodes.internal.content}
        />
      ))}

      <h2>Past Members</h2>

      {props.data.past.nodes.map(nodes => (
        <User
        username={nodes.frontmatter.name}
        avatar={nodes.frontmatter.pic}
        title={nodes.frontmatter.position}
        email={nodes.frontmatter.email}
        website={nodes.frontmatter.website}
        twitter={nodes.frontmatter.twitter}
        git={nodes.frontmatter.git}
        linkedin={nodes.frontmatter.linkedin}
        excerpt={nodes.internal.content}
      />
      ))}

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
          git
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

    current: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(current)/"}}) {
      nodes {
        frontmatter {
          email
          git
          linkedin
          name
          position
          twitter
          website
          pic
        }
        internal {
          content
        }
      }
    }

    past: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(past)/"}}) {
      nodes {
        frontmatter {
          email
          git
          linkedin
          name
          position
          twitter
          website
          pic
        }
        internal {
          content
        }
      }
    }
  }
`