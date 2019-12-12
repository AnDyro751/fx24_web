import React from 'react';
import styles from './style.module.css';

const FullPageLoading = () => (
  <div className={`${styles.full_page_loading} row u__no_margin justify-content-center align-items-center`}>
    <div className="col-auto u__no_padding">
      <p className={styles.full_page_loading_title}>Forex 24</p>
      <small>Desarrollada por Azachii</small>
    </div>
  </div>
);

export default FullPageLoading;
