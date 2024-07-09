import type { FC } from 'react';
import Link from 'next/link';

import { navBarData } from '@/mock/nav-bar-data';

import styles from './header-nav-bar.module.scss';

const HeaderNavBar: FC = () => {
  return (
    <nav>
      <ul className={styles.headerNavBar}>
        {navBarData.map((item, index) => (
          <li key={index}>
            <Link href={item.route} className={styles.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
