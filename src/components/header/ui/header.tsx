import type { FC } from 'react';

import {
  AddressBlock,
  HeaderConnect,
  HeaderMobileMenu,
  HeaderNavBar,
  Logo,
} from '@/entities';

import styles from './header.module.scss';

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

        {/* {isScreenMd ? (
          <div className={styles.nav}>
            <AddressBlock />
            <HeaderNavBar />
          </div>
        ) : (
          <HeaderConnect data={headerConnectData} />
        )} */}
      </div>
    </header>
  );
};

export default Header;
