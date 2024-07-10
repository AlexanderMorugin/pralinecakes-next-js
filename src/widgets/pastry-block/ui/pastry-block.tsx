import type { FC } from 'react';

// import { pastryData } from '../../../mockData/pastry-data';
// import useResize from '../../../shared/hooks/use-resize';
// import useShuffleArray from '../../../shared/hooks/use-shuffle-array';
// import Routes from '../../../shared/config/routes/routes';
// import { ProductBlock, ProductScroll } from '../../../entities';


import Routes from '@/shared/constants/routes';
import { ProductBlock } from '@/entities';
import useShuffleArray from '@/shared/hooks/use-shuffle-array';
import { pastryData } from '@/mock/pastry-data';

import styles from './pastry-block.module.scss';



const PastryBlock: FC = () => {
  // const { isScreenLg, isScreenMd } = useResize();
  const { threeItemsData, fourItemsData, eightItemsData } =
    useShuffleArray(pastryData);

  // const pastryDesktopData = isScreenLg ? fourItemsData : threeItemsData;

  return (
    <section className={styles.pastryBlock}>
      {/* {isScreenMd ? ( */}
        <ProductBlock
          // dataPastry={pastryDesktopData}
          dataPastry={fourItemsData} //пробуем без useResize

          routePastry={Routes.PASTRY}
          isLink={true}
          isPastry={true}
          isCake={false}
        />
      {/* ) : (
        <ProductScroll
          dataPastry={eightItemsData}
          routePastry={Routes.PASTRY}
          isLink={true}
          isPastry={true}
          isCake={false}
        />
      )} */}
    </section>
  );
};

export default PastryBlock;
