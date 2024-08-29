import type { FC } from 'react';
import Link from 'next/link';

import Image, { StaticImageData } from 'next/image';
import { CustomLink } from '@/entities';

import styles from './story-card.module.scss';

interface IStoryCard {
  image: StaticImageData;
  route: string;
  title: string;
  text?: string;
}

const StoryCard: FC<IStoryCard> = ({ image, route, title, text }) => {
  return (
    <li className={styles.storyCard}>
      <Link href={route} className={styles.storyCard__link}>
        <Image src={image} alt={title} className={styles.storyCard__image} />
      </Link>
      <article className={styles.storyCard__article}>
        <h2 className={styles.storyCard__title}>{title}</h2>
        <p className={styles.storyCard__text}>
          {text}&nbsp;&nbsp;
          <CustomLink route={route} text='Читать историю...' />
        </p>
      </article>
    </li>
  );
};

export default StoryCard;
