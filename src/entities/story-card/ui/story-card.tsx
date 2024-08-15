import { StoryProps } from '@/shared/types/types';

import styles from './story-card.module.scss';

const StoryCard = (itemStory: StoryProps) => {
  return (
    <article className={styles.storyCard}>
      <h2 className={styles.storyCard__title}>{itemStory.title}</h2>
      <p>{itemStory.textOne}</p>
      {itemStory.textTwo && <p>{itemStory.textTwo}</p>}
      {itemStory.textThree && <p>{itemStory.textThree}</p>}
      {itemStory.textFour && <p>{itemStory.textFour}</p>}
      {itemStory.textFive && <p>{itemStory.textFive}</p>}
      {itemStory.textSix && <p>{itemStory.textSix}</p>}
      {itemStory.textSeven && <p>{itemStory.textSeven}</p>}
      {itemStory.textEight && <p>{itemStory.textEight}</p>}
      {itemStory.textNine && <p>{itemStory.textNine}</p>}
      {itemStory.textTen && <p>{itemStory.textTen}</p>}
      {itemStory.textEleven && <p>{itemStory.textEleven}</p>}
      {itemStory.textTwelve && <p>{itemStory.textTwelve}</p>}
    </article>
  );
};

export default StoryCard;
