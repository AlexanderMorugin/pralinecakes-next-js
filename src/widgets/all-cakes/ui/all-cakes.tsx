import type { FC } from 'react';

import { cakesData } from '@/mock/cakes-data';
import { ProductBlock } from '@/entities';

import styles from './all-cakes.module.scss';

const AllCakes: FC = () => {
  const cakesDataByPrice = [...cakesData].sort((a, b) => a.price - b.price);

  return (
    <section className={styles.allCakes}>
      <ProductBlock dataCakes={cakesDataByPrice} isCake={true} />
    </section>
  );
};

export default AllCakes;
