import type { FC } from 'react';
import Link from 'next/link';

import styles from './price-card.module.scss';
import { ProductDescribe, ProductPrice, ProductPrices } from '@/entities';

interface IPriceCard {
  title: string;
  description: string;
  route: string;
  quantity: number;
  quantity_b?: number;
  weight: number;
  weight_b?: number;
  price: number;
  price_b?: number;
}

const PriceCard: FC<IPriceCard> = ({
  title,
  description,
  route,
  quantity,
  quantity_b,
  weight,
  weight_b,
  price,
  price_b,
}) => {
  return (
    <li className={styles.priceCard}>
      <Link href={route} className={styles.priceCard__link}>
        {title}
      </Link>
      <p className={styles.priceCard__description}>{description}</p>
      {quantity > 1 ? (
        <ProductPrices
          quantity={quantity}
          quantity_b={quantity_b}
          weight={weight}
          weight_b={weight_b}
          price={price}
          price_b={price_b}
          priceList={true}
        />
      ) : (
        <ProductPrice weight={weight} price={price} />
      )}
      <div></div>
    </li>
  );
};

export default PriceCard;