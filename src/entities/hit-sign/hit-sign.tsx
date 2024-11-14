import type { FC } from 'react';

import styles from './hit-sign.module.scss';

export const HitSign: FC = () => {
  return <p className={styles.hitSign}>Хит</p>;
};
