import type { FC } from 'react';

import { CustomLink } from '@/entities';
import Routes from '@/shared/constants/routes';

import styles from './not-found-widget.module.scss';

const NotFoundWidget: FC = () => {
  return (
    <section className={styles.notFoundWidget}>
      <h1 className={styles.notFoundWidget__title}>
        404 - Страница не найдена
      </h1>
      <p>
        К сожалению, запрашиваемая Вами страница не найдена. Пожалуйста,
        перейдите в существующий раздел или на&nbsp;
        <CustomLink route={Routes.HOME} text='главную страницу' />.
      </p>
    </section>
  );
};

export default NotFoundWidget;
