import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../images/styling/logo.png"
import mcgill from "../images/styling/mcgillLogo.svg"

import headerStyle from "./styles/header.module.css"
import footerStyle from "./styles/footer.module.css"
import layoutStyle from "./styles/layout.module.css"

const Header = props => (
    <header>
        <img src={logo} alt="Logo" height="128" className={headerStyle.logo}/>
        <div className={headerStyle.titleblock}>
            <a href="https://mcgill.ca" className={headerStyle.mcgill} target="_blank" rel="noreferrer">
                <img src={mcgill} alt="McGill Logo" height="20" />
            </a>
            <Link to="/"><h1>{props.title}</h1></Link>
            <h3>{props.subtitle}</h3>
        </div>
    </header>
)

const Footer = props => (
    <footer className={footerStyle.footer}>
        <p>Unless otherwise stated, all media presented is licensed under <a href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="noreferrer">CC BY 4.0</a></p>
        <p>Latest build on {props.buildDate}</p>
    </footer>
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
                siteBuildMetadata {
                    buildTime(formatString: "MMMM DD, YYYY")
                }
            }
        `
    )
    console.log(data.siteBuildMetadata.buildTime)
    return (
        <div className={layoutStyle.container}>
            <Header title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle} />
            {children}
            <Footer buildDate={data.siteBuildMetadata.buildTime} />
        </div>
    )
}

