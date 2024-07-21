import type { FC } from 'react';

import { pastryData } from '@/mock/pastry-data';
import { ProductBlock } from '@/entities';

import styles from './all-pastry.module.scss';

const AllPastry: FC = () => {
  const pastryDataByPrice = [...pastryData].sort((a, b) => a.price - b.price);

  return (
    <section className={styles.allCakes}>
      <ProductBlock dataPastry={pastryDataByPrice} isPastry={true} />
    </section>
  );
};

export default AllPastry;
