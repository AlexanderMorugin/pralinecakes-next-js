import type { FC } from 'react';

import styles from './product-describe.module.scss';

interface IProductDescribe {
  title?: string;
  text: string;
}

const ProductDescribe: FC<IProductDescribe> = ({ title, text }) => {
  return (
    <div className={styles.productDescribe}>
      <span className={styles.productDescribe__span}>{title}</span>
      <p>{text}</p>
    </div>
  );
};

export default ProductDescribe;
