import type { FC } from 'react';
import Image from 'next/image';

import ImageSquareOne from '@/assets/images/background/back-square-one.png';
import ImageSquareTwo from '@/assets/images/background/back-square-two.png';

import styles from './delivery-widget.module.scss';

const DeliveryWidget: FC = () => {
  return (
    <ul className={styles.deliveryWidget}>
      <li
        className={`${styles.deliveryWidget__block} ${styles.deliveryWidget__block_theme_one}`}
      >
        <Image
          src={ImageSquareTwo}
          alt='Background'
          className={styles.deliveryWidget__squareOne}
        />

        <div
          className={`${styles.deliveryWidget__circle} ${styles.deliveryWidget__circle_theme_one}`}
        >
          1
        </div>

        <article className={styles.deliveryWidget__article}>
          <h3 className={styles.deliveryWidget__title}>
            Довезем в лучшем виде!
          </h3>
          <p className={styles.deliveryWidget__text}>
            Вся продукция доставляется в замороженом виде, а наши автомобили
            оборудованы специальными морозильными камерами. Мы соблюдаем
            температурный режим транспортировки и несем полную гарантию качества
            своей продукции.
          </p>
        </article>
      </li>

      <li
        className={`${styles.deliveryWidget__block} ${styles.deliveryWidget__block_theme_two}`}
      >
        <Image
          src={ImageSquareOne}
          alt='Background'
          className={styles.deliveryWidget__squareTwo}
        />

        <div
          className={`${styles.deliveryWidget__circle} ${styles.deliveryWidget__circle_theme_two}`}
        >
          2
        </div>

        <article className={styles.deliveryWidget__article}>
          <h3 className={styles.deliveryWidget__title}>
            До куда хватит горючки?
          </h3>
          <p className={styles.deliveryWidget__text}>
            Доставляем пирожные и торты по Москве и ближайшие пригородные
            районы. Привезем десерты бесплатно, бережно, качественно и вовремя!
            Условия доставки для более дальних клиентов оговариваются
            дополнительно.
          </p>
        </article>
      </li>

      <li
        className={`${styles.deliveryWidget__block} ${styles.deliveryWidget__block_theme_three}`}
      >
        <Image
          src={ImageSquareOne}
          alt='Background'
          className={styles.deliveryWidget__squareThree}
        />

        <div
          className={`${styles.deliveryWidget__circle} ${styles.deliveryWidget__circle_theme_three}`}
        >
          3
        </div>

        <article className={styles.deliveryWidget__article}>
          <h3 className={styles.deliveryWidget__title}>Берем недорого!</h3>
          <p className={styles.deliveryWidget__text}>
            Доставка осуществляется на следующий день после заказа, но только в
            будние дни и при сумме свыше 7000 рублей. Не стесняйтесь,
            заказывайте побольше, замороженные десерты хранятся долго!
          </p>
        </article>
      </li>

      <li
        className={`${styles.deliveryWidget__block} ${styles.deliveryWidget__block_theme_four}`}
      >
        <Image
          src={ImageSquareTwo}
          alt='Background'
          className={styles.deliveryWidget__squareFour}
        />

        <div
          className={`${styles.deliveryWidget__circle} ${styles.deliveryWidget__circle_theme_four}`}
        >
          4
        </div>

        <article className={styles.deliveryWidget__article}>
          <h3 className={styles.deliveryWidget__title}>
            Отдадим в хорошие руки!
          </h3>
          <p className={styles.deliveryWidget__text}>
            Если десерты требуются срочно или в день заказа - их можно забрать
            самовывозом. Сумма заказа в этом случае значения не имеет, но имейте
            ввиду, что самовывоз возможен в часы работы кондитерской.
          </p>
        </article>
      </li>
    </ul>
  );
};

export default DeliveryWidget;
