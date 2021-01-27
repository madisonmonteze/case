module.exports = {
  siteMetadata: {
    title: `CASE`,
    description: `California Small Business Rebuilding Fund`,
    author: `@madisonmonteze`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static",
      },
      __key: "images",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'qg0slw36',
        dataset: 'production',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`
  ],
}
