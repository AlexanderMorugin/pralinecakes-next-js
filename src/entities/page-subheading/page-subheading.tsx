import type { FC } from 'react';

import styles from './page-subheading.module.scss';

interface IPageSubheading {
  title: string;
  description: string;
}

export const PageSubheading: FC<IPageSubheading> = ({ title, description }) => {
  return (
    <article className={styles.pageSubheading}>
      <h2 className={styles.pageSubheading__title}>{title}</h2>
      <p className={styles.pageSubheading__description}>{description}</p>
    </article>
  );
};
