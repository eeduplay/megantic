import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function PageName(props) {
  return (
    <Layout current={props.location.pathname}>
      {/* Full-width content (e.g. cover photo) goes here */}
      <main>
        {/* Partial width content goes here */}
        <StaticImage 
          src="../images/content/symposiumPoster.png"
          alt="8th Interstellar Symposium Poster"
          layout="fullWidth"
          placeholder="blurred"
        />
      </main>
    </Layout>
  )
}