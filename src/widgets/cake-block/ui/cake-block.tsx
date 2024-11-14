import type { FC } from 'react';

import useShuffleArray from '@/shared/hooks/use-shuffle-array';
import { ProductBlock, ProductScroll } from '@/entities';
import { cakesData } from '@/mock/cakes-data';
import { MediaRendering } from '@/components';
import { Size } from '@/shared/constants/screen';

import styles from './cake-block.module.scss';

const CakeBlock: FC = () => {
  const { fourItemsData, eightItemsData } = useShuffleArray(cakesData);

  return (
    <section className={styles.cakeBlock}>
      <MediaRendering minWidth={Size.FROM_M} maxWidth={null}>
        <ProductBlock
          dataCakes={fourItemsData}
          isLink={true}
          isCake={true}
          isCakeBlock={true}
        />
      </MediaRendering>

      <MediaRendering minWidth={null} maxWidth={Size.UNTIL_M}>
        <ProductScroll dataCakes={eightItemsData} isLink={true} isCake={true} />
      </MediaRendering>
    </section>
  );
};

export default CakeBlock;
