import type { FC } from 'react';
import Image from 'next/image';

import DeliveryImage from '@/assets/images/delivery/img-delivery.jpg';
import { PAGE_DELIVERY_TITLE } from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { LinkTextArrow } from '@/entities';

import styles from './delivery-block.module.scss';

const DeliveryBlock: FC = () => {
  return (
    <section className={styles.deliveryBlock}>
      <Image
        src={DeliveryImage as any}
        alt='Доставка'
        priority
        className={styles.deliveryBlock__image}
      />

      <div className={styles.deliveryBlock__container}>
        <article className={styles.deliveryBlock__textBlock}>
          <div className={styles.deliveryBlock__titleBox}>
            <h3 className={styles.deliveryBlock__title}>
              {PAGE_DELIVERY_TITLE}
            </h3>
            <LinkTextArrow
              route={Routes.DELIVERY}
              subtitle='подробнее'
              className={styles.deliveryBlock__linkTextArrow}
            />
          </div>
          <p className={styles.deliveryBlock__text}>
            Доставляем пирожные и торты по Москве и ближайшие пригородные
            районы. Привезем десерты бесплатно, бережно, качественно и вовремя!
          </p>

          <p className={styles.deliveryBlock__textHidden}>
            Вся продукция доставляется в замороженом виде, а наши автомобили
            оборудованы специальными морозильными камерами.
          </p>

          <p className={styles.deliveryBlock__textHidden}>
            Доставка осуществляется на следующий день после заказа.
          </p>
        </article>
      </div>
    </section>
  );
};

export default DeliveryBlock;
