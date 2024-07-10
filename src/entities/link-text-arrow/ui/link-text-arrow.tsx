import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ArrowIcon from '@/assets/icons/icon-arrow.svg';

import styles from './link-text-arrow.module.scss';

interface ILinkTextArrow {
  route: string;
  subtitle: string;
  className?: string;
}

const LinkTextArrow: FC<ILinkTextArrow> = ({ route, subtitle, className }) => {
  return (
    <Link href={route} className={`${className} ${styles.linkTextArrow}`}>
      {subtitle}
      <Image
        src={ArrowIcon}
        alt='Стрелка'
        width={16}
        height={16}
        className={styles.linkTextArrow__arrow}
      />
    </Link>
  );
};

export default LinkTextArrow;
