import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import spaceSign from "../images/styling/404.svg"

export default function NotFound() {
  return (
    <Layout>
      <img src={spaceSign} alt="" style={{ width: `70%`, height: `auto`, display: `block`, margin: `auto` }}/>
      <h2>Whoops!</h2>
      <h4>404: Page not found</h4>
      <p>Looks like you got lost in the interstellar medium.</p>
      <p><Link to="/">Back to the launchpad</Link></p>
    </Layout>
  )
}