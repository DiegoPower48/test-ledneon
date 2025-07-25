import React from 'react';
import Producto from './ProductoIndividual';
import styles from './productoStyles.module.css'

function FilaProductos({ productos }) {
  return (
    <div className={styles.productorow}>
      {productos.map((producto, index) => (
        <Producto
          key={index}
          imgSrc={producto.imgSrc}
          altText={producto.altText}
          description={producto.description}
          route={producto.route}
        />
      ))}
    </div>
  );
}

export default FilaProductos;
