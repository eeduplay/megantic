import React from "react"
import { Link, graphql } from "gatsby"
import styles from "./people.module.css"
import Layout from "../components/layout"

import BackgroundImage from "gatsby-background-image"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function People(props) {
  return (
    <Layout current={props.location.pathname}>
      {/* <Cover title="Test Cover" legend="yo mama" /> */}
      <BackgroundImage fluid={props.data.file.childImageSharp.fluid}>
        <p>Test legend</p>
        <h1>Test Cover</h1>
      </BackgroundImage>
      <User
        username="Prof. Andrew Higgins"
        avatar="https://pbs.twimg.com/profile_images/1040042180826542082/pxjqhJb7_400x400.jpg"
        title="Principal Investigator"
        excerpt="Yes"
      />
      <User
        username="Zhuo Fan Bao"
        avatar="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/95902149_3489571651057606_7857797651926876160_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=_915FEKlyJEAX_Rycxb&_nc_ht=scontent-yyz1-1.xx&oh=05c87ab8a74e2b956e6acc98e9a850cc&oe=5EF5A59B"
        title="Nobody"
        excerpt="No"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "content/covers/santaBarbara.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1216) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
  }
`