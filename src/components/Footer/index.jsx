import React from "react"
import styles from "./styles.module.css"
import { Link } from "gatsby"
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoPinterest,
} from "react-icons/io"

const Footer = () => {
  return (
    <div
      className={`row u__no_margin justify-content-center align-items-start ${styles.footer}`}
    >
      <div className="col-xl-10 u__no_padding">
        <div className="row u__no_margin justify-content-center align-items-start">
          <div className="col-xl-4">
            <TitleFooter title="Ayuda" />
            <div className="row u__no_margin">
              <div className="col-xl-12 u__no_padding">
                <p className={`${styles.item_footer}`}>
                  <a
                    className={`black_color_text`}
                    href="mailto:contact@azachii.com"
                  >
                    Escríbenos a contact@azachii.com
                  </a>
                </p>
              </div>
              <SimpleItem to="/" title="Términos y Condiciones" />
              <SimpleItem to="/" title="Preguntas Frecuentes" />
            </div>
          </div>
          <div className="col-xl-4">
            <div className="row u__no_margin">
              <TitleFooter title="Dirección" />
              <SimpleItem to="/" title="Monterrey Nuevo León, Calle 1 S/N" />
              <SimpleItem to="/" title="Ciudad de México, Polanco #23" />
              <SimpleItem to="/" title="Ver Mapa" />
            </div>
          </div>
          <div className="col-xl-4">
            <TitleFooter title="Síguenos" />
            <div className="row u__no_margin justify-content-start align-items-center">
              <div className="col-xl-auto u__no_padding">
                <IoLogoInstagram size={18} className={`black_color_text`} />
              </div>
              <div className="col-xl-auto">
                <IoLogoFacebook size={18} className={`black_color_text`} />
              </div>
              <div className="col-xl-auto u__no_padding">
                <IoLogoPinterest size={18} className={`black_color_text`} />
              </div>
            </div>
            <div className="row u__no_margin">
              <div className="col-xl-12 u__no_padding">
                <h3
                  className={`black_color_text u__normal_font u__small_margin_vertical`}
                >
                  Boletín Azachii
                </h3>
              </div>
              <div className="col-xl-auto u__no_padding">
                <input
                  autoComplete="email"
                  type="email"
                  placeholder="E-mail"
                  className={styles.input}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SimpleItem = ({ to, title }) => (
  <div className="col-xl-12 u__no_padding">
    <p className={`black_color_text ${styles.item_footer}`}>
      <Link to={to}>{title}</Link>
    </p>
  </div>
)

const TitleFooter = ({ title }) => (
  <div className="row u__no_margin">
    <div className="col-xl-12 u__no_padding">
      <h2 className={`black_color_text ${styles.footer_title}`}>{title}</h2>
    </div>
  </div>
)

export default Footer
