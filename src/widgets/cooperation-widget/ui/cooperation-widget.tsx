import type { FC } from 'react';

import { CustomLink } from '@/entities';
import { ArticleWrapper } from '@/components';
import Routes from '@/shared/constants/routes';

import styles from './cooperation-widget.module.scss';

const CooperationWidget: FC = () => {
  return (
    <section className={styles.cooperationWidget}>
      <ArticleWrapper className={styles.cooperationWidget__articleWrapper}>
        <p>
          На протяжении многих лет поставляем продукцию заведениям Москвы.
          Дорожим репутацией и настроены на длительное партнерство. Всегда рады
          новым покупателям и надеемся все будут довольны взаимоотношениями!
        </p>
        <p>
          Приглашаем к сотрудничеству кафе, театры, детские развлекательные
          зоны, комплексы, кейтеринговые службы, кофейни, рестораны, бары,
          пекарни. Становитесь клиентом Пралине, приобретайте качественные
          десерты по выгодным оптовым ценам!
        </p>
      </ArticleWrapper>
      <ArticleWrapper className={styles.cooperationWidget__articleWrapper}>
        <p>
          Мы полностью контролируем изготовление сладостей и соблюдаем
          санитарные нормы. Это позволяет достичь оптимального сочетания цены
          качества. Высокий уровень наших тортов увеличит прибыль вашей
          компании!
        </p>
        <p>
          Работаем по договору. Оплата безналичным расчетом, наличными.
          Постоянным контрагентам - отсрочка платежа 5 банковских дней. С
          другими сотрудничаем по 100% предоплате.
        </p>
      </ArticleWrapper>
      <ArticleWrapper className={styles.cooperationWidget__articleWrapper}>
        <p>
          Детально ознакомиться с пирожными поможет бесплатная дегустация.
          Заявку направляйте на почту или мессенджеры.
        </p>
        <p>
          Заказы принимаются в часы работы кондитерской. Доставка осуществляется
          на следующий день. Возможен самовывоз.
        </p>
        <p>
          На сайте можно скачать фото товаров хорошего разрешения для
          дальнейшего использования по вашему желанию.
        </p>
      </ArticleWrapper>
      <ArticleWrapper className={styles.cooperationWidget__articleWrapper}>
        <p>
          Если вы решили сотрудничать с нашей кондитерской и реализовывать наши
          пирожные или торты в своем заведении, рекомендуем ознакомиться с&nbsp;
          <CustomLink
            route={Routes.STORAGE}
            text='правилами хранения замороженных десертов'
          />
          .
        </p>
      </ArticleWrapper>
    </section>
  );
};

export default CooperationWidget;
