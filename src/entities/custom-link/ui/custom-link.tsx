import type { FC } from 'react';
import Link from 'next/link';

import styles from './custom-link.module.scss';

interface ICustomLink {
  text: string;
  route: string;
}

const CustomLink: FC<ICustomLink> = ({ text, route }) => {
  return (
    <Link href={route} className={styles.customLink}>
      {text}
    </Link>
  );
};

export default CustomLink;
