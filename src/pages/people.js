import React from "react"
import { Link, graphql } from "gatsby"
import styles from "../components/styles/people.module.css"
import Layout from "../components/layout"

import SocialLinks from "../components/social"
import Cover from "../components/cover"

import BackgroundImage from "gatsby-background-image"
import coverStyle from "../components/styles/cover.module.css"

function User ( props ) {
  var picpath = '../content/' + props.avatar

  return(
  <div className={styles.user}>
    <img src={picpath} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <div className={styles.social}>
        <SocialLinks email={props.email} website={props.website} git={props.git} linkedin={props.linkedin} twitter={props.twitter}/>
      </div>
      <h2 className={styles.username}>{props.username}</h2>
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: props.excerpt}}></div>
    </div>
  </div>
  )
}

export default function People(props) {
  return (
    <Layout current={props.location.pathname}>
      <BackgroundImage fluid={props.data.file.childImageSharp.fluid} className={coverStyle.cover} preserveStackingContext={true}>
        <Cover legend="Santa Barbara, 2019" />
      </BackgroundImage>
      <main className={coverStyle.offsetMain}>
        <h1>People</h1>
          <User
            username={props.data.higgins.nodes[0].frontmatter.name}
            avatar={props.data.higgins.nodes[0].frontmatter.pic.relativePath}
            title={props.data.higgins.nodes[0].frontmatter.position}
            email={props.data.higgins.nodes[0].frontmatter.email}
            website={props.data.higgins.nodes[0].frontmatter.website}
            twitter={props.data.higgins.nodes[0].frontmatter.twitter}
            git={props.data.higgins.nodes[0].frontmatter.git}
            linkedin={props.data.higgins.nodes[0].frontmatter.linkedin}
            excerpt={props.data.higgins.nodes[0].html}
          />
          <h2>Group Members</h2>

          {props.data.current.nodes.map(nodes => (
            <User
              username={nodes.frontmatter.name}
              avatar={nodes.frontmatter.pic.relativePath}
              title={nodes.frontmatter.position}
              email={nodes.frontmatter.email}
              website={nodes.frontmatter.website}
              twitter={nodes.frontmatter.twitter}
              git={nodes.frontmatter.git}
              linkedin={nodes.frontmatter.linkedin}
              excerpt={nodes.html}
            />
          ))}

          <h2>Past Members</h2>

          {props.data.past.nodes.map(nodes => (
            <User
              username={nodes.frontmatter.name}
              avatar={nodes.frontmatter.pic.relativePath}
              title={nodes.frontmatter.position}
              email={nodes.frontmatter.email}
              website={nodes.frontmatter.website}
              twitter={nodes.frontmatter.twitter}
              git={nodes.frontmatter.git}
              linkedin={nodes.frontmatter.linkedin}
              excerpt={nodes.html}
            />
          ))}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "content/covers/santaBarbara.jpg"}) {
        ...CoverQuery
    }

    higgins: allMarkdownRemark(filter: {frontmatter: {status: {eq: "permanent"}}}) {
      nodes {
        frontmatter {
          email
          git
          linkedin
          name
          position
          twitter
          website
          pic {
            relativePath
          }
        }
        html
      }
    }

    current: allMarkdownRemark(filter: {frontmatter: {status: {eq: "current"}}}, sort: {order: ASC, fields: frontmatter___name}) {
      nodes {
        frontmatter {
          email
          git
          linkedin
          name
          position
          twitter
          website
          pic {
            relativePath
          }
        }
        html
      }
    }

    past: allMarkdownRemark(filter: {frontmatter: {status: {eq: "past"}}}, sort: {order: ASC, fields: frontmatter___name}) {
      nodes {
        frontmatter {
          email
          git
          linkedin
          name
          position
          twitter
          website
          pic {
            relativePath
          }
        }
        html
      }
    }
  }
`