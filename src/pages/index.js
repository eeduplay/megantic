import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home(props) {
  return (
    <Layout current={props.location.pathname}>
      <main>
        <h2>Per Aspera Ad Astra</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi augue, euismod porta dapibus ut, egestas sodales eros.</p>
        <p>Vivamus ullamcorper mi at leo tincidunt, vel convallis dui rutrum. Nam nec posuere nulla. Ut vel molestie leo. Suspendisse vel urna quis tellus ultricies tristique. Phasellus eget orci tristique nibh finibus bibendum. Praesent sit amet elementum libero. </p>
        <a className="twitter-timeline" data-lang="en" data-width="300" data-height="600" data-theme="dark" href="https://twitter.com/A_J_Higgins?ref_src=twsrc%5Etfw">Tweets by A_J_Higgins</a>
        {/* <h2>Latest Posts</h2>
        {props.data.allMarkdownRemark.nodes.slice(0,2).map(nodes => (
          <div key={nodes.id}>
            <h3>
              <Link
                to={nodes.fields.slug}
              >
                {nodes.frontmatter.title}
              </Link>
            </h3>
            <h4>{nodes.frontmatter.author} - {nodes.parent.modifiedTime}</h4>
            <p>{nodes.excerpt}</p>
          </div>
        ))} */}
      </main>
    </Layout>
  )
}

// export const query = graphql`
//   query{
//     allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {order: DESC, fields: frontmatter___date}) {
//       nodes {
//         frontmatter {
//           title
//           author
//         }
//         fields {
//           slug
//         }
//         excerpt
//         id
//         parent {
//           ... on File {
//             modifiedTime(formatString: "dddd, MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `