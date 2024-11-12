import type { FC } from 'react';

import styles from './product-describe.module.scss';

interface IProductDescribe {
  title?: string;
  text: string;
  isPackage?: boolean;
}

const ProductDescribe: FC<IProductDescribe> = ({
  title,
  text,
  isPackage = false,
}) => {
  return (
    <div
      className={
        !isPackage
          ? styles.productDescribe
          : `${styles.productDescribe} ${styles.productDescribe_isPackage}`
      }
    >
      <span className={styles.productDescribe__span}>{title}</span>
      <p>{text}</p>
    </div>
  );
};

export default ProductDescribe;
