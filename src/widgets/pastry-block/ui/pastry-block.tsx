import type { FC } from 'react';

// import Routes from '@/shared/constants/routes';
import { ProductBlock, ProductScroll } from '@/entities';
import useShuffleArray from '@/shared/hooks/use-shuffle-array';
import { pastryData } from '@/mock/pastry-data';

import styles from './pastry-block.module.scss';

const PastryBlock: FC = () => {
  const { fourItemsData, eightItemsData } = useShuffleArray(pastryData);

  return (
    <section className={styles.pastryBlock}>
      <ProductBlock
        dataPastry={fourItemsData}
        // routePastry={Routes.PASTRY}
        isLink={true}
        isPastry={true}
        // isCake={false}
        className={styles.pastryBlock__visible}
      />

      <ProductScroll
        dataPastry={eightItemsData}
        // routePastry={Routes.PASTRY}
        isLink={true}
        isPastry={true}
        // isCake={false}
      />
    </section>
  );
};

export default PastryBlock;
