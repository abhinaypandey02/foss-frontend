/** @type {import('gatsby').GatsbyConfig} */

const siteMeta={
  title:'Leaderboard - FOSS Weekend',
  siteUrl:'https://zen-sinoussi-ff9007.netlify.app/',
  description:"Leaderboard for the FOSS Weekend, organised by Equinox, IIIT Lucknow",
  shortTitle:"Leaderboard"
}
module.exports = {
  siteMetadata: {
      title: siteMeta.title,
    description:siteMeta.description,
    siteUrl: siteMeta.siteUrl
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
        name: siteMeta.title,
        short_name: siteMeta.shortTitle,
        start_url: '/',
        background_color: 'white',
        theme_color: '#101C45',
        display: 'standalone',
        lang: 'en',
        icon: 'src/images/icon.png',
        icons: [
          {
            "src": "src/images/icon.png",
            "sizes": "48x48",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icon.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          },
        ],
        description:siteMeta.description
      },

  }]
};
