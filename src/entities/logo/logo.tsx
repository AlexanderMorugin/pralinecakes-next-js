import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ImageLogo from '@/assets/images/logo/logo-120.png';
import Routes from '@/shared/constants/routes';

import styles from './logo.module.scss';

interface ILogo {
  footer?: boolean;
}

export const Logo: FC<ILogo> = ({ footer = false }) => {
  return (
    <Link href={Routes.HOME} className={styles.logo}>
      <Image
        src={ImageLogo}
        alt='Логотип'
        width={44}
        height={44}
        placeholder='blur'
      />
      <p className={footer ? `${styles.text} ${styles.footer}` : styles.text}>
        <span>Пралине</span>
        <span className={footer ? styles.spanFooter : styles.span}>
          кондитерская
        </span>
      </p>
    </Link>
  );
};
