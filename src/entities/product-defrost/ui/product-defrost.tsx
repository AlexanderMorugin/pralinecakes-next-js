import type { FC } from 'react';
import Image from 'next/image';

import SnowIcon from '@/assets/icons/icon-snow.svg';

import styles from './product-defrost.module.scss';

const ProductDefrost: FC = () => {
  return (
    <section className={styles.productDefrost}>
      <div className={styles.productDefrost__heading}>
        <Image
          src={SnowIcon}
          alt='Снежинка'
          width={24}
          height={24}
          className={styles.productDefrost__icon}
        />
        <h3 className={styles.productDefrost__title}>Способ разморозки</h3>
      </div>
      <p className={styles.productDefrost__text}>
        Замороженный продукт разморозить в холодильнике при t&deg; +4..+6°С - в
        течение 3-4 часов до полной разморозки
      </p>
      <p className={styles.productDefrost__text}>
        После размораживания хранить продукцию в холодильнике
      </p>
    </section>
  );
};

export default ProductDefrost;
