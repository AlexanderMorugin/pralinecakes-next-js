import { type FC } from 'react';

import { ArticleWrapper } from '@/components';
import {
  ProductDescribe,
  ProductNutritions,
  ProductPrice,
  ProductPrices,
} from '..';
import { ProductProps } from '@/shared/types/types';
import { Pack } from '@/shared/constants/pages';

import styles from './product-details.module.scss';

interface IProductDetails {
  item: ProductProps;
  isCake?: boolean;
}

export const ProductDetails: FC<IProductDetails> = ({ item, isCake }) => {
  return (
    <ArticleWrapper>
      <div className={styles.productDetails}>
        <ProductDescribe title='Состав' text={item.ingredients} />

        <ProductNutritions
          protein={item.protein}
          fat={item.fat}
          carbohydrates={item.carbohydrates}
          calories={item.calories}
        />

        <ProductDescribe
          title='Упаковка'
          text={isCake ? Pack.CAKE : Pack.PASTRY}
          isPackage={true}
        />

        {item.quantity > 1 ? (
          <ProductPrices
            quantity={item.quantity}
            quantity_b={item.quantity_b}
            weight={item.weight}
            weight_b={item.weight_b}
            price={item.price}
            price_b={item.price_b}
          />
        ) : (
          <ProductPrice weight={item.weight} price={item.price} />
        )}
      </div>
    </ArticleWrapper>
  );
};
