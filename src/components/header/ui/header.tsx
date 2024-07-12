import type { FC } from 'react';

import {
  AddressBlock,
  HeaderConnect,
  // HeaderMobileMenu,
  HeaderNavBar,
  Logo,
} from '@/entities';

import styles from './header.module.scss';
import HeaderMobileMenu from '@/entities/header-mobile-menu';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderMobileMenu />
        <Logo />
        <div className={styles.nav}>
          <AddressBlock />
          <HeaderNavBar />
        </div>
        <HeaderConnect />
      </div>
    </header>
  );
};

export default Header;
