import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ProductProps } from '@/shared/types/types';
import {
  CategoryBlock,
  PageHeading,
  ProductDefrost,
  ProductDescribe,
  ProductExpiration,
  ProductModal,
  ProductNutritions,
  ProductPrice,
  ProductPrices,
  ProductStorage,
  StoryCard,
} from '@/entities';
import { ArticleWrapper } from '@/components';
import { CAKE_PACK, PASTRY_PACK } from '@/shared/constants/pages';

import styles from './product-widget.module.scss';

export interface IProductWidget extends ProductProps {
  isCake?: boolean;
  isPastry?: boolean;
}

const ProductWidget: FC<IProductWidget> = ({ isCake, isPastry, ...item }) => {
  const itemStory = item.story;

  return (
    <section className={styles.product}>
      {isCake && (
        <PageHeading title={`Торт "${item.title}"`} isProduct={true} />
      )}
      {isPastry && (
        <PageHeading title={`Пирожное "${item.title}"`} isProduct={true} />
      )}
      <div className={styles.product__container}>
        <div className={styles.product__imageBox}>
          <Image
            src={item.image_normal}
            alt={item.title}
            className={styles.product__image}
          />
          {item.link && (
            <Link href={item.link} className={styles.product__link}>
              {isCake ? 'А здесь спрятано пирожное' : 'А здесь спрятан торт'}
            </Link>
          )}

          <ProductModal
            image={item.image_large}
            title={item.title}
            isCake={isCake}
            isPastry={isPastry}
          />
        </div>
        <ArticleWrapper>
          <div className={styles.product__description}>
            <span className={styles.product__span}>Описание</span>
            <p>{item.description}</p>
            {item.descriptionSecond && (
              <p className={styles.product__descriptionSecond}>
                {item.descriptionSecond}
              </p>
            )}
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
        <ProductExpiration defrostStorage={item.defrostStorage} />
        <ProductStorage />
        <ProductDefrost />
      </div>

      {itemStory && (
        <div className={styles.product__story}>
          <StoryCard {...itemStory} />
        </div>
      )}
      {isPastry && <CategoryBlock category={item.category} />}
    </section>
  );
};

export default ProductWidget;
