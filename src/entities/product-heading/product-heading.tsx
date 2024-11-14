import type { FC } from 'react';
import Link from 'next/link';

import Routes from '@/shared/constants/routes';
import { LinkTextArrow } from '@/entities';
import { MediaRendering } from '@/components';
import { Size } from '@/shared/constants/screen';

import styles from './product-heading.module.scss';

interface IProductHeading {
  title: string;
  subtitle: string;
  route: string;
  isLink?: boolean;
  isPastry?: boolean;
}

export const ProductHeading: FC<IProductHeading> = ({
  title,
  subtitle,
  route,
  isLink = false,
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

        <MediaRendering minWidth={Size.FROM_M} maxWidth={null}>
          <LinkTextArrow route={route} subtitle={subtitle} />
        </MediaRendering>
      </article>
    )
  );
};
