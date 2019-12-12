module.exports = {
  siteMetadata: {
    siteUrl: 'https://sfx247.web.app',
    title: 'Forex 24',
    description: '',
    author: 'Azachii Develop',
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '2470687473147176',
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#f44336',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: false,
          messaging: true,
          functions: false,
          remoteConfig: true,
          config: true,
          analytics: true,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Forex 24',
        short_name: 'FX 24',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/circular_icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
