import type { FC } from 'react';
import Link from 'next/link';

import Routes from '@/shared/constants/routes';

import styles from './product-storage.module.scss';

const ProductStorage: FC = () => {
  return (
    <section className={styles.productStorage}>
      <Link href={Routes.STORAGE} className={styles.productStorage__link}>
        Подробные правила хранения замороженных десертов и правильной разморозки
      </Link>
    </section>
  );
};

export default ProductStorage;
