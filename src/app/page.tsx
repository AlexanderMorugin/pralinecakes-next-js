import type { Metadata } from 'next';

import MainImage from '@/assets/images/main/img-main.jpg';
import { MainWrapper } from '@/components';
import { PageHeading } from '@/entities';
import { PAGE_MAIN_TITLE } from '@/shared/constants/pages';
import {
  AboutUsBlock,
  CakeBlock,
  CooperationBlock,
  DeliveryBlock,
  HeadingImage,
  PastryBlock,
} from '@/widgets';

export const metadata: Metadata = {
  title: 'Кондитерская Пралине Москва',
  description: 'Кондитерская Пралине Москва',
};

function Home() {
  return (
    <MainWrapper>
      <HeadingImage image={MainImage as any} title={PAGE_MAIN_TITLE} />
      <PageHeading title={PAGE_MAIN_TITLE} />
      <PastryBlock />
      <AboutUsBlock />
      <CakeBlock />
      <CooperationBlock />
      <DeliveryBlock />
    </MainWrapper>
  );
}

export default Home;
