const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/andyro/Code/JS/forex_web/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/andyro/Code/JS/forex_web/src/pages/404.js"))),
  "component---src-pages-collections-index-jsx": hot(preferDefault(require("/home/andyro/Code/JS/forex_web/src/pages/collections/index.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/andyro/Code/JS/forex_web/src/pages/index.jsx"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/andyro/Code/JS/forex_web/src/pages/page-2.js")))
}

