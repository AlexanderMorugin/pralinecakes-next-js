import type { FC } from 'react';

import { categoryData } from '@/mock/category-data';
import { CategoryButton } from '@/entities';
import Routes from '@/shared/constants/routes';

import styles from './all-categories.module.scss';

const AllCategories: FC = () => {
  return (
    <section className={styles.allCategories}>
      <ul className={styles.allCategories__list}>
        {categoryData.map((item) => (
          <li key={item.name}>
            <CategoryButton
              route={`${Routes.CATEGORIES}/${item.route}`}
              name={item.name}
              image={item.image}
              className={styles.allCategories__button}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllCategories;
