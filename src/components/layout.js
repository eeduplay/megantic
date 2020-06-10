import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import logo from "../images/styling/logo.png"
import mcgill from "../images/styling/mcgillLogo.svg"

import headerStyle from "./styles/header.module.css"
import footerStyle from "./styles/footer.module.css"
import layoutStyle from "./styles/layout.module.css"
import navbarStyle from "./styles/navbar.module.css"

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

export function NavLink(props){ // Determines whether a navigation link points to the current page
    if (props.path === props.current) {
        return(<li><Link to={props.path} className={navbarStyle.currentPage}>{props.name}</Link></li>)
    }
    else{
        return(<li><Link to={props.path}>{props.name}</Link></li>)
    }
}

const Navbar = props => (
    <nav className={navbarStyle.navbar}>
        <ul className={navbarStyle.links}>
            <NavLink path="/" current={props.current} name="Home"/>
            <NavLink path="/blog/" current={props.current} name="Blog"/>
            <NavLink path="/projects/" current={props.current} name="Projects"/>
            <NavLink path="/publications/" current={props.current} name="Publications"/>
            <NavLink path="/people/" current={props.current} name="People"/>
            <NavLink path="/gallery/" current={props.current} name="Gallery"/>
            <NavLink path="/contact/" current={props.current} name="Contact"/>
        </ul>
    </nav>
)

const Footer = props => (
    <footer className={footerStyle.footer}>
        <p>Unless otherwise stated, all media presented is licensed under <a href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="noreferrer">CC BY 4.0</a></p>
        <p>Latest build on {props.buildDate}</p>
    </footer>
)

export default function Layout( props ){
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

    // console.log(firstChild)
    return (
        <div className={layoutStyle.container}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{(props.pageTitle ? props.pageTitle + ' - ' : '')}McGill Interstellar Flight</title>
            </Helmet>
            <Header title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle} />
            <Navbar current={props.current}/>
                {props.children}
            <Footer buildDate={data.siteBuildMetadata.buildTime} />
        </div>
    )
}

