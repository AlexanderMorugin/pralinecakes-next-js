import type { FC } from 'react';

import {
  ADDRESS,
  EMAIL,
  PHONE_LINK,
  PHONE_NUMBER,
  PHONE_NUMBER_SECOND,
  PHONE_SECOND_LINK,
  WHATSAPP_LINK,
  WORK_HOURS,
} from '@/shared/constants/info';
import { ArticleWrapper } from '@/components';

import styles from './contacts-widget.module.scss';

const ContactsWidget: FC = () => {
  return (
    <section className={styles.contactsWidget}>
      <ArticleWrapper>
        <div className={styles.contactsWidget__grid}>
          <span className={styles.contactsWidget__name}>Адрес:</span>
          <p className={styles.contactsWidget__text}>
            <span>{ADDRESS}.&nbsp;</span>
            <span>Мы находимся в ТЦ «Западный» на третьем этаже</span>
          </p>
        </div>
        <div className={styles.contactsWidget__grid}>
          <span className={styles.contactsWidget__name}>Телефоны:</span>

          <div className={styles.contactsWidget__text}>
            <a href={PHONE_LINK} className={styles.contactsWidget__color}>
              {PHONE_NUMBER}
            </a>
            <div className={styles.contactsWidget__break}>;&nbsp;</div>
            <a
              href={PHONE_SECOND_LINK}
              className={styles.contactsWidget__color}
            >
              {PHONE_NUMBER_SECOND}
            </a>
          </div>
        </div>
        <div className={styles.contactsWidget__grid}>
          <span className={styles.contactsWidget__name}>WhatsApp:</span>
          <a
            href={WHATSAPP_LINK}
            rel='noopener noreferrer'
            className={styles.contactsWidget__text}
          >
            {PHONE_NUMBER}
          </a>
        </div>
        <div className={styles.contactsWidget__grid}>
          <span className={styles.contactsWidget__name}>Email:</span>
          <a
            href={`mailto:${EMAIL}`}
            className={`${styles.contactsWidget__text} ${styles.contactsWidget__text_link}`}
          >
            {EMAIL}
          </a>
        </div>
        <div className={styles.contactsWidget__grid}>
          <span className={styles.contactsWidget__name}>График работы:</span>
          <p className={styles.contactsWidget__text}>Ежедневно {WORK_HOURS}</p>
        </div>
      </ArticleWrapper>
    </section>
  );
};

export default ContactsWidget;
