'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowRight from '@/assets/icons/icon-arrow.svg';
import { StorySlide } from '@/entities';
import { StoryProps } from '@/shared/types/types';

import styles from './slider-swiper.module.scss';

interface ISliderSwiper {
  slidesPerView: number;
  data: StoryProps[];
}

const SliderSwiper: FC<ISliderSwiper> = ({ slidesPerView, data }) => {
  return (
    <Swiper
      loop={true}
      spaceBetween={20}
      slidesPerView={slidesPerView}
      navigation={{
        nextEl: '.button-next-slide',
        prevEl: '.button-prev-slide',
      }}
      pagination={{
        el: '.pagination',
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className={`mySwiper ${styles.swiper}`}
    >
      <ul className={styles.swiperSlides}>
        {data.map((story, index) => (
          <SwiperSlide key={index}>
            <StorySlide
              image={story.image}
              route={story.route}
              title={story.title}
            />
          </SwiperSlide>
        ))}
      </ul>

      <div className={styles.controlers}>
        <div className={`button-prev-slide ${styles.button}`}>
          <Image
            src={ArrowRight}
            alt={'ArrowRight'}
            className={styles.arrowPrev}
          />
        </div>
        <div className={`button-next-slide ${styles.button}`}>
          <Image
            src={ArrowRight}
            alt={'ArrowRight'}
            className={styles.arrowNext}
          />
        </div>
      </div>

      <div className={`pagination ${styles.pagination}`}></div>
    </Swiper>
  );
};

export default SliderSwiper;
