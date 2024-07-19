import type { FC } from 'react';

import { priorityData } from '@/mock/priority-data';
import { PriorityCard } from '@/entities';
import { Scroll } from '@/components';

import styles from './priority-block.module.scss';

const PriorityBlock: FC = () => {
  return (
    <section className={styles.prioriryBlock}>
      <h3 className={styles.prioriryBlock__title}>Работать с нами приятно</h3>

      <ul className={styles.prioriryBlock__list}>
        {priorityData.map((item, index) => (
          <li key={index}>
            <PriorityCard
              title={item.title}
              image={item.image}
              route={item.route}
            />
          </li>
        ))}
      </ul>

      <Scroll className={styles.prioriryBlock__scroll}>
        {priorityData.map((item, index) => (
          <li key={index}>
            <PriorityCard
              title={item.title}
              image={item.image}
              route={item.route}
            />
          </li>
        ))}
      </Scroll>
    </section>
  );
};

export default PriorityBlock;
