import type { FC } from 'react';
import Image from 'next/image';

import { connectData } from '@/mock/connect-data';

import styles from './header-connect.module.scss';

export const HeaderConnect: FC = () => {
  return (
    <ul className={styles.headerConnect}>
      {connectData.map((item, index) => (
        <li key={index}>
          <a
            href={item.link}
            rel='noopener noreferrer'
            className={styles.headerConnect__link}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={32}
              height={32}
              className={styles.headerConnect__icon}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
