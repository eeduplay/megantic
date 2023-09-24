import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Cover from "../components/cover"

import BackgroundImage from "gatsby-background-image"
import * as coverStyle from "../components/styles/cover.module.css"
import * as pubStyle from "../components/styles/paper.module.css"

function invertAuthor(flname){
  var itemizedNames = flname.split(' ')
  var firstName = itemizedNames.shift()
  var output = itemizedNames.join(' ')
  output += ', ' + firstName

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

function Paper(props){
  var doiElement
  if (!props.doi){
    doiElement = null
  }
  else {
    doiElement = (<span><a href={props.doi} target="_blank" rel="noreferrer">{props.doi}</a>.</span>)
  }
  return (
    <div className={pubStyle.container}>
      <a href={props.filePath} className={pubStyle.download} target="_blank" rel="noreferrer" title="Download paper" download></a>
      <p>{chicagoAuthors(props.authors.slice())} <span className={pubStyle.paperTitle}>"{props.title}."</span> <em>{props.pubName}</em> ({props.date}). {doiElement}</p>
    </div>
  )
}

export default function Publications(props) {
  return (
    <Layout current={props.location.pathname} pageTitle="Publications">
      {/* <BackgroundImage fluid={props.data.file.childImageSharp.fluid} className={coverStyle.cover} preserveStackingContext={true}>
        <Cover legend="Washington DC, IAC 2019" />
      </BackgroundImage> */}
      <main>
        <h1>Publications</h1>
        <p>Our research group strives to provide all our members, regardless of graduate level, with opportunities to publish their work on interstellar flight topics. All of our publications are listed here and available for download.</p>
        <h2>Journal Articles</h2>
        {props.data.journalPubs.edges.map(({ node }, index) => (
          <Paper 
            key={index}
            title={node.title}
            authors={node.authors}
            pubName={node.publication}
            doi={node.doi}
            date={node.date}
            filePath={'../content/' + node.file.relativePath}
          />
        ))}
        <h2>Conference Papers</h2>
        {props.data.confPubs.edges.map(({ node }, index) => (
          <Paper 
            key={index}
            title={node.title}
            authors={node.authors}
            pubName={node.publication}
            doi={node.doi}
            date={node.date}
            filePath={'../content/' + node.file.relativePath}
          />
        ))}
        <h2>Other Publications</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ABLnJ31AKkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VrJybNgeU-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uaK5e4pAAuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/*
        {props.data.otherPubs.edges.map(({ node }, index) => (
          <Paper 
            key={index}
            title={node.title}
            authors={node.authors}
            pubName={node.publication}
            doi={node.doi}
            date={node.date}
            filePath={'../content/' + node.file.relativePath}
          />
        ))}
        */}
      </main>
    </Layout>
  )
}

export const paperDataQuery = graphql`
  fragment PaperDataQuery on PublicationsYamlEdge {
    node {
      title
      authors
      date(formatString: "MMM YYYY")
      doi
      publication
      file {
        relativePath
      }
    }
  }
`

export const query = graphql`
  query {
    journalPubs: allPublicationsYaml(filter: {type: {eq: "journal"}}, sort: {fields: date, order: DESC}) {
      edges { ...PaperDataQuery }
    }
    confPubs: allPublicationsYaml(filter: {type: {eq: "conference"}}, sort: {fields: date, order: DESC}) {
      edges { ...PaperDataQuery }
    }
    otherPubs: allPublicationsYaml(filter: {type: {eq: "other"}}, sort: {fields: date, order: DESC}) {
      edges { ...PaperDataQuery }
    }
    file(relativePath: {eq: "content/covers/hansenIAC.jpg"}) {
      ...CoverQuery
    }
  }
`