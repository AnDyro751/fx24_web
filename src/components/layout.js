import React from "react"
import PropTypes from "prop-types"
import ReactTooltip from "react-tooltip"

import "./layout.css"
import Header from "./Header/index"
import Cookies from "./Cookies/index"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import Footer from "./Footer/index"

const Layout = ({ children, whiteHeader = false }) => {
  React.useEffect(() => {
    console.log("LAYOUT")
  }, [])
  return (
    <>
      <TransitionPortal level="top">
        <Header whiteHeader={whiteHeader} />
      </TransitionPortal>
      <div className="row u__no_margin">
        <main className="col-xl-12 u__no_padding">{children}</main>
      </div>
      <Cookies />
      <Footer />
      <ReactTooltip />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
