import { graphql } from "gatsby"
import React from "react"

import * as twitterStyle from "./styles/twitter.module.css"

function Tweet(props){
    return(
        <div className={twitterStyle.tweet}>
            <p className={twitterStyle.author}>{props.authorName}</p>
            <h5>@{props.authorUsername}</h5>
            <p>{props.body}</p>
            <h5 style={{textAlign: "right"}}>{props.date}</h5>
        </div>
    )
}

export default function Twitter(props){
    return (
        <div className={twitterStyle.container}>
            <h3>Tweets</h3>
            <Tweet 
                authorName="McGill Interstellar Flight Research Group"
                authorUsername="McGill_AdAstra"
                body="Successful recovery! Next step: Let's see what was recorded on those SD cards!"
                date="2022-07-17 13:30"
                />
        </div>
    )
}

const twitterQuery = graphql`
    query {
        allTwitterLatestTweets {
            edges {
                node {
                    text
                    created_at
                    user {
                        name
                        screen_name
                        profile_image_url_https
                    }
                }
            }
        }
    }
`