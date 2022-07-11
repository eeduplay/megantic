import React from "react"
import Layout from "../components/layout"

export default function Websites(props) {
  return (
    <Layout current={props.location.pathname}>
      <main>
        <h2>Other Websites</h2>
        <p>https://irg.space/</p>
        <p>https://www.centauri-dreams.org/</p>
        <p>https://i4is.org/</p>
        <p>https://tauzero.aero/</p>
        <p>https://www.deepspace.ucsb.edu/projects/starlight</p>
      </main>
    </Layout>
  )
}