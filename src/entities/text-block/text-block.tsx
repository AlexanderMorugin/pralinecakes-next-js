import React, { type FC } from 'react';

import styles from './text-block.module.scss';

interface ITextBlock {
  children: React.ReactNode;
}

export const TextBlock: FC<ITextBlock> = ({ children }) => {
  return <p className={styles.textBlock}>{children}</p>;
};
