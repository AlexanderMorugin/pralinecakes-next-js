import type { FC } from 'react';

import { MediaRendering, SliderSwiper } from '@/components';
import { Size } from '@/shared/constants/screen';
import { storiesData } from '@/mock/stories-data';

import styles from './story-block.module.scss';

const StoryBlock: FC = () => {
  return (
    <section className={styles.storyBlock}>
      <MediaRendering minWidth={null} maxWidth={Size.UNTIL_M}>
        <SliderSwiper slidesPerView={1} data={storiesData} />
      </MediaRendering>

      <MediaRendering minWidth={Size.FROM_M} maxWidth={null}>
        <SliderSwiper slidesPerView={2} data={storiesData} />
      </MediaRendering>
    </section>
  );
};

export default StoryBlock;
