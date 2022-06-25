import React from "react"

import * as socialStyles from "./styles/social.module.css"

export default function SocialLinks ( props ) {

    const isEmail = Boolean(props.email);
    const isWebsite = Boolean(props.website);
    const isTwitter = Boolean(props.twitter);
    const isLinkedin = Boolean(props.linkedin);
    const isGit = Boolean(props.git);
    return (
        <div className={socialStyles.container}>
            {isEmail && <a target="_blank" rel="noreferrer" href={"mailto:" + props.email} className={[socialStyles.email, socialStyles.button].join(" ")}></a>}
            {isWebsite && <a target="_blank" rel="noreferrer" href={props.website} className={[socialStyles.website, socialStyles.button].join(" ")}></a>}
            {isLinkedin && <a target="_blank" rel="noreferrer" href={props.linkedin} className={[socialStyles.linkedin, socialStyles.button].join(" ")}></a>}
            {isGit && <a target="_blank" rel="noreferrer" href={props.git} className={[socialStyles.git, socialStyles.button].join(" ")}></a>}
            {isTwitter && <a target="_blank" rel="noreferrer" href={props.twitter} className={[socialStyles.twitter, socialStyles.button].join(" ")}></a>}
        </div>
    )
}