import type { FC } from 'react';
import Link from 'next/link';

import Routes from '@/shared/constants/routes';

import styles from './about-us-block.module.scss';

const AboutUsBlock: FC = () => {
  return (
    <section className={styles.aboutUsBlock}>
      <p className={styles.aboutUsBlock__text}>
        <span className={styles.aboutUsBlock__marksFirst}>„</span>
        Мы стабильная команда профессиональных кондитеров обладающих большим
        опытом. В десертах используем натуральные ингредиенты. Всё готовится
        исключительно ручным способом, приобретая шарм изысканного
        ресторана...&nbsp;
        <Link href={Routes.ABOUT} className={styles.aboutUsBlock__link}>
          далее о нас
        </Link>
        <span className={styles.aboutUsBlock__marksLast}>“</span>
      </p>
    </section>
  );
};

export default AboutUsBlock;
