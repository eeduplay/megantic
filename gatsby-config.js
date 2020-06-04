module.exports = {
  siteMetadata: {
    title: `Interstellar Flight`,
    subtitle: `Experimental Research Group`,
    description: `McGill research group dedicated to the pursuit of interstellar travel`,
    author: `Emmanuel Duplay, Zhuo Fan Bao, Abtin Ameri`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/utils/cms.js`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
