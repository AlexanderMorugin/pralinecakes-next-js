import React, { type FC } from 'react';

import styles from './scroll.module.scss';

interface IScroll {
  className?: string;
  children: React.ReactNode;
}

const Scroll: FC<IScroll> = ({ className, children }) => {
  return <ul className={`${styles.scroll} ${className}`}>{children}</ul>;
};

export default Scroll;
