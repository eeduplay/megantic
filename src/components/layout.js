import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../images/styling/logo.png"
import mcgill from "../images/styling/mcgillLogo.svg"

import headerStyle from "./styles/header.module.css"
import layoutStyle from "./styles/layout.module.css"

const Header = props => (
    <header>
        <img src={logo} alt="Logo" height="128" className={headerStyle.logo}/>
        <div className={headerStyle.titleblock}>
            <a href="https://mcgill.ca" className={headerStyle.mcgill} target="_blank">
                <img src={mcgill} alt="McGill Logo" height="20" />
            </a>
            <Link to="/"><h1>{props.title}</h1></Link>
            <h3>{props.subtitle}</h3>
        </div>
    </header>
)

export default function Layout({ children }){
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        subtitle
                    }
                }
            }
        `
    )
    return (
        <div className={layoutStyle.container}>
            <Header title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle} />
            {children}
        </div>
    )
}

