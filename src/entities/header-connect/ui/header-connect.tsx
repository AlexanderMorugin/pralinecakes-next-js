import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { connectData } from '@/mock/connect-data';

import styles from './header-connect.module.scss';

const HeaderConnect: FC = () => {
  return (
    <ul className={styles.headerConnect}>
      {connectData.map((item, index) => (
        <li key={index}>
          <Link href={item.link} className={styles.headerConnect__link}>
            <Image
              src={item.icon}
              alt={item.title}
              width={32}
              height={32}
              className={styles.headerConnect__icon}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderConnect;
