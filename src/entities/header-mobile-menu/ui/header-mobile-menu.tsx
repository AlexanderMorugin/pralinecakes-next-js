'use client';

import { useEffect, useState, type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { navBarData } from '@/mock/nav-bar-data';

import styles from './header-mobile-menu.module.scss';
import { ADDRESS, COMPANY_NAME, PHONE_NUMBER } from '@/shared/constants/info';
import { HeaderMenuButton } from '@/entities';

const HeaderMobileMenu: FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  // свайп бокового меню
  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;

    document.addEventListener('touchstart', (e) => {
      startTouchX = e.changedTouches[0].pageX;
      startTouchY = e.changedTouches[0].pageY;
    });

    document.addEventListener('touchend', (e) => {
      endTouchX = e.changedTouches[0].pageX;
      endTouchY = e.changedTouches[0].pageY;

      // убирание меню свайпом справа налево
      if (
        startTouchX < 440 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX < startTouchX
      )
        setMenuActive(false);
    });
  }, []);

  return (
    <>
      <HeaderMenuButton
        setMenuActive={setMenuActive}
        menuActive={menuActive}
        onBlur={() => setMenuActive(false)}
      />

      <nav
        className={
          menuActive
            ? `${styles.headerMobileMenu} ${styles.headerMobileMenu_active}`
            : styles.headerMobileMenu
        }
      >
        <div className={styles.headerMobileMenu__blur}>
          <div className={styles.headerMobileMenu__content}>
            <ul>
              {navBarData.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.route}
                    onClick={() => setMenuActive(false)}
                    className={styles.headerMobileMenu__link}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={34}
                      height={34}
                    />
                    <span className={styles.headerMobileMenu__linkTitle}>
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <address className={styles.headerMobileMenu__address}>
              <span>{COMPANY_NAME}</span>
              <span>{ADDRESS}</span>
              <span>{PHONE_NUMBER}</span>
            </address>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderMobileMenu;
