import { FC, PropsWithChildren } from 'react';

import styles from './page-wrapper.module.scss';

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.pageWrapper}>{children}</div>;
};

export default PageWrapper;
