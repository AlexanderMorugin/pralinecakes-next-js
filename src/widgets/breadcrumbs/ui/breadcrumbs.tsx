import type { FC } from 'react';
import Link from 'next/link';

import styles from './breadcrumbs.module.scss';

type TLinks = {
  heading: string | string[];
  route: string;
};

interface IBreadCrumbs {
  links: TLinks[];
}

const Breadcrumbs: FC<IBreadCrumbs> = ({ links }) => {
  return (
    <ul className={styles.breadcrumbs}>
      {links.map(
        (link, index) =>
          (index !== links.length - 1 && (
            <li key={link.route}>
              <Link href={link.route} className={styles.breadcrumbs__link}>
                {link.heading}
              </Link>
              <span className={styles.breadcrumbs__span}>
                &nbsp;&#8250;&nbsp;
              </span>
            </li>
          )) || (
            <li key={link.route} className={styles.breadcrumbs__span}>
              {link.heading}
            </li>
          )
      )}
    </ul>
  );
};

export default Breadcrumbs;
