import type { FC } from 'react';

import { PAGE_CAKES_TITLE, PAGE_PASTRY_TITLE } from '@/shared/constants/pages';
import { cakesData } from '@/mock/cakes-data';
import { PriceBlock } from '@/entities';
import { pastryData } from '@/mock/pastry-data';

import styles from './price-widget.module.scss';

const PriceWidget: FC = () => {
  const cakesDataByPrice = [...cakesData].sort((a, b) => a.price - b.price);
  const pastryDataByPrice = [...pastryData].sort((a, b) => a.price - b.price);

  return (
    <section className={styles.priceWidget}>
      <PriceBlock
        title={PAGE_PASTRY_TITLE}
        dataPastry={pastryDataByPrice}
        isPastry={true}
      />
      <PriceBlock
        title={PAGE_CAKES_TITLE}
        dataCakes={cakesDataByPrice}
        isCake={true}
      />
    </section>
  );
};

export default PriceWidget;
