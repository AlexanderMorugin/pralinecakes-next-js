import type { FC } from 'react';
import Image from 'next/image';

import PtichieMainImage from '@/assets/images/stories/ptichie-moloko/main-ptichie.jpg';
import PtasieImage from '@/assets/images/stories/ptichie-moloko/img-ptasie-mlecsko.jpg';
import AnnaImage from '@/assets/images/stories/ptichie-moloko/anna-chulkova.jpg';
import PtichieImage from '@/assets/images/stories/ptichie-moloko/ptichie-moloko-confety.jpg';
import GuralnikImage from '@/assets/images/stories/ptichie-moloko/vladimir-guralnik.jpg';
import { ArticleWrapper } from '@/components';

import styles from '../../stories.module.scss';

const StoryPtichka: FC = () => {
  return (
    <section className={styles.story}>
      <ArticleWrapper>
        <p>
          Торт &quot;Птичье Молоко&quot; - один из самых популярных десертов с
          конца 1970-х годов в СССР. Тогда он был запредельным дефицитом и даже
          роскошью. Выстраивались огромные очереди в магазины, люди стояли по
          много часов, чтобы получить заветный торт. И сейчас расскажем с чего
          все началось.
        </p>
      </ArticleWrapper>
      <figure className={styles.story__figure}>
        <Image
          src={PtichieMainImage}
          alt='Птичье Молоко конфеты времен СССР'
          className={styles.story__image}
        />
        <figcaption className={styles.story__figcaption}>
          &quot;Птичье Молоко&quot; - конфеты времен СССР
        </figcaption>
      </figure>
      <div className={styles.story__gridTwo}>
        <ArticleWrapper>
          <p>
            Впервые &quot;Птичье Молоко&quot; появилось в Польше, в 1936 году.
            Это были конфеты из белоснежного воздушно-молочного суфле, покрытого
            темным горьким шоколадом. Придумал их, на своей частной фабрике,
            потомственный варшавский кондитер Ян Ведель сразу после того как
            побывал в Париже. Как говорится: &quot;Увидеть Париж и
            умереть&quot;. Настолько кондитер был вдохновлен и поражен им, что
            изобрел конфеты &quot;Ptasie Mleczko&quot;, название которых по
            словам автора, он почерпнул в сборнике пословиц Владимира Даля: «Всё
            есть у богатого, а птичьего молока нет». Конфеты быстро стали
            популярными во всей Европе и однажды, в 1967 году, в Чехословакии их
            попробовал министр промышленности СССР Василий Зотов.
          </p>
        </ArticleWrapper>

        <figure className={styles.story__figure}>
          <Image
            src={PtasieImage}
            alt='Конфеты Ptasie Mleczko'
            className={styles.story__image}
          />
          <figcaption className={styles.story__figcaption}>
            Польская кондитерская компания E. Wedel - конфеты &quot;Ptasie
            Mleczko&quot;
          </figcaption>
        </figure>
      </div>
      <div className={styles.story__gridThree}>
        <figure className={`${styles.story__figure} ${styles.story__picture}`}>
          <Image
            src={AnnaImage}
            alt='Анна Чулкова'
            className={styles.story__image}
          />
          <figcaption className={styles.story__figcaption}>
            Создатель самого удачного советского рецепта конфет &quot;Птичье
            Молоко&quot; Анна Чулкова
          </figcaption>
        </figure>
        <ArticleWrapper className={styles.story__text}>
          <p>
            Он привез несколько коробок конфет и дал указание подведомственным
            предприятиям освоить их производство. За работу принялись многие
            кулинары, но в итоге остановились на самом удачном рецепте Анны
            Чулковой, технолога из Владивостока. Она использовала в рецепте
            агар-агар (природный желатин из тихоокеанских красных водорослей),
            вместо обычного желатина. За успешное выполнение задания
            Министерства пищевой промышленности СССР Анна Фёдоровна была
            награждена орденом Ленина. Далее технологию приготовления конфет
            быстро распространили по кондитерским фабрикам всего Советского
            Союза и так началось массовое производство великолепного лакомства.
          </p>
        </ArticleWrapper>
      </div>
      <div className={styles.story__grid}>
        <ArticleWrapper>
          <p>
            В советские годы на всех фабриках, конфеты &quot;Птичье Молоко&quot;
            выпускались с одним названием, в одинаковых коробках, сделанные по
            одному рецепту. Срок годности советского &quot;Птичьего Молока&quot;
            был всего 15 дней, никаких добавок, поэтому тот вкус с сегодняшними
            конфетами сравнить сложно. Сегодня торговая марка &quot;Птичье
            Молоко&quot; принадлежит старейшему кондитерскому предприятию
            страны, фабрике &quot;Рот Фронт&quot;, а владивостокская фабрика
            &quot;Приморский кондитер&quot;, где и трудилась Анна Чулкова,
            производит конфеты с названием &quot;Приморские Классические&quot;.
            Они же и есть первоначальные. Поговаривают, что все таки они самые
            вкусные. Вот ссылка на сайт производителя&nbsp;
            <a
              href='https://primkon.moscow/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.story__link}
            >
              Приморский кондитер
            </a>
          </p>
        </ArticleWrapper>
        <figure className={styles.story__figure}>
          <Image
            src={PtichieImage}
            alt='Конфеты Птичье Молоко времен СССР'
            className={styles.story__image}
          />
          <figcaption className={styles.story__figcaption}>
            Конфеты &quot;Птичье Молоко&quot; времен СССР
          </figcaption>
        </figure>
      </div>
      <ArticleWrapper>
        <p>
          Польская кондитерская фабрика Веделя работает по сей день и конечно же
          производит конфеты &quot;Ptasie Mleczko&quot;. При условии, что
          конфеты &quot;Птичье Молоко&quot;, в наших магазинах имеются в большом
          ассортименте российского производства, самые настойчивые возможно
          смогут купить в России и польские. А мы просто укажем ссылку на сайт
          производителя&nbsp;
          <a
            href='https://wedel.com/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.story__link}
          >
            wedel.com
          </a>
        </p>
      </ArticleWrapper>
      <div className={styles.story__grid}>
        <figure className={styles.story__figure}>
          <Image
            src={GuralnikImage}
            alt='Владимир Гуральник'
            className={styles.story__image}
          />
          <figcaption className={styles.story__figcaption}>
            Владимир Гуральник с тортом &quot;Птичье молоко&quot;
          </figcaption>
        </figure>
        <ArticleWrapper>
          <h3 className={styles.story__title}>Но вернемся к торту.</h3>
          <p>
            В 1978 году, после полугода оттачивания рецептуры, появился
            феноменально-нежный, молочно-шоколадный торт. Разработка его
            принадлежит кондитеру московского ресторана &quot;Прага&quot;
            Владимиру Гуральнику. Ресторан стоит в Москве, на стыке нового
            арбата, старого арбата и арбатской площади. Владимир Михайлович
            потомственный московский кондитер, родители которого в своё время
            тоже работали кондитерами в ресторанах &quot;Москва&quot; и
            &quot;Будапешт&quot;, загорелся идеей воплотить сложный рецепт
            конфет в торте.
          </p>
          <p>
            Гуральник сделал торт прямоугольной формы. Лёгкое молочное суфле
            расположилось на особенном сдобно-сбивном тесте, напоминающим тесто
            кексовое и всё это покрывалось хрустящим тёмным шоколадом. Изделие
            Гуральника получилось настолько вкусным и модным, что его даже, на
            свой день рождения заказывал Леонид Ильич Брежнев. Обычные москвичи
            же стояли часами в очереди у кондитерского магазина
            &quot;Праги&quot;, а многим он не доставался вовсе. Раскупали все.
          </p>
        </ArticleWrapper>
      </div>
      <ArticleWrapper>
        <p>
          В дальнейшем, рецепт Владимира Гуральника был запатентован и
          растиражирован по всем кондитерским фабрикам СССР. Его производили
          много, но несмотря на это, в отдаленных от Москвы регионах, торт все
          равно оставался дефицитом. Добавим, что Владимир Михайлович разработал
          не только этот торт, а и много других, не менее известных, среди
          которых например значится торт &quot;Прага&quot;. Ну а &quot;Птичье
          Молоко&quot; как торт, так и конфеты, сейчас являются обязательным
          атрибутом всех магазинов, а также многих кафе и ресторанов. Вот такое
          оно молоко.
        </p>
      </ArticleWrapper>
    </section>
  );
};

export default StoryPtichka;
