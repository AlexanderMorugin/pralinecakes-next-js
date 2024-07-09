import type { FC } from 'react';

import styles from './header-menu-button.module.scss';

interface IHeaderMenuButton {
  setMenuActive: (menuActive: boolean) => void;
  menuActive: boolean;
  onBlur?: () => void;
}

const HeaderMenuButton: FC<IHeaderMenuButton> = ({
  setMenuActive,
  menuActive,
  onBlur,
}) => {
  return (
    <button
      className={
        menuActive
          ? `${styles.headerMenuButton} ${styles.headerMenuButton_active}`
          : styles.headerMenuButton
      }
      onClick={() => setMenuActive(!menuActive)}
      onBlur={onBlur}
    >
      <span
        className={
          menuActive
            ? `${styles.headerMenuButton__span} ${styles.headerMenuButton__span_active}`
            : styles.headerMenuButton__span
        }
      ></span>
    </button>
  );
};

export default HeaderMenuButton;
