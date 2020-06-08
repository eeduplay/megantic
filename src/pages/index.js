import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home(props) {
  return (
    <Layout current={props.location.pathname}>
      <main>
        <h2>Per Aspera Ad Astra</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi augue, euismod porta dapibus ut, egestas sodales eros.</p>
        <p>Vivamus ullamcorper mi at leo tincidunt, vel convallis dui rutrum. Nam nec posuere nulla. Ut vel molestie leo. Suspendisse vel urna quis tellus ultricies tristique. Phasellus eget orci tristique nibh finibus bibendum. Praesent sit amet elementum libero. </p>
        <a className="twitter-timeline" data-lang="en" data-width="300" data-height="600" data-theme="dark" href="https://twitter.com/A_J_Higgins?ref_src=twsrc%5Etfw">Tweets by A_J_Higgins</a>
        <h2>Latest Posts</h2>
        <h3>First Post!</h3>
        <h4>Monday May 5, 2020</h4>
        <p>Lorem ipsum dolor sit amet, <a href="https://google.com">this</a> is a link.</p>
      </main>
    </Layout>
  )
}