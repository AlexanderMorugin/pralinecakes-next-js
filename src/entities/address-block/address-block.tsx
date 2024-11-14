import type { FC } from 'react';

import {
  ADDRESS,
  EMAIL,
  PHONE_NUMBER,
  WORK_HOURS,
} from '@/shared/constants/info';

import styles from './address-block.module.scss';

interface IAddressBlock {
  footer?: boolean;
  className?: string;
}

export const AddressBlock: FC<IAddressBlock> = ({
  footer = false,
  className,
}) => {
  return (
    <address
      className={
        footer
          ? `${className} ${styles.addressBlock} ${styles.footer}`
          : `${styles.addressBlock}`
      }
    >
      <span>{ADDRESS}</span>
      <span className={styles.span}>{PHONE_NUMBER}</span>
      <span>{EMAIL}</span>
      <span>{WORK_HOURS}</span>
    </address>
  );
};
