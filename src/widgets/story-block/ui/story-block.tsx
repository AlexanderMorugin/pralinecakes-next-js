import type { FC } from 'react';

import { MediaRendering, SliderSwiper } from '@/components';
import { SCREEN_M } from '@/shared/constants/screen';
import { storiesData } from '@/mock/stories-data';

import styles from './story-block.module.scss';

const StoryBlock: FC = () => {
  return (
    <section className={styles.storyBlock}>
      <MediaRendering minWidth={null} maxWidth={SCREEN_M}>
        <SliderSwiper slidesPerView={1} data={storiesData} />
      </MediaRendering>

      <MediaRendering minWidth={SCREEN_M} maxWidth={null}>
        <SliderSwiper slidesPerView={2} data={storiesData} />
      </MediaRendering>
    </section>
  );
};

export default StoryBlock;
