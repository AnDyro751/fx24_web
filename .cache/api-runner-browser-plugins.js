module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-facebook-pixel/gatsby-browser.js'),
      options: {"plugins":[],"pixelId":"2470687473147176"},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#f44336","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-firebase/gatsby-browser.js'),
      options: {"plugins":[],"features":{"auth":true,"database":false,"firestore":true,"storage":false,"messaging":true,"functions":false,"remoteConfig":true,"config":true,"analytics":true}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Forex 24","short_name":"FX 24","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/circular_icon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
