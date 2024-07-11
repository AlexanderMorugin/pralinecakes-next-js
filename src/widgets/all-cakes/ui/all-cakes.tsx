import type { FC } from 'react';

import { cakesData } from '@/mock/cakes-data';
import { ProductBlock } from '@/entities';

import styles from './all-cakes.module.scss';

const AllCakes: FC = () => {
  // const { isScreenMd } = useResize();

  const cakesDataByPrice = [...cakesData].sort((a, b) => a.price - b.price);

  // пагинация
  // const { currentPage, setCurrentPage, itemsPerPage, currentItems, lastPage } =
  //   usePagination(cakesDataByPrice);

  // const dataCakes = isScreenMd ? currentItems : cakesDataByPrice;

  return (
    <section className={styles.allCakes}>
      <ProductBlock
        dataCakes={cakesDataByPrice}
        // dataCakes={cakesData}
        isCake={true}
        // isPastry={false}
      />
      {/* {isScreenMd && (
        <Pagination
          totalItems={cakesData.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      )} */}
    </section>
  );
};

export default AllCakes;
