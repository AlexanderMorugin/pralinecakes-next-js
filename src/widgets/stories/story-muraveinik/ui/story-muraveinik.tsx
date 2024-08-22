import type { FC } from 'react';
import Image from 'next/image';

import DomovodstvoImage from '@/assets/images/stories/muraveinik/main-domovodstvo.jpg';
import MuraveinikImage from '@/assets/images/stories/muraveinik/main-muraveinik.jpg';
import AnnaImage from '@/assets/images/stories/ptichie-moloko/anna-chulkova.jpg';
import PtichieImage from '@/assets/images/stories/ptichie-moloko/ptichie-moloko-confety.jpg';
import GuralnikImage from '@/assets/images/stories/ptichie-moloko/vladimir-guralnik.jpg';
import { ArticleWrapper } from '@/components';

import styles from '../../stories.module.scss';

const StoryMuraveinik: FC = () => {
  return (
    <section className={styles.story}>
      <ArticleWrapper>
        <p>
          Поговорим о недавних временах нашей страны, 1970-х и 1980-х годах.
          Многим из нас известно, что во времена СССР, наши люди жили дружно и
          счастливо! Не было ни бедных, ни богатых и все были практически
          одинаковы. У каждого была четкая уверенность в завтрашнем дне! А вот с
          товарами в магазинах было не совсем так хорошо. Нет, продуктов конечно
          же хватало, но вот чего-то особенного было маловато.
        </p>
      </ArticleWrapper>
      <figure className={styles.story__figure}>
        <Image
          src={DomovodstvoImage}
          alt='Уроки домоводства в школах времен СССР'
          className={styles.story__image}
        />
        <figcaption className={styles.story__figcaption}>
          Уроки домоводства в школах времен СССР
        </figcaption>
      </figure>
      <ArticleWrapper>
        <p>
          В школе, мальчиков на уроках труда учили работать напильником,
          рубанком и даже водить самый настоящий трактор. Для девочек же были
          уроки домоводства, на которых их учили становиться хозяйками. Учили
          шить, вязать и конечно же готовить. Это была отличная подготовка для
          будущей взрослой семейной жизни. Девочки приготовив на уроках
          домоводства что-то вкусненькое, угощали своими изделиями и мальчиков.
        </p>
        <p>
          Затем дети взрослели, становились мужьями, женами, мамами и папами, с
          багажом самых основных навыков. Девушки умели вкусно готовить, в том
          числе и нехитрые тортики. Особенно полюбился им один очень вкусный и
          совершенно простой торт.
        </p>
      </ArticleWrapper>
      <figure className={styles.story__figure}>
        <Image
          src={MuraveinikImage}
          alt='Рисунок муравейника'
          className={styles.story__image}
        />
        <figcaption className={styles.story__figcaption}>
          Рисунок муравейника
        </figcaption>
      </figure>
      <ArticleWrapper>
        <p>
          Торт состоял из кусочков обычного печенья, смешанного с кремом из
          сгущенного молока, сливочного масла, сахарной карамели или шоколада.
          Торт получался вязким, не рыхлым. Его формовали в виде пирамидки и
          ставили на некоторое время в холодильник. Затем украсив подавали к
          столу. Это был чудесный, вкусный торт и назывался он
          &quot;Муравейник&quot;, т.к. и правда был похож на муравейник в лесу.
        </p>
        <p>
          В 2000-х годах этот совсем чуть-чуть подзабытый торт, снова вошел в
          обиход, готовят который уже не домашние хозяйки, а целые кондитерские
          цеха и фабрики. Сегодня &quot;Муравейник&quot; часто встречается в
          кофейнях и пользуется большим спросом!
        </p>
      </ArticleWrapper>
    </section>
  );
};

export default StoryMuraveinik;
