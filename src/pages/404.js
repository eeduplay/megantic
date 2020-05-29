import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import spaceSign from "../images/styling/404.svg"

function randInt(max){
  return Math.floor(Math.random() * Math.floor(max)) // Shamelessly stolen from MDN
}

export default function NotFound() {
  var flavorText = null
  var lines = [
    "Looks like you got lost in the interstellar medium.",
    "- Our position is correct, except... no Alderaan!<br />- What do you mean? Where is it?<br />- Thats what I\'m trying to tell you, kid. It ain\'t there. It\'s been totally blown away.",
    "- I hate to say it, but it looks like the system you\'re searching for doesn\'t exist.<br />- That\'s impossible... perhaps the archives are incomplete.",
  ]

  flavorText = lines[randInt(lines.length)]

  return (
    <Layout>
      <main>
        <img src={spaceSign} alt="" style={{ width: `70%`, height: `auto`, display: `block`, margin: `auto` }}/>
        <h2>Whoops!</h2>
        <h4>404: Page not found</h4>
        <p dangerouslySetInnerHTML={ { __html: flavorText }}></p>
        <p><Link to="/">Back to the launchpad</Link></p>
      </main>
    </Layout>
  )
}