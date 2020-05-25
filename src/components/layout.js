import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }){
    return (
        <div style={{ width: `1280px`, margin: `0 auto`, backgroundColor: `#191D2B` }}>
            {children}
        </div>
    )
}