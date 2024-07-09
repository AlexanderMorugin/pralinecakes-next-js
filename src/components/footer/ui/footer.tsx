import type { FC } from 'react';

import { AddressBlock, FooterNav, Logo } from '@/entities';
import { footerInfoData } from '@/mock/footer-info-data';
import { footerCatalogData } from '@/mock/footer-catalog-data';

import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logoBox}>
          <Logo footer={true} />
          <p className={styles.footer__logoText}>2024 © ООО «Пралинэ»</p>
          <p className={styles.footer__logoText}>
            Фото с людьми взяты с ресурса&nbsp;
            <a
              href='https://freepik.com'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.footer__logoLink}
            >
              freepik.com
            </a>
          </p>
          <p className={styles.footer__logoText}>
            Создание и поддержка сайта ООО «Пралинэ»
          </p>
        </div>

        <FooterNav
          title='Информация'
          array={footerInfoData}
          className={styles.footer__information}
        />

        <FooterNav
          title='Каталог'
          array={footerCatalogData}
          className={styles.footer__catalog}
        />

        <AddressBlock footer={true} className={styles.footer__address} />
      </div>
    </footer>
  );
};

export default Footer;
