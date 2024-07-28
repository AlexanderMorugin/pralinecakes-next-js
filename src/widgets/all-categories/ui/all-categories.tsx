import type { FC } from 'react';

import { categoryData } from '@/mock/category-data';
import { CategoryButton, TextBlock } from '@/entities';
import Routes from '@/shared/constants/routes';

import styles from './all-categories.module.scss';

const AllCategories: FC = () => {
  const categoryDataSliceOne = categoryData?.slice(0, 4);
  const categoryDataSliceTwo = categoryData?.slice(4, 8);
  const categoryDataSliceThree = categoryData?.slice(8, 12);
  const categoryDataSliceFour = categoryData?.slice(12, 16);

  return (
    <section className={styles.allCategories}>
      <ul className={styles.allCategories__list}>
        {categoryDataSliceOne.map((item) => (
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
      <TextBlock>
        Для удобства выбора, мы разбили пирожные по категориям. Многие десерты
        входят сразу в несколько категорий. Например, у бисквитного торта с
        орехами и сливочным кремом, будет три категории.
      </TextBlock>
      <ul className={styles.allCategories__list}>
        {categoryDataSliceTwo.map((item) => (
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
      <TextBlock>
        Один из самых известных и любимых по всему миру десертов - Тирамису,
        входит в три категории: бисквитные, кремовые и сырные. Это подсказка :)
      </TextBlock>
      <ul className={styles.allCategories__list}>
        {categoryDataSliceThree.map((item) => (
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
      <TextBlock>
        Популярный чизкейк входит в категорию &quot;сырные&quot;, т.к. готовится из сыра и
        чаще всего запекается, но также чизкейки бывают холодного приготовления.
        Это тоже вкусно!
      </TextBlock>
      <ul className={styles.allCategories__list}>
        {categoryDataSliceFour.map((item) => (
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
