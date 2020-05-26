import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function PageName(props) {
  return (
    <Layout current={props.location.pathname}>
      {/* Place some content inside Layout */}
    </Layout>
  )
}