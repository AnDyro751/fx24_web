import React from "react"
import styles from "./styles.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { FirebaseContext } from "gatsby-plugin-firebase"

const BannerTopCollection = ({ loading, images }) => {
  const firebase = React.useContext(FirebaseContext)

  const handleChange = (index, item) => {
    if (firebase) {
      firebase.analytics().logEvent("change_banner", {
        index: index,
      })
    }
  }

  return (
    <div
      className={`row u__no_margin justify-content-center accent_color ${styles.main_banner}`}
    >
      <div className="col-xl-12 u__no_padding">
        {loading && <ItemLoading />}

        <Carousel
          useKeyboardArrows={true}
          emulateTouch
          showArrows={false}
          onChange={handleChange}
          onClickItem={() => {}}
          onClickThumb={() => {}}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          className="accent_color"
        >
          {!loading &&
            images.length > 0 &&
            images.map((image, i) => <ItemSlider data={image} key={i} />)}
        </Carousel>
      </div>
    </div>
  )
}

const ItemLoading = () => (
  <div className={`row u__no_margin accent_color ${styles.main_item}`}>
    <div
      className={`col-xl-8 u__no_padding ${styles.main_item_container}`}
    ></div>
    <div className={`col-xl-4 u__no_padding `}>
      <div
        className={`${styles.main_description} accent_color_dark row u__no_margin justify-content-start`}
      >
        <div className="col-xl-12 u__no_padding">
          <h2 className={`black_color_text`}></h2>
        </div>
        <div className="col-xl-auto u__no_padding"></div>
      </div>
    </div>
  </div>
)

const ItemSlider = ({ data }) => (
  <div
    className={`row u__no_margin justify-content-center accent_color ${styles.main_item}`}
  >
    <div className="col-xl-11 u__no_padding">
      <div className="row u__no_margin">
        <div className={`col-xl-8 u__no_padding ${styles.main_item_container}`}>
          <LazyLoadImage src={data.big_image_url} />
        </div>
        <div className={`col-xl-4 u__no_padding `}>
          <div
            className={`${styles.main_description} accent_color_dark row u__no_margin justify-content-start`}
          >
            <div className="col-xl-12 u__no_padding">
              <h2 className={`black_color_text`}>{data.description}</h2>
            </div>
            <div className="col-xl-auto u__no_padding">
              <div className={`${styles.button} black_color_text`}>Ver más</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BannerTopCollection
