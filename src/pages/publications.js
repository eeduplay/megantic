import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Cover from "../components/cover"

import BackgroundImage from "gatsby-background-image"
import coverStyle from "../components/styles/cover.module.css"

export default function Publications(props) {
  return (
    <Layout current={props.location.pathname}>
      <BackgroundImage fluid={props.data.file.childImageSharp.fluid} className={coverStyle.cover} preserveStackingContext={true}>
        <Cover legend="Washington DC, IAC 2019" />
      </BackgroundImage>
      <main className={coverStyle.offsetMain}>
        <h1>Publications</h1>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    journalPubs: allPublicationsYaml(filter: {type: {eq: "journal"}}, sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          authors
          date(formatString: "MMM YYYY")
          doi
          publication
          type
          file {
            relativePath
          }
        }
      }
    }
    confPubs: allPublicationsYaml(filter: {type: {eq: "conference"}}, sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          authors
          date(formatString: "MMM YYYY")
          doi
          publication
          type
          file {
            relativePath
          }
        }
      }
    }
    otherPubs: allPublicationsYaml(filter: {type: {eq: "other"}}, sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          authors
          date(formatString: "MMM YYYY")
          doi
          publication
          type
          file {
            relativePath
          }
        }
      }
    }
    file(relativePath: {eq: "content/covers/hansenIAC.jpg"}) {
      ...CoverQuery
    }
  }
`