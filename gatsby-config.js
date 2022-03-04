/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `new`,
    siteUrl: `https://www.yourdomain.tld`
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
