import type { FC } from 'react';

import { LinkButton, ProductCard } from '@/entities';
import Routes from '@/shared/constants/routes';
import { PAGE_PRODUCTS_LINK } from '@/shared/constants/pages';
import { ProductProps } from '@/shared/types/types';

import styles from './products-for-stories.module.scss';

interface IProductsForStories {
  dataPastry?: ProductProps[];
  dataCake?: ProductProps[];
  title: string;
}

const ProductsForStories: FC<IProductsForStories> = ({
  dataPastry,
  dataCake,
  title,
}) => {
  return (
    <section className={styles.productsForStories}>
      <h2 className={styles.productsForStories__title}>{title}</h2>
      <ul className={styles.productsForStories__list}>
        {dataPastry && dataPastry?.map((cake) => (
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
        {dataCake && dataCake?.map((cake) => (
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
        <LinkButton
          route={Routes.PRODUCTS}
          text={PAGE_PRODUCTS_LINK}
          className={styles.productsForStories__linkButton}
        />
      </ul>
    </section>
  );
};

export default ProductsForStories;
