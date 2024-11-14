import React, { type FC } from 'react';

import styles from './page-text.module.scss';

interface IPageText {
  children: React.ReactNode;
}

export const PageText: FC<IPageText> = ({ children }) => {
  return (
    <section className={styles.pageText}>
      <p className={styles.pageText__text}>{children}</p>
    </section>
  );
};
