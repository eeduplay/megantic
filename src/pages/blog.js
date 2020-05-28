import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Blog(props) {
  return (
    <Layout current={props.location.pathname}>
      <h2>Blog</h2>
    </Layout>
  )
}