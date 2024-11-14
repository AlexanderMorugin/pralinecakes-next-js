import { type FC } from 'react';

import { ProductProps } from '@/shared/types/types';
import { ArticleWrapper } from '@/components';

import styles from './product-description.module.scss';

interface IProductDescription {
  item: ProductProps;
}

export const ProductDescription: FC<IProductDescription> = ({ item }) => {
  return (
    <ArticleWrapper>
      <div className={styles.productDescription}>
        <span className={styles.productDescription__span}>Описание</span>
        <p>{item.description}</p>
        {item.descriptionSecond && (
          <p className={styles.productDescription__second}>
            {item.descriptionSecond}
          </p>
        )}
        {item.descriptionThird && (
          <p className={styles.productDescription__second}>
            {item.descriptionThird}
          </p>
        )}
        <p className={styles.productDescription__condition}>{item.condition}</p>
      </div>
    </ArticleWrapper>
  );
};
