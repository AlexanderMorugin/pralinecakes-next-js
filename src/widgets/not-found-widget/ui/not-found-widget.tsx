import type { FC } from 'react';
import Link from 'next/link';

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
        <Link href='/' className={styles.notFoundWidget__link}>главную страницу</Link>.
      </p>
    </section>
  );
};

export default NotFoundWidget;
