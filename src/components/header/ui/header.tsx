import type { FC } from 'react';

import { AddressBlock, HeaderConnect, HeaderNavBar, Logo } from '@/entities';
import { MediaRendering } from '@/components';
import { Size } from '@/shared/constants/screen';
import { HeaderMobileMenu } from '@/entities/header-mobile-menu/header-mobile-menu';

import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MediaRendering minWidth={null} maxWidth={Size.UNTIL_M}>
          <HeaderMobileMenu />
        </MediaRendering>

        <Logo />

        <MediaRendering minWidth={Size.FROM_M} maxWidth={null}>
          <div className={styles.nav}>
            <AddressBlock />
            <HeaderNavBar />
          </div>
        </MediaRendering>

        <MediaRendering minWidth={null} maxWidth={Size.UNTIL_M}>
          <HeaderConnect />
        </MediaRendering>
      </div>
    </header>
  );
};

export default Header;
