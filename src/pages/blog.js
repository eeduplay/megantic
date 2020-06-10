import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Blog(props) {
  return (
    <Layout current={props.location.pathname} pageTitle="Blog">
      <main>
        <h2>Blog</h2>
      </main>
    </Layout>
  )
}