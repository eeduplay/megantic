import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Cover from "../components/cover"

import BackgroundImage from "gatsby-background-image"
import coverStyle from "../components/styles/cover.module.css"

function invertAuthor(flname){
  itemizedNames = flname.split(' ')
  var output = itemizedNames.pop() + ','
  itemizedNames.forEach(item => output += ' ' + item)

  return output
}

function chicagoAuthors(authorList){
  var authorString = ''
  var etal = 'et al'

  if (authorList.length > 10){
    authorList.splice(10)
    authorList.push(etal)
  }

  var firstAuthor = authorList.splice(0,1)[0]
  authorString = invertAuthor(firstAuthor)

  authorList.forEach(function(item, index){
    if (index === authorList.length - 1){
      if (item === etal){
        authorString += ' ' + item
      }
      else{
        authorString += ' and ' + item
      }
    }
    else{
      authorString += ', ' + item
    }
  })

  return authorString + '.'
}

export function Paper(props){
  return (
    <div className={pubStyle.container}>
      <a href={props.filePath} className={pubStyle.download} target="_blank"></a>
      <p>{chicagoAuthors(props.authors)} <span className={pubStyle.paperTitle}>"{props.title}."</span> <em>{props.pubName}</em> ({props.date}). <a href={props.doi}>{props.doi}</a>.</p>
    </div>
  )
}

export default function Publications(props) {
  return (
    <Layout current={props.location.pathname}>
      <BackgroundImage fluid={props.data.file.childImageSharp.fluid} className={coverStyle.cover} preserveStackingContext={true}>
        <Cover legend="Washington DC, IAC 2019" />
      </BackgroundImage>
      <main className={coverStyle.offsetMain}>
        <h1>Publications</h1>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    journalPubs: allPublicationsYaml(filter: {type: {eq: "journal"}}, sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          authors
          date(formatString: "MMM YYYY")
          doi
          publication
          type
          file {
            relativePath
          }
        }
      }
    }
    confPubs: allPublicationsYaml(filter: {type: {eq: "conference"}}, sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          authors
          date(formatString: "MMM YYYY")
          doi
          publication
          type
          file {
            relativePath
          }
        }
      }
    }
    otherPubs: allPublicationsYaml(filter: {type: {eq: "other"}}, sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          authors
          date(formatString: "MMM YYYY")
          doi
          publication
          type
          file {
            relativePath
          }
        }
      }
    }
    file(relativePath: {eq: "content/covers/hansenIAC.jpg"}) {
      ...CoverQuery
    }
  }
`