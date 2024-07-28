import type { FC } from 'react';

import { ProductProps } from '@/shared/types/types';
import useShuffle from '@/shared/hooks/use-shuffle';
import { ProductBlock } from '@/entities';

import styles from './category.module.scss';

interface ICategory {
  data: ProductProps[];
}

const Category: FC<ICategory> = ({ data }) => {
  const shuffledData = useShuffle(data);

  return (
    <section className={styles.category}>
      <ProductBlock
        dataPastry={shuffledData}
        isCake={false}
        isPastry={true}
        isCategory={true}
      />
    </section>
  );
};

export default Category;
