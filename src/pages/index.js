import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home(props) {
  return (
    <Layout current={props.location.pathname}>
      <main>
        <a className="twitter-timeline" data-lang="en" data-width="300" data-height="600" data-theme="dark" href="https://twitter.com/A_J_Higgins?ref_src=twsrc%5Etfw">Tweets by A_J_Higgins</a>
        <h2>Per Aspera Ad Astra</h2>
        <p>We live during an ongoing revolution in the discovery of exoplanets–planets beyond our solar system–leaving many wondering what these worlds look like. Current propulsion technologies, such as chemical rockets and electric propulsion, are impractical to reach even the nearest exoplanets, and the size of a telescope that could image an exoplanet would be unrealistically large, exceeding the size of the earth. These two factors have stimulated interest in propulsion methods that have the potential to reach the stars.</p>
        <p><b>Our mission</b> is to contribute to this international effort by designing, analyzing, and lab-testing alternative flight methods capable of achieving a significant fraction of the speed of light. Our group has a particular interest in directed energy propulsion like lightsails, intermediate steps toward this technology–such as laser-thermal propulsion–that would open our solar system, and propulsion methods that would exploit sources of energy freely available in space. Additionally, we are committed to engaging future students of science and engineering with these emerging technologies and connecting them to the international community of interstellar researchers, generating a stream of new minds aligned to realizing interstellar flight in this century.</p>
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