import type { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { StorySlideButton } from '@/entities';

import styles from './story-slide.module.scss';

interface IStorySlide {
  image: StaticImageData;
  route: string;
  title: string;
}

export const StorySlide: FC<IStorySlide> = ({ image, route, title }) => {
  return (
    <li className={styles.storySlide}>
      <Image priority src={image} alt={title} className={styles.storySlide__image} />
      <h3 className={styles.storySlide__title}>{title}</h3>
      <StorySlideButton route={route} title='читать' />
    </li>
  );
};
