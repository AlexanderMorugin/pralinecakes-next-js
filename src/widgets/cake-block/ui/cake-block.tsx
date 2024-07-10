import type { FC } from 'react';

import useShuffleArray from '@/shared/hooks/use-shuffle-array';
import Routes from '@/shared/constants/routes';
import { ProductBlock } from '@/entities';
import { cakesData } from '@/mock/cakes-data';

import styles from './cake-block.module.scss';


const CakeBlock: FC = () => {
  // const { isScreenLg, isScreenMd } = useResize();
  const { threeItemsData, fourItemsData, eightItemsData } =
    useShuffleArray(cakesData);

  // const cakeDesktopData = isScreenLg ? fourItemsData : threeItemsData;

  return (
    <section className={styles.cakeBlock}>
      {/* {isScreenMd ? ( */}
      <ProductBlock
        // dataCakes={cakeDesktopData}
        dataCakes={fourItemsData} //пробуем без useResize

        routeCakes={Routes.CAKES}
        isLink={true}
        isCake={true}
        isPastry={false}
      />
      {/* ) : (
        <ProductScroll
          dataCakes={eightItemsData}
          routeCakes={Routes.CAKES}
          isLink={true}
          isCake={true}
          isPastry={false}
        />
      )} */}
    </section>
  );
};

export default CakeBlock;
