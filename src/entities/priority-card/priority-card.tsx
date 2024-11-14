import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './priority-card.module.scss';

interface IPriorityCard {
  title: string;
  image: string;
  route: string;
}

export const PriorityCard: FC<IPriorityCard> = ({ title, image, route }) => {
  return (
    <Link href={route} className={styles.priorityCard}>
      <Image src={image} alt={title} className={styles.priorityCard__image} />
      <p className={styles.priorityCard__title}>{title}</p>
    </Link>
  );
};
