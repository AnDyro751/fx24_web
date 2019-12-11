import React, { useState, useEffect } from "react"
import styles from "./styles.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useFirebase } from "gatsby-plugin-firebase/src/components/FirebaseContext"
import classnames from "classnames"
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io"

const Header = ({ whiteHeader = false }) => {
  const [showMessage, setShow] = useState({ active: false, message: "" })
  const [textWhite, setWhite] = useState(false)

  useFirebase(firebase => {
    const remoteConfig = firebase.remoteConfig()
    if (process.env.NODE_ENV === "development") {
      remoteConfig.settings = {
        minimumFetchIntervalMillis: 900000,
      }
    }
    remoteConfig.defaultConfig = {
      message_top_header: "Valor por defecto",
      message_top_header_value: false,
    }
    remoteConfig
      .fetchAndActivate()
      .then(d => {
        let activeMessageValue = remoteConfig
          .getValue("message_top_header_value")
          .asBoolean()
        let activeMessage = remoteConfig
          .getValue("message_top_header")
          .asString()
        setShow({ active: activeMessageValue, message: activeMessage })
      })
      .catch(err => {
        console.error(err)
      })
  })

  useEffect(() => {
    if (window) {
      window.addEventListener(
        "scroll",
        () => {
          if (window.scrollY > 30) {
            // setWhite(true)
          } else {
            // setWhite(false)
          }
        },
        false
      )
    }
  }, [])

  const text_class = classnames({
    white_color_text: !whiteHeader,
    black_color_text: whiteHeader,
  })

  const header_class = classnames({
    white_color: whiteHeader,
  })

  return (
    <>
      {showMessage.active && (
        <div className={` ${styles.main_message} black_color`}>
          <p className={`u__normal_font ${text_class}`}>
            {showMessage.message}
          </p>
        </div>
      )}
      <header
        className={`row u__no_margin ${styles.main_header} ${header_class} justify-content-center`}
      >
        <div className="col-xl-11 u__no_padding">
          <div className="row u__no_margin align-items-center justify-content-between">
            <div className="col-xl-2 u__no_padding">
              <AniLink
                cover
                to="/"
                bg="#DAE3D9"
                direction="down"
                className={`${styles.main_title} ${text_class} u__no_select u__no_drag`}
                to="/"
              >
                <span className="u__title_font">AS</span>TORE
              </AniLink>
            </div>
            <div className="col-xl-8 u__pointer">
              <div className="row u__no_margin justify-content-center align-items-center">
                <div title="Colecciones" className="col-xl-auto">
                  <AniLink
                    bg="#DAE3D9"
                    cover
                    direction="down"
                    to="/collections"
                  >
                    <h2 className={`black_color_text`}>Colecciones</h2>
                  </AniLink>
                </div>

                <div title="Dama" className="col-xl-auto">
                  <AniLink
                    bg="#DAE3D9"
                    cover
                    direction="down"
                    to="/collections"
                  >
                    <h2 className={`black_color_text`}>Dama</h2>
                  </AniLink>
                </div>
                <div title="Caballero" className="col-xl-auto">
                  <AniLink
                    bg="#DAE3D9"
                    cover
                    direction="down"
                    to="/collections"
                  >
                    <h2 className={`black_color_text`}>Caballero</h2>
                  </AniLink>
                </div>
                <div title="Buscar" className="col-xl-auto">
                  <IoIosSearch className={`black_color_text`} size={16} />
                </div>
              </div>
            </div>
            <div className="col-xl-2 u__no_padding">
              <div className="row u__no_margin justify-content-end align-items-center">
                <div title="Lista de deseos" className="col-xl-auto u__pointer">
                  <IoMdHeartEmpty className={`black_color_text`} size={16} />
                </div>
                <div
                  title="Carrito de compras"
                  className="col-xl-auto u__no_padding"
                >
                  <p className={`black_color_text ${styles.cart} u__pointer`}>
                    Carrito (0)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
