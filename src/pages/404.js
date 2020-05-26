import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function NotFound() {
  return (
    <Layout>
      <h2>Woops!</h2>
      <h4>404: Page not found</h4>
      <p>Looks like you got lost in the interstellar medium.</p>
      <p><Link to="/">Back to the launchpad</Link></p>
    </Layout>
  )
}