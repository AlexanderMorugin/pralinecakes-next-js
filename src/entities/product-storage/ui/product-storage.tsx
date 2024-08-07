import type { FC } from 'react';
import Link from 'next/link';

import styles from './product-storage.module.scss';

const ProductStorage: FC = () => {
  return (
    <section className={styles.productStorage}>
      <Link
        href='/cooperation/storage/'
        className={styles.productStorage__link}
      >
        Подробные правила хранения замороженных десертов
      </Link>
    </section>
  );
};

export default ProductStorage;
