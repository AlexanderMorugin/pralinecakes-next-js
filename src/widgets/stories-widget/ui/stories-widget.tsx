import type { FC } from 'react';

import { storiesData } from '@/mock/stories-data';
import { StoryCard } from '@/entities';

import styles from './stories-widget.module.scss';

const StoriesWidget: FC = () => {
  return (
    <ul className={styles.storiesWidget}>
      {storiesData.map((story, index) => (
        <StoryCard
          key={index}
          image={story.image}
          route={story.route}
          title={story.title}
          text={story.text}
        />
      ))}
    </ul>
  );
};

export default StoriesWidget;
