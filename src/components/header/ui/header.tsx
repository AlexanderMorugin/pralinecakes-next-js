import type { FC } from 'react';

import {
  AddressBlock,
  HeaderConnect,
  HeaderMobileMenu,
  HeaderNavBar,
  Logo,
} from '@/entities';
import { MediaRendering } from '@/components';
import { SCREEN_M } from '@/shared/constants/screen';

import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MediaRendering minWidth={null} maxWidth={SCREEN_M}>
          <HeaderMobileMenu />
        </MediaRendering>

        <Logo />

        <MediaRendering minWidth={SCREEN_M} maxWidth={null}>
          <div className={styles.nav}>
            <AddressBlock />
            <HeaderNavBar />
          </div>
        </MediaRendering>

        <MediaRendering minWidth={null} maxWidth={SCREEN_M}>
          <HeaderConnect />
        </MediaRendering>
      </div>
    </header>
  );
};

export default Header;
