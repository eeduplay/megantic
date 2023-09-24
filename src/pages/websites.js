import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Websites(props) {
  return (
    <Layout current={props.location.pathname}>
      <main>
        <h2>Other Websites</h2>

        <p>Centauri Dreams</p>
        <a href="https://www.centauri-dreams.org/" target="_blank" rel="noreferrer"> 
        <StaticImage 
        src="../images/content/other-website-logo/centauri-dreams-logo.jpg" 
        width="400" height="150"
        alt="Centauri Dreams"
        />
        </a>
  
        <p>Interstellar Research Group</p>
        <a href="https://irg.space/" target="_blank" rel="noreferrer"> 
        <StaticImage 
        src="../images/content/other-website-logo/IRG-space-logo.jpg" 
        width="200" height="200"
        alt="IRG Space"
        />
        </a>

        <p>Initiative for Interstellar Studies</p>
        <a href="https://i4is.org/" target="_blank" rel="noreferrer"> 
        <StaticImage 
        src="../images/content/other-website-logo/I4IS-logo.jpg" 
        width="200" height="200"
        alt="I4IS"
        />
        </a>

        <p>The Tau Zero Foundation</p>
        <a href="https://tauzero.aero/" target="_blank" rel="noreferrer"> 
        <StaticImage 
        src="../images/content/other-website-logo/TauZero-foundation-logo.jpg" 
        width="200" 
        alt="TauZero"
        />
        </a>

        <p>UCSB Experimental Cosmology Group</p>
        <a href="https://www.deepspace.ucsb.edu/projects/starlight/" target="_blank" rel="noreferrer"> 
        <StaticImage 
        src="../images/content/other-website-logo/UCSB-logo.jpg" 
        width="200" height="200"
        alt="USCB"
        />
        </a>
      </main>
    </Layout>
  )
}