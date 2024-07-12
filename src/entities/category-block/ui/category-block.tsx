import type { FC } from 'react';

import { CategoryProps } from '@/shared/types/types';
import useCategoryItem from '@/shared/hooks/use-category-item';
import { Scroll } from '@/components';
import { CategoryButton, LinkButton } from '@/entities';
import Routes from '@/shared/constants/routes';
import { PAGE_CATEGORIES_LINK } from '@/shared/constants/pages';

import styles from './category-block.module.scss';

interface ICategoryBlock {
  category?: CategoryProps[];
}

const CategoryBlock: FC<ICategoryBlock> = ({ category }) => {
  const categoryItem = category!.map((item) => item);
  const {
    chocolateItem,
    honeyItem,
    strudelItem,
    fruitItem,
    berryItem,
    sandItem,
    puffItem,
    bisquitItem,
    poppyItem,
    nutItem,
    creamItem,
    yogurtItem,
    sufleItem,
    cheeseItem,
  } = useCategoryItem(categoryItem);

  return (
    <div className={styles.categoryBlock}>
      <h3 className={styles.categoryBlock__title}>
        Пирожные похожих категорий
      </h3>

      <Scroll>
        {chocolateItem &&
          chocolateItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {honeyItem &&
          honeyItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {strudelItem &&
          strudelItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {fruitItem &&
          fruitItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {berryItem &&
          berryItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {sandItem &&
          sandItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {puffItem &&
          puffItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {bisquitItem &&
          bisquitItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {poppyItem &&
          poppyItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {nutItem &&
          nutItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {creamItem &&
          creamItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {yogurtItem &&
          yogurtItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {sufleItem &&
          sufleItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {cheeseItem &&
          cheeseItem.map((item: CategoryProps) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        <LinkButton
          route={Routes.CATEGORIES}
          text={PAGE_CATEGORIES_LINK}
          className={styles.categoryBlock__linkButton}
        />
      </Scroll>
    </div>
  );
};

export default CategoryBlock;
