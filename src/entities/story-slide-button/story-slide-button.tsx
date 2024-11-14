import type { FC } from 'react';
import Link from 'next/link';

import styles from './story-slide-button.module.scss';

interface IStorySlideButton {
  route: string;
  title: string;
}

export const StorySlideButton: FC<IStorySlideButton> = ({ route, title }) => {
  return (
    <Link href={route} className={styles.storySlideButton}>
      {title}
    </Link>
  );
};
