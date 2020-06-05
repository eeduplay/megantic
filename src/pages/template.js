import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"

export default function PageName(props) {
  return (
    <Layout current={props.location.pathname}>
      {/* Full-width content (e.g. cover photo) goes here */}
      <main>
        {/* Partial width content goes here */}
      </main>
    </Layout>
  )
}