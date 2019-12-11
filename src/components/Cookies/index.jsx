import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { MdClose } from "react-icons/md"
const Cookies = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window && localStorage) {
      let cookies_accept = localStorage.getItem("cookies_accept")
      setVisible(!cookies_accept)
    }
  }, [])

  const handleAccept = () => {
    if (window && localStorage) {
      setVisible(false)
      localStorage.setItem("cookies_accept", "true")
    }
  }

  if (visible) {
    return (
      <div onClick={handleAccept} className="row u__no_margin u__pointer">
        <div className="col-xl-12 u__no_padding">
          <div className={`${styles.main_cookie} u__main_box_shadow`}>
            <div onClick={handleAccept} className={styles.main_close}>
              <MdClose size={18} />
            </div>
            <p className="black_color_text u__normal_font">
              Este sitio web utiliza cookies para ofrecerle la información más
              relevante y una mejor experiencia.
            </p>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Cookies
