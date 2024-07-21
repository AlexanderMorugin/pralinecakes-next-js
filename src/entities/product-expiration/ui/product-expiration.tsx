import type { FC } from 'react';
import Image from 'next/image';

import TimeIcon from '@/assets/icons/icon-time.svg';

import styles from './product-expiration.module.scss';

const ProductExpiration: FC = () => {
  return (
    <section className={styles.productExpiration}>
      <div className={styles.productExpiration__heading}>
        <Image src={TimeIcon} alt='Время' width={22} height={22} />
        <h3 className={styles.productExpiration__title}>Срок годности</h3>
      </div>

      <div className={styles.productExpiration__text}>
        <p>Замороженного продукта при t&deg; -18°С - 3 месяца</p>
        <p>Охлажденного продукта при t&deg; +4..+6°С - 72 часа</p>
        <p>Готового продукта при t&deg; +20..+22°С - 24 часа</p>
        <p className={styles.productExpiration__accent}>
          Продукт не подлежит повторному замораживанию
        </p>
      </div>
    </section>
  );
};

export default ProductExpiration;
