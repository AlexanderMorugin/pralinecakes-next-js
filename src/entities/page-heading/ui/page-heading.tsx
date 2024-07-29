import type { FC } from 'react';

import { PAGE_SUBTITLE } from '@/shared/constants/pages';

import styles from './page-heading.module.scss';

interface IPageHeading {
  title: string;
  subtitle?: string;
  description?: string;
  isPage?: boolean;
  isSubtitle?: boolean;
  isProduct?: boolean;
}

const PageHeading: FC<IPageHeading> = ({
  title,
  isPage = false,
  subtitle,
  isSubtitle = false,
  description,
  isProduct = false,
}) => {
  return (
    <article
      className={
        isPage
          ? `${styles.pageHeading} ${styles.pageHeading_isPage}`
          : styles.pageHeading
      }
    >
      <h1
        className={
          isProduct
            ? `${styles.pageHeading__title} ${styles.pageHeading__title_isProduct}`
            : styles.pageHeading__title
        }
      >
        {title}
      </h1>
      {isSubtitle ? (
        <>
          <p className={styles.pageHeading__subtitle}>{subtitle}</p>
          <p className={styles.pageHeading__description}>{description}</p>
        </>
      ) : (
        <p
          className={
            isSubtitle
              ? styles.pageHeading__description
              : styles.pageHeading__pageSubtitle
          }
        >
          {PAGE_SUBTITLE}
        </p>
      )}
    </article>
  );
};

export default PageHeading;
