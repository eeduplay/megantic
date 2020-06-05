import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Cover from "../components/cover"

import BackgroundImage from "gatsby-background-image"
import coverStyle from "../components/styles/cover.module.css"

export default function Contact(props) {
  return (
    <Layout current={props.location.pathname}>
      <BackgroundImage fluid={props.data.file.childImageSharp.fluid} className={coverStyle.cover} preserveStackingContext={true}>
        <Cover legend="McGill Campus and Montreal, March 2019" />
      </BackgroundImage>
      <main className={coverStyle.offsetMain}>
        <h1>Contact Us</h1>
        <p><a href="mailto:andrew.higgins@mcgill.ca">andrew.higgins@mcgill.ca</a></p>
        <p>Macdonald Engineering Building, Room 270<br/>
          817 Sherbrooke Street West<br/>
          Montreal, Quebec H3A 0C3<br/>
          Tel.: 514-398-6296
        </p>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "content/covers/montreal.jpg"}) {
        ...CoverQuery
    }
  }
`