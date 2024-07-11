import type { FC } from 'react';

import useShuffleArray from '@/shared/hooks/use-shuffle-array';
import { ProductBlock, ProductScroll } from '@/entities';
import { cakesData } from '@/mock/cakes-data';

import styles from './cake-block.module.scss';

const CakeBlock: FC = () => {
  const { fourItemsData, eightItemsData } = useShuffleArray(cakesData);

  return (
    <section className={styles.cakeBlock}>
      <ProductBlock
        dataCakes={fourItemsData}
        // routeCakes={Routes.CAKES}
        isLink={true}
        isCake={true}
        // isPastry={false}
        className={styles.cakeBlock__visible}
      />

      <ProductScroll
        dataCakes={eightItemsData}
        // routeCakes={Routes.CAKES}
        isLink={true}
        isCake={true}
        // isPastry={false}
      />
    </section>
  );
};

export default CakeBlock;
