import type { FC } from 'react';

import { pastryData } from '@/mock/pastry-data';
import { ProductBlock } from '@/entities';

import styles from './all-pastry.module.scss';

const AllPastry: FC = () => {
  // const { isScreenMd } = useResize();

  const pastryDataByPrice = [...pastryData].sort((a, b) => a.price - b.price);

  // пагинация
  // const { currentPage, setCurrentPage, itemsPerPage, currentItems, lastPage } =
  //   usePagination(pastryDataByPrice);

  // const dataPastry = isScreenMd ? currentItems : pastryDataByPrice;

  return (
    <section className={styles.allCakes}>
      <ProductBlock
        dataPastry={pastryDataByPrice}
        // isCake={false}
        isPastry={true}
      />

      {/* {isScreenMd && (
        <Pagination
          totalItems={pastryData.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      )} */}
    </section>
  );
};

export default AllPastry;
