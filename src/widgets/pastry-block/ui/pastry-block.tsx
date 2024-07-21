import type { FC } from 'react';

import { ProductBlock, ProductScroll } from '@/entities';
import useShuffleArray from '@/shared/hooks/use-shuffle-array';
import { pastryData } from '@/mock/pastry-data';
import { MediaRendering } from '@/components';
import { SCREEN_M } from '@/shared/constants/screen';

import styles from './pastry-block.module.scss';

const PastryBlock: FC = () => {
  const { fourItemsData, eightItemsData } = useShuffleArray(pastryData);

  return (
    <section className={styles.pastryBlock}>
      <MediaRendering minWidth={SCREEN_M} maxWidth={null}>
        <ProductBlock
          dataPastry={fourItemsData}
          isLink={true}
          isPastry={true}
        />
      </MediaRendering>

      <MediaRendering minWidth={null} maxWidth={SCREEN_M}>
        <ProductScroll
          dataPastry={eightItemsData}
          isLink={true}
          isPastry={true}
        />
      </MediaRendering>
    </section>
  );
};

export default PastryBlock;
