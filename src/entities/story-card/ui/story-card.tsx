import { StoryProps } from '@/shared/types/types';

import styles from './story-card.module.scss';

const StoryCard = (itemStory: StoryProps) => {
  return (
    <article className={styles.storyCard}>
      <h2 className={styles.storyCard__title}>{itemStory.title}</h2>
      <p>{itemStory.textOne}</p>
      <p>{itemStory.textTwo}</p>
      <p>{itemStory.textThree}</p>
    </article>
  );
};

export default StoryCard;
