import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Cover from "../components/cover"

import BackgroundImage from "gatsby-background-image"
import coverStyle from "../components/styles/cover.module.css"

export default function People(props) {
  return (
    <Layout current={props.location.pathname}>
      <BackgroundImage fluid={props.data.file.childImageSharp.fluid} className={coverStyle.cover} preserveStackingContext={true}>
        <Cover legend="Santa Barbara, 2019" />
      </BackgroundImage>
      <h1>People</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi augue, euismod porta dapibus ut, egestas sodales eros.</p>
      <p>Vivamus ullamcorper mi at leo tincidunt, vel convallis dui rutrum. Nam nec posuere nulla. Ut vel molestie leo. Suspendisse vel urna quis tellus ultricies tristique. Phasellus eget orci tristique nibh finibus bibendum. Praesent sit amet elementum libero. </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "content/covers/santaBarbara.jpg"}) {
        ...CoverQuery
    }
  }
`