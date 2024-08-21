import type { FC } from 'react';

import { CustomLink } from '@/entities';
import Routes from '@/shared/constants/routes';

import styles from './cooperation-block.module.scss';

const CooperationBlock: FC = () => {
  return (
    <section className={styles.cooperationBlock}>
      <p className={styles.cooperationBlock__text}>
        <span className={styles.cooperationBlock__marksFirst}>„</span>
        Приглашаем к сотрудничеству кафе, театры, детские развлекательные зоны,
        комплексы, кейтеринговые службы, кофейни, рестораны, бары, пекарни.
        Становитесь клиентом Пралине, приобретайте качественные десерты по
        выгодной стоимости, от производителя и поставщика...&nbsp;
        <CustomLink route={Routes.COOPERATION} text='подробнее' />
        <span className={styles.cooperationBlock__marksLast}>“</span>
      </p>
    </section>
  );
};

export default CooperationBlock;
