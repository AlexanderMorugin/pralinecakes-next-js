import type { FC } from 'react';

import Routes from '@/shared/constants/routes';
import { CustomLink } from '@/entities';

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
        <CustomLink route={Routes.ABOUT} text='далее о нас' />
        <span className={styles.aboutUsBlock__marksLast}>“</span>
      </p>
    </section>
  );
};

export default AboutUsBlock;
