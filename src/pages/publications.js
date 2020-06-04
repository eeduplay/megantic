import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Cover from "../components/cover"

import BackgroundImage from "gatsby-background-image"
import coverStyle from "../components/styles/cover.module.css"
import pubStyle from "../components/styles/paper.module.css"

function invertAuthor(flname){
  var itemizedNames = flname.split(' ')
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
  var doiElement
  if (!props.doi){
    doiElement = null
  }
  else {
    doiElement = (<span><a href={props.doi}>{props.doi}</a>.</span>)
  }
  return (
    <div className={pubStyle.container}>
      <a href={props.filePath} className={pubStyle.download} target="_blank" rel="noreferrer" title="Download paper"></a>
      <p>{chicagoAuthors(props.authors)} <span className={pubStyle.paperTitle}>"{props.title}."</span> <em>{props.pubName}</em> ({props.date}). {doiElement}</p>
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
        <p>Our research group strives to provide all our members, regardless of graduate level, opportunities to publish their work on interstellar flight topics. All of our publications are listed here and available for download.</p>
        <h2>Journal Articles</h2>
        <Paper title="Rapid Transit Missions in the Solar System with Laser-Thermal Propulsion" authors={['Andrew J Higgins', 'Zhuo Fan Bao', 'Emmanuel Duplay']} pubName="Journal of Space Engineering" date="Aug 2020" doi="https://doi.org/10.1086/691233" filePath="../../content/publications/baoposter.pdf" />
        <Paper 
          title="A Review of Interstellar Flight Research"
          authors={['Andrew J Higgins', 'Zhuo Fan Bao', 'Emmanuel Duplay', 'John Kokkalis', 'Monika Azmanska', 'Alp Tanriover', 'Hansen Liu', 'Charles Whitman', 'Dan Cornelius-Savu', 'Abdul Rehman-Khan', 'Navneet Kaur']}
          pubName="Astronautica Ultima"
          date="Feb 2021"
          doi="https://doi.org/10.1086/13371337"
          filePath="../../content/publications/baoposter.pdf"
        />
        <h2>Conference Papers</h2>
        <Paper 
          title="Please Help Me They Trapped Me in the Shocktube and Won't Let Me Leave to Grad School"
          authors={['Abtin Ameri']}
          pubName="AIAA Propulsion and Energy Conference"
          date="Aug 2019"
          
          filePath="../../content/publications/baoposter.pdf"
        />
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