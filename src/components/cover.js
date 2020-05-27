import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import coverStyle from "./styles/cover.module.css"

export default function Cover(props){
    const data = useStaticQuery(
        graphql`
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
    )

    return(
        <div className={coverStyle.cover}>
            <p className={coverStyle.legend}>{props.legend}</p>
            <Img fluid={data.file.childImageSharp.fluid} />
            <h1 className={coverStyle.title}>{props.title}</h1>
        </div>
    )
}