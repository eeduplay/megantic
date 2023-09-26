import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Cover from "../components/cover"

import BackgroundImage from "gatsby-background-image"
import * as coverStyle from "../components/styles/cover.module.css"

export default function Contact(props) {
  return (
    <Layout current={props.location.pathname} pageTitle="Contact Us">
      {/* <BackgroundImage fluid={props.data.file.childImageSharp.fluid} className={coverStyle.cover} preserveStackingContext={true}>
        <Cover legend="McGill Campus and Montreal, March 2019" />
      </BackgroundImage> */}
      <main>
        <h1>Contact Us</h1>
        <p><a href="mailto:andrew.higgins@mcgill.ca">andrew.higgins@mcgill.ca</a></p>
        <p>Macdonald Engineering Building, Room 270<br/>
          817 Sherbrooke Street West<br/>
          Montreal, Quebec H3A 0C3<br/>
          Tel.: 514-398-6296
        </p>
        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2130030119993!2d-73.57902052464607!3d45.50579063066404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a4797e0a55f%3A0xfa75df1d09b19ee8!2sMacdonald%20Engineering%20Building!5e0!3m2!1sen!2sca!4v1687911713137!5m2!1sen!2sca" width="400" height="300" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
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