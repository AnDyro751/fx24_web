var plugins = [{
      plugin: require('/Users/schorts/Documents/FX 24/Web/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/schorts/Documents/FX 24/Web/node_modules/gatsby-plugin-transition-link/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/schorts/Documents/FX 24/Web/node_modules/gatsby-plugin-facebook-pixel/gatsby-ssr'),
      options: {"plugins":[],"pixelId":"2470687473147176"},
    },{
      plugin: require('/Users/schorts/Documents/FX 24/Web/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Cinzel Decorative:","variants":["900"]},{"family":"Alata"}]},
    },{
      plugin: require('/Users/schorts/Documents/FX 24/Web/node_modules/gatsby-plugin-firebase/gatsby-ssr'),
      options: {"plugins":[],"features":{"auth":true,"database":false,"firestore":true,"storage":false,"messaging":true,"functions":false,"remoteConfig":true,"config":true,"analytics":true}},
    },{
      plugin: require('/Users/schorts/Documents/FX 24/Web/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Forex 24","short_name":"FX 24","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/circular_icon.png"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
