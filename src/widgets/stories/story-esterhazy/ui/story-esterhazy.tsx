import type { FC } from 'react';
import Image from 'next/image';

import BudapestImage from '@/assets/images/stories/esterhazy/budapest.jpg';
import PaulIIIAntonImage from '@/assets/images/stories/esterhazy/paul-III-anton-esterhazy.jpg';
import PalaceImage from '@/assets/images/stories/esterhazy/esterhazy-palace.jpg';
import { ArticleWrapper } from '@/components';

import styles from '../../stories.module.scss';

const StoryEsterhazy: FC = () => {
  return (
    <section className={styles.story}>
      <ArticleWrapper>
        <p>
          История этого десерта не так точна. Некоторые говорят, что название не
          связано с принцем, другие что до сих пор неясно, кто его испек и
          сколько слоев – пять или шесть должно быть в торте. Но одно можно
          сказать наверняка – торт не содержит пшеничной муки и готовится из
          яичных белков, сахара и ореховой муки, прослаивается ванильным кремом
          и покрывается белой помадкой. Это фантастическое, лёгкое, с ароматом
          ванили и грецких орехов блюдо.
        </p>
      </ArticleWrapper>
      <figure className={styles.story__figure}>
        <Image
          src={BudapestImage}
          alt='Будапешт, площадь Октогон - художник Balázs Petheő'
          className={styles.story__image}
        />
        <figcaption className={styles.story__figcaption}>
          Будапешт, площадь Октогон - художник Balázs Petheő
        </figcaption>
      </figure>
      <div className={styles.story__gridFour}>
        <ArticleWrapper>
          <p>
            Этот торт был создан в конце 19 века неизвестным кондитером
            Будапешта и вскоре стал одним из самых известных десертов на землях
            Австрии и Венгрии. Свое название торт получил в честь принца Павла
            Антона III Эстерхази де Галанта, министра иностранных дел
            австрийской империи, который впоследствии стал послом в Москве от
            имени австрийского императора и короля Венгрии Франца Иосифа. Именно
            Павлу Антону хотел выразить свое уважение и почтение кондитер,
            приготовивший чудный десерт.
          </p>
          <p>
            Интересно, что в то время это был один из самых популярных тортов в
            Австро-Венгрии. История гласит, что оригинальный Эстерхази был
            приготовлен из слоеного миндального бисквита с ванильным и коньячным
            кремом. А сегодня в Венгрии миндальную муку часто заменяют грецкими
            орехами, что делает торт гораздо более особенным.
          </p>
        </ArticleWrapper>
        <figure className={styles.story__figure}>
          <Image
            src={PaulIIIAntonImage}
            alt='Paul III Anton, prince Esterházy de Galántha - художник Josef Fischer'
            className={styles.story__image}
          />
          <figcaption className={styles.story__figcaption}>
            Paul III Anton, prince Esterházy de Galántha - художник Josef
            Fischer
          </figcaption>
        </figure>
      </div>
      <ArticleWrapper>
        <p>
          Семья Esterhazy была чрезвычайно богата, скорее всего таковой остается
          и по сей день. С 17 века она была крупнейшим землевладельцем
          Венгерского королевства, в то время когда оно было частью Габсбургской
          монархии. Эстерхази владели многими землями на территории современных
          Австрии, Словакии и Венгрии, ежегодный семейный доход которых иногда
          превышал даже доход императора Австро-Венгрии. Чтобы было понятнее, то
          поместья Эстерхази охватывали сто тридцать деревень, сорок городов и
          тридцать четыре замка. Это очень много.
        </p>
      </ArticleWrapper>
      <figure className={styles.story__figure}>
        <Image
          src={PalaceImage}
          alt='Дворец Эстерхази в Фертеде - величайший комплекс памятников барокко и рококо в Венгрии'
          className={styles.story__image}
        />
        <figcaption className={styles.story__figcaption}>
          Дворец Эстерхази в Фертеде - величайший комплекс памятников барокко и
          рококо в Венгрии
        </figcaption>
      </figure>
      <ArticleWrapper>
        <p>
          Сегодня дворцы и замки находятся под управлением фонда Эстерхази. Там
          проводятся большие туристические и светские мероприятия, ознакомиться с
          которыми можно на их&nbsp;
          <a
            href='https://esterhazy.at/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.story__link}
          >
            сайте
          </a>
          . Многие объекты имеют статус всемирного культурного наследия ЮНЕСКО.
          В архитектуре преобладает стиль Барокко. К посещению крайне
          рекомендуемо. Также на австрийской земле процветает известная
          винодельня Esterhazy, где с 1758 года производят изысканные
          органические, т.е. дорогие вина. Интересующимся указываем ссылку
          на&nbsp;
          <a
            href='https://esterhazywein.at/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.story__link}
          >
            сайт винодельни
          </a>
          .
        </p>
      </ArticleWrapper>
    </section>
  );
};

export default StoryEsterhazy;
