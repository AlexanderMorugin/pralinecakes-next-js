import type { FC } from 'react';
import Image from 'next/image';

import { ProductProps } from '@/shared/types/types';
import {
  CategoryBlock,
  PageHeading,
  ProductDefrost,
  ProductDescribe,
  ProductExpiration,
  ProductNutritions,
  ProductPrice,
  ProductPrices,
} from '@/entities';
import { ArticleWrapper } from '@/components';
import { CAKE_PACK, PASTRY_PACK } from '@/shared/constants/pages';

import styles from './product-widget.module.scss';

export interface IProductWidget extends ProductProps {
  isCake?: boolean;
  isPastry?: boolean;
}

const ProductWidget: FC<IProductWidget> = ({ isCake, isPastry, ...item }) => {
  return (
    <section className={styles.product}>
      {isCake && <PageHeading title={`Торт "${item.title}"`} />}
      {isPastry && <PageHeading title={`Пирожное "${item.title}"`} />}
      <div className={styles.product__container}>
        <Image
          src={item.image_normal}
          alt={item.title}
          className={styles.product__image}
        />
        <ArticleWrapper>
          <div className={styles.product__description}>
            <span className={styles.product__span}>Описание</span>
            <p>{item.description}</p>
            <p className={styles.product__condition}>{item.condition}</p>
          </div>

          <ProductDescribe
            title='Упаковка'
            text={isCake ? CAKE_PACK : PASTRY_PACK}
          />

          <ProductDescribe title='Состав' text={item.ingredients} />

          <ProductNutritions
            protein={item.protein}
            fat={item.fat}
            carbohydrates={item.carbohydrates}
            calories={item.calories}
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
        </ArticleWrapper>
      </div>

      <div className={styles.product__grid}>
        <ProductExpiration />
        <ProductDefrost />
      </div>

      {isPastry && <CategoryBlock category={item.category} />}
    </section>
  );
};

export default ProductWidget;