import React from 'react';
import styles from './productoStyles.module.css';

function Producto({ imgSrc, altText, description, route, imgSrcMobile }) {
  return (
    <a href={route} className={styles["producto-link"]}>
      <div className={styles.producto}>
        <img src={imgSrc} alt={altText} className={styles["producto-img"]}
        srcSet={`${imgSrc} 800w, ${imgSrcMobile} 400w`}
        
        />
        <div className={styles["producto-description"]}>
          <h3 className={`${styles["producto-description__text"]} text-xs md:text-base`}>{description}</h3>
        </div>
      </div>
    </a>
  );
}

export default Producto;
