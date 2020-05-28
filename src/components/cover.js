import React from "react"

import coverStyle from "./styles/cover.module.css"

export default function Cover(props){
    return(
        <div className={coverStyle.coverContainer}>
            <div className={coverStyle.titleContainer}>
                <p className={coverStyle.legend}>{props.legend}</p>
                {/* <h1 className={coverStyle.title}>{props.title}</h1> */}
            </div>
        </div>
    )
}

export const coverQueryFragment = graphql`
    fragment CoverQuery on File{
        childImageSharp {
            fluid(maxWidth: 1216) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
`