import type { FC } from 'react';

import { ProductProps } from '@/shared/types/types';
import { PriceCard } from '@/entities';

import styles from './price-block.module.scss';

interface IPriceBlock {
  title: string;
  dataPastry?: ProductProps[];
  dataCakes?: ProductProps[];
  isPastry?: boolean;
  isCake?: boolean;
}

export const PriceBlock: FC<IPriceBlock> = ({
  title,
  dataPastry,
  dataCakes,
  isPastry = false,
  isCake = false,
}) => {
  return (
    <div className={styles.priceBlock}>
      <h2 className={styles.priceBlock__title}>{title}</h2>
      <ul className={styles.priceBlock__list}>
        {isPastry &&
          dataPastry?.map((item) => (
            <PriceCard
              key={item.id}
              title={`Пирожное ${item.title}`}
              description={item.description}
              route={`/products/pastry/${item.route}`}
              quantity={item.quantity}
              quantity_b={item.quantity_b}
              weight={item.weight}
              weight_b={item.weight_b}
              price={item.price}
              price_b={item.price_b}
            />
          ))}

        {isCake &&
          dataCakes?.map((item) => (
            <PriceCard
              key={item.id}
              title={`Торт ${item.title}`}
              description={item.description}
              route={`/products/cakes/${item.route}`}
              quantity={item.quantity}
              weight={item.weight}
              price={item.price}
            />
          ))}
      </ul>
    </div>
  );
};
