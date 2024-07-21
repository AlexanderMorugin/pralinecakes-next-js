import type { FC } from 'react';

import { ProductProps } from '@/shared/types/types';
import { ProductCard, ProductHeading } from '@/entities';
import {
  PAGE_CAKES_LINK,
  PAGE_CAKES_TITLE,
  PAGE_PASTRY_LINK,
  PAGE_PASTRY_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';

import styles from './product-block.module.scss';

interface IProductBlock {
  dataPastry?: ProductProps[];
  dataCakes?: ProductProps[];
  isLink?: boolean;
  isCake?: boolean;
  isPastry?: boolean;
  className?: string;
}

const ProductBlock: FC<IProductBlock> = ({
  dataPastry,
  dataCakes,
  isLink,
  isCake = false,
  isPastry = false,
  className,
}) => {
  return (
    <div className={`${className} ${styles.productBlock}`}>
      {isCake && (
        <ProductHeading
          title={PAGE_CAKES_TITLE}
          subtitle={PAGE_CAKES_LINK}
          route={Routes.CAKES}
          isLink={isLink}
        />
      )}

      {isPastry && (
        <ProductHeading
          title={PAGE_PASTRY_TITLE}
          subtitle={PAGE_PASTRY_LINK}
          route={Routes.PASTRY}
          isLink={isLink}
          isPastry={isPastry}
        />
      )}

      {isCake && (
        <ul className={styles.productBlock__container}>
          {dataCakes?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                route={`/products/cakes/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
        </ul>
      )}

      {isPastry && (
        <ul className={styles.productBlock__container}>
          {dataPastry?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                route={`/products/pastry/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductBlock;
