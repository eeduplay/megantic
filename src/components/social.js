import React from "react"

import socialStyles from "./styles/social.module.css"

export default function SocialLinks ( props ) {

    const isEmail = Boolean(props.email);
    const isWebsite = Boolean(props.website);
    const isTwitter = Boolean(props.twitter);
    const isLinkedin = Boolean(props.linkedin);
    const isGit = Boolean(props.git);
    return (
        <div className={socialStyles.container}>
            {isEmail && <a href={"mailto:" + props.email} className={[socialStyles.email, socialStyles.button].join(" ")}></a>}
            {isWebsite && <a href={props.website} className={[socialStyles.website, socialStyles.button].join(" ")}></a>}
            {isLinkedin && <a href={props.linkedin} className={[socialStyles.linkedin, socialStyles.button].join(" ")}></a>}
            {isGit && <a href={props.git} className={[socialStyles.git, socialStyles.button].join(" ")}></a>}
            {isTwitter && <a href={props.twitter} className={[socialStyles.twitter, socialStyles.button].join(" ")}></a>}
        </div>
    )
}