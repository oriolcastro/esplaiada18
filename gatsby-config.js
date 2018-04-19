const config = require('./meta/config')

module.exports = {
  siteMetadata: {
    title: 'Esplaiada 2018',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `2e8edcb0368913a88bd0a8dd64011f`,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
