import type { FC } from 'react';
import Link from 'next/link';

import Routes from '@/shared/constants/routes';
import { LinkTextArrow } from '@/entities';

import styles from './product-heading.module.scss';

interface IProductHeading {
  title: string;
  subtitle: string;
  route: string;
  isLink?: boolean;
  // isCake: boolean;
  isPastry?: boolean;
}

const ProductHeading: FC<IProductHeading> = ({
  title,
  subtitle,
  route,
  isLink = false,
  // isCake,
  isPastry = false,
}) => {
  return (
    isLink && (
      <article className={styles.productHeading}>
        <div className={styles.productHeading__titleBox}>
          <h3 className={styles.productHeading__title}>{title}</h3>
          {isPastry && (
            <Link
              href={Routes.CATEGORIES}
              className={styles.productHeading__category}
            >
              по категориям
            </Link>
          )}
        </div>
        <LinkTextArrow
          route={route}
          subtitle={subtitle}
          className={styles.productHeading__linkTextArrow}
        />
      </article>
    )
  );
};

export default ProductHeading;
