module.exports = {
  siteMetadata: {
    title: `Interstellar Flight`,
    subtitle: `Experimental Research Group`,
    description: `McGill research group dedicated to the pursuit of interstellar travel`,
    author: `Emmanuel Duplay, Zhuo Fan Bao, Abtin Ameri`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
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
        path: `${__dirname}/static/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "McGill Interstellar Flight Experimental Research Group",
        short_name: "Interstellar Flight",
        start_url: "/",
        icon: `src/images/styling/favicon.png`,
        background_color: `#191D2B`,
        theme_color: `#ED1B2F`,
        display: `browser`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
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
