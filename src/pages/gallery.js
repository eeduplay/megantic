import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Gallery(props) {
  return (
    <Layout current={props.location.pathname} pageTitle="Gallery">
      {/* Place some content inside Layout */}
    </Layout>
  )
}