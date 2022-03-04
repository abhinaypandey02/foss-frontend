/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `Leaderboard - FOSS Weekend`,
    description:"Leaderboard for the FOSS Weekend, organised by Equinox, IIIT Lucknow",
    siteUrl: `https://zen-sinoussi-ff9007.netlify.app/`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap","gatsby-plugin-offline","gatsby-plugin-preact"
    ,
    "gatsby-plugin-sharp", "gatsby-transformer-sharp"
    ,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};
