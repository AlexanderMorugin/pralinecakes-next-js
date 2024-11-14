import type { FC } from 'react';

import { priorityData } from '@/mock/priority-data';
import { PriorityCard } from '@/entities';
import { MediaRendering, Scroll } from '@/components';
import { Size } from '@/shared/constants/screen';

import styles from './priority-block.module.scss';

const PriorityBlock: FC = () => {
  return (
    <section className={styles.prioriryBlock}>
      <h3 className={styles.prioriryBlock__title}>Работать с нами приятно!</h3>

      <MediaRendering minWidth={Size.FROM_M} maxWidth={null}>
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
      </MediaRendering>

      <MediaRendering minWidth={null} maxWidth={Size.UNTIL_M}>
        <Scroll>
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
      </MediaRendering>
    </section>
  );
};

export default PriorityBlock;
