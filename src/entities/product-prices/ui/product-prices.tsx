import type { FC } from 'react';

import styles from './product-prices.module.scss';

interface IProductPrices {
  quantity: number;
  quantity_b?: number;
  weight: number;
  weight_b?: number;
  price: number;
  price_b?: number;
  priceList?: boolean;
}

const ProductPrices: FC<IProductPrices> = ({
  quantity,
  quantity_b,
  weight,
  weight_b,
  price,
  price_b,
  priceList = false,
}) => {
  return (
    <div className={styles.productPrices}>
      {!priceList && (
        <p className={styles.productPrices__title}>
          Пирожное продается комплектом
        </p>
      )}
      <div className={styles.productPrices__container}>
        <div className={styles.productPrices__box}>
          <span>Вес / 1шт</span>
          <span className={styles.productPrices__text}>{weight} гр</span>
          {weight_b && (
            <span className={styles.productPrices__text}>{weight_b} гр</span>
          )}
        </div>

        <div className={styles.productPrices__box}>
          <span>Цена / 1шт</span>
          <span className={styles.productPrices__price}>{price} р</span>
          {price_b && (
            <span className={styles.productPrices__price}>{price_b} р</span>
          )}
        </div>

        <div className={styles.productPrices__box}>
          <span>Кол-во</span>
          <span className={styles.productPrices__text}>{quantity} шт</span>
          {quantity_b && (
            <span className={styles.productPrices__text}>{quantity_b} шт</span>
          )}
        </div>

        <div className={styles.productPrices__box}>
          <span>Сумма</span>
          <span className={styles.productPrices__price}>
            {price * quantity} р
          </span>
          {price_b && quantity_b && (
            <span className={styles.productPrices__price}>
              {price_b * quantity_b} р
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPrices;
