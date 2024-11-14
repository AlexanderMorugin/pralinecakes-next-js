import type { FC } from 'react';

import styles from './product-price.module.scss';

interface IProductPrice {
  weight: number;
  price: number;
}

export const ProductPrice: FC<IProductPrice> = ({ weight, price }) => {
  return (
    <div className={styles.productPrice}>
      <div className={styles.productPrice__weight}>
        <span className={styles.productPrice__span}>Вес: </span>
        <span>{weight} гр</span>
      </div>

      <div className={styles.productPrice__price}>
        <span className={styles.productPrice__span}>Цена: </span>
        <span>{price} р</span>
      </div>
    </div>
  );
};
