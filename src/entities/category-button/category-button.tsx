import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CategoryProps } from '@/shared/types/types';

import styles from './category-button.module.scss';

interface ICategoryButton extends CategoryProps {
  className?: string;
}

export const CategoryButton: FC<ICategoryButton> = ({
  route,
  name,
  image,
  className,
}) => {
  return (
    <Link href={route} className={`${className} ${styles.categoryButton}`}>
      <span className={styles.name}>{name}</span>
      <Image
        src={image as any}
        alt={name}
        priority
        className={styles.categoryButton__image}
      />
    </Link>
  );
};
