import { FC, PropsWithChildren } from 'react';

import styles from './main-wrapper.module.scss';

const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.mainWrapper}>{children}</div>;
};

export default MainWrapper;