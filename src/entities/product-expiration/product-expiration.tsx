import type { FC } from 'react';
import Image from 'next/image';

import TimeIcon from '@/assets/icons/icon-time.svg';

import styles from './product-expiration.module.scss';

interface IProductExpiration {
  defrostStorage?: number;
}

export const ProductExpiration: FC<IProductExpiration> = ({
  defrostStorage = 72,
}) => {
  return (
    <section className={styles.productExpiration}>
      <div className={styles.productExpiration__heading}>
        <Image src={TimeIcon} alt='Время' width={22} height={22} />
        <h3 className={styles.productExpiration__title}>Срок годности</h3>
      </div>

      <div className={styles.productExpiration__text}>
        <p>Замороженного продукта при t&deg; -18°С - 3 месяца</p>
        <p>Охлажденного продукта при t&deg; +2..+6°С - {defrostStorage} часа</p>
        <p>Готового продукта при t&deg; +20..+22°С - 22 часа</p>
        <p className={styles.productExpiration__accent}>
          Продукт не подлежит повторному замораживанию
        </p>
      </div>
    </section>
  );
};
