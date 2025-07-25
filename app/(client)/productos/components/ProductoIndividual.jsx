import React from 'react';
import styles from'./productoStyles.module.css';
import { cn } from '@/lib/utils';

function Producto({ imgSrc, altText, description, route }) {
  return (
    <a href={route} className={styles.productolink}>
      <div className={styles.producto}>
        <img src={imgSrc} alt={altText} className={styles.productoimg}/>
        <div className={styles.productodescription}>
          <h3 className={cn(styles.productodescriptiontext, "text-xs md:text-base")}>{description}</h3>
        </div>
      </div>
    </a>
  );
}

export default Producto;
