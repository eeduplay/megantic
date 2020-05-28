import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Projects(props) {
  return (
    <Layout current={props.location.pathname}>
      <h2>Projects</h2>
    </Layout>
  )
}