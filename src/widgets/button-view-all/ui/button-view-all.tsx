import type { FC } from 'react';
import Link from 'next/link';

import styles from './button-view-all.module.scss';

interface IButtonViewAll {
  text: string;
  route: string;
}

const ButtonViewAll: FC<IButtonViewAll> = ({ text, route }) => {
  return (
    <section className={styles.buttonViewAll}>
      <Link href={route} className={styles.buttonViewAll__link}>
        {text}
      </Link>
    </section>
  );
};

export default ButtonViewAll;
