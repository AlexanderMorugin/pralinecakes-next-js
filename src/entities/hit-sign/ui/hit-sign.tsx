import type { FC } from 'react';

import styles from './hit-sign.module.scss';

const HitSign: FC = () => {
  return <p className={styles.hitSign}>Хит</p>;
};

export default HitSign;
