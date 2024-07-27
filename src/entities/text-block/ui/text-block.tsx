import React, { type FC } from 'react';

import styles from './text-block.module.scss';

interface ITextBlock {
  // children: string;
  children: React.ReactNode;
}

const TextBlock: FC<ITextBlock> = ({ children }) => {
  return <p className={styles.textBlock}>{children}</p>;
};

export default TextBlock;
