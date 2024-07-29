import type { FC } from 'react';
import Link from 'next/link';

import styles from './view-all-categories.module.scss';

const ViewAllCategories: FC = () => {
  return (
    <section className={styles.viewAllCategories}>
      <Link href='/categories/' className={styles.viewAllCategories__link}>
        Смотреть другие категории
      </Link>
    </section>
  );
};

export default ViewAllCategories;
