import type { FC } from 'react';

import { Logo } from '@/entities';

import styles from './header.module.scss';


const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <Logo />
</div>
    </header>
  );
};

export default Header;
