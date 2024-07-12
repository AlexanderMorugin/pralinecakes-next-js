import type { FC } from 'react';



import styles from './category.module.scss';
import { ProductProps } from '@/shared/types/types';
import useShuffle from '@/shared/hooks/use-shuffle';
import { ProductBlock } from '@/entities';

interface ICategory {
  data: ProductProps[];
}

const Category: FC<ICategory> = ({ data }) => {
  // const { isScreenMd } = useResize();
  const shuffledData = useShuffle(data);

  // пагинация
  // const { currentPage, setCurrentPage, itemsPerPage, currentItems, lastPage } =
  //   usePagination(shuffledData);

  // const dataPastry = isScreenMd ? currentItems : shuffledData;

  return (
    <section className={styles.category}>
      <ProductBlock dataPastry={shuffledData} isCake={false} isPastry={true} />
      {/* {data.length >= 5 && isScreenMd && (
        <Pagination
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      )} */}
    </section>
  );
};

export default Category;
