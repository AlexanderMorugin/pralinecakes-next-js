import type { FC } from 'react';

import { ProductBlock, ProductScroll } from '@/entities';
import useShuffleArray from '@/shared/hooks/use-shuffle-array';
import { pastryData } from '@/mock/pastry-data';
import { MediaRendering } from '@/components';
import { Size } from '@/shared/constants/screen';

import styles from './pastry-block.module.scss';

const PastryBlock: FC = () => {
  const { fourItemsData, eightItemsData } = useShuffleArray(pastryData);

  return (
    <section className={styles.pastryBlock}>
      <MediaRendering minWidth={Size.FROM_M} maxWidth={null}>
        <ProductBlock
          dataPastry={fourItemsData}
          isLink={true}
          isPastry={true}
          isPastryBlock={true}
        />
      </MediaRendering>

      <MediaRendering minWidth={null} maxWidth={Size.UNTIL_M}>
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
