import type { FC } from 'react';

import { ProductProps } from '@/shared/types/types';
import { LinkButton, ProductCard, ProductHeading } from '@/entities';
import {
  PAGE_CAKES_LINK,
  PAGE_CAKES_TITLE,
  PAGE_PASTRY_LINK,
  PAGE_PASTRY_TITLE,
} from '@/shared/constants/pages';
import { Scroll } from '@/components';
import Routes from '@/shared/constants/routes';

import styles from './product-scroll.module.scss';

interface IProductScroll {
  dataPastry?: ProductProps[];
  dataCakes?: ProductProps[];
  isLink: boolean;
  isCake?: boolean;
  isPastry?: boolean;
}

export const ProductScroll: FC<IProductScroll> = ({
  dataPastry,
  dataCakes,
  isLink,
  isCake = false,
  isPastry = false,
}) => {
  return (
    <div className={styles.productScroll}>
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
        <Scroll>
          {dataCakes?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                className={styles.productScroll__productCard}
                route={`/products/cakes/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
          <LinkButton route={Routes.CAKES} text={PAGE_CAKES_LINK} />
        </Scroll>
      )}

      {isPastry && (
        <Scroll>
          {dataPastry?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                className={styles.productScroll__productCard}
                route={`/products/pastry/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
          <LinkButton route={Routes.PASTRY} text={PAGE_PASTRY_LINK} />
        </Scroll>
      )}
    </div>
  );
};
