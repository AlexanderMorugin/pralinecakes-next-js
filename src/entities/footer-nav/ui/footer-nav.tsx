import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './footer-nav.module.scss';

interface IArray {
  icon: string;
  title: string;
  route: string;
}

interface IFooterNav {
  title: string;
  array: IArray[];
  className?: string;
}

const FooterNav: FC<IFooterNav> = ({ title, array, className }) => {
  return (
    <nav className={`${className} ${styles.footerNav} `}>
      <h3 className={styles.footerNav__title}>{title}</h3>
      <ul className={styles.footerNav__list}>
        {array?.map((item, index) => (
          <li key={index}>
            <Link href={item.route} className={styles.footerNav__link}>
              <Image src={item.icon} alt={item.title} width={20} height={20} />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
