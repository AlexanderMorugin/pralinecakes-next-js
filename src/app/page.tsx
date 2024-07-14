import type { Metadata } from 'next';

import MainImage from '@/assets/images/main/img-main.jpg';
import { MainWrapper } from '@/components';
import { PageHeading } from '@/entities';
import {
  META_MAIN_DESCRIPTION,
  META_MAIN_TITLE,
  PAGE_MAIN_TITLE,
} from '@/shared/constants/pages';
import {
  AboutUsBlock,
  CakeBlock,
  CooperationBlock,
  DeliveryBlock,
  HeadingImage,
  PastryBlock,
} from '@/widgets';

export const metadata: Metadata = {
  title: META_MAIN_TITLE,
  description: META_MAIN_DESCRIPTION,
  keywords: ['кондитерская', 'пралине'],
  openGraph: {
    title: META_MAIN_TITLE,
    description: META_MAIN_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-main.c25722c4.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/',
    siteName: META_MAIN_TITLE,
  },
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
