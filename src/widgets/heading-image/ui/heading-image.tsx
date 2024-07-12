import type { FC } from 'react';
import Image from 'next/image';

import styles from './heading-image.module.scss';

interface IHeadingImage {
  image: string;
  title: string;
  isPage?: boolean;
}

const HeadingImage: FC<IHeadingImage> = ({
  image,
  title,
  isPage = false,
}) => {
  return (
    <section className={styles.headingImage}>
      <Image
        src={image}
        alt={title}
        priority
        className={
            isPage
              ? `${styles.headingImage__image} ${styles.headingImage__image_isPage}`
              : styles.headingImage__image
         }
      />
    </section>
  );
};

export default HeadingImage;
