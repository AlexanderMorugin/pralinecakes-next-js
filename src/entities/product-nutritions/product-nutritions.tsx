import type { FC } from 'react';

import styles from './product-nutritions.module.scss';

interface IProductNutritions {
  protein: number;
  fat: number;
  carbohydrates: number;
  calories: number;
}

export const ProductNutritions: FC<IProductNutritions> = ({
  protein,
  fat,
  carbohydrates,
  calories,
}) => {
  return (
    <div className={styles.productNutritions}>
      <p className={styles.productNutritions__title}>
        Пищевая ценность на 100 гр
      </p>

      <div className={styles.productNutritions__nutritions}>
        <div className={styles.productNutritions__nutrition}>
          <span className={styles.productNutritions__span}>Белки</span>
          <span>{protein} гр</span>
        </div>

        <div className={styles.productNutritions__nutrition}>
          <span className={styles.productNutritions__span}>Жиры</span>
          <span>{fat} гр</span>
        </div>

        <div className={styles.productNutritions__nutrition}>
          <span className={styles.productNutritions__span}>Углеводы</span>
          <span>{carbohydrates} гр</span>
        </div>

        <div className={styles.productNutritions__nutrition}>
          <span className={styles.productNutritions__span}>Калории</span>
          <span>{calories} ккал</span>
        </div>
      </div>
    </div>
  );
};
