import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ProductProps } from '@/shared/types/types';
import {
  CategoryBlock,
  PageHeading,
  ProductDefrost,
  ProductDescription,
  ProductDetails,
  ProductExpiration,
  ProductStorage,
  StoryCard,
} from '@/entities';
import { ProductModal } from '@/entities/product-modal/product-modal';

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
            src={item.image_large}
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

        <ProductDescription item={item} />
        <ProductDetails item={item} isCake={isCake} />
      </div>

      <div className={styles.product__grid}>
        <ProductStorage />
        <ProductExpiration defrostStorage={item.defrostStorage} />
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
