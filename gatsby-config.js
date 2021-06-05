require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    siteTitleAlt: `Jonathan-David Schröder - Portfolio`,
    siteTitle: `Portfolio de Jonathan-David Schröder`,
    siteHeadline: `Jonathan-David Schröder - Portfolio`,
    siteDescription: `Un portfolio de chocolat, 2D et 3D.`,
    siteLanguage: `fr`,
    siteImage: `/banner.jpg`,
    siteUrl: `http://myselfhimself.github.io/portfolio`,
    author: `@myselfhimself`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
	name: "Jonathan-David Schröder",
	location: "France",
	socialMedia: [{ title: `Github`, href: `https://github.com/myselfhimself` }, { title: `Instagram`, href: `https://www.instagram.com/labonneimpressionfr/` }],
	showThemeAuthor: false,
	allRightsReservedText: "Tous droits réservés."
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - @lekoarts/gatsby-theme-emilia`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
