import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ArrowIcon from '@/assets/icons/icon-arrow-right.svg';

import styles from './link-button.module.scss';

interface ILinkButton {
  route: string;
  text: string;
  className?: string;
}

const LinkButton: FC<ILinkButton> = ({ route, text, className }) => {
  return (
    <li className={`${className} ${styles.linkButton}`}>
      <Link href={route} className={styles.linkButton__link}>
        <div className={styles.linkButton__arrowBox}>
          <Image
            src={ArrowIcon}
            alt='Стрелка'
            className={styles.linkButton__arrow}
          />
        </div>
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default LinkButton;
