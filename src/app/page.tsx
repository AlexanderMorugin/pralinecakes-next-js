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
  title: `Кондитерская Пралине | ${META_MAIN_TITLE}`,
  description: META_MAIN_DESCRIPTION,
  keywords: ['кондитерская', 'пралине'],
  alternates: {
    canonical: 'https://pralinecakes.ru/',
  },
  openGraph: {
    title: `Кондитерская Пралине | ${META_MAIN_TITLE}`,
    description: META_MAIN_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-main.c25722c4.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
  other: {
    ['yandex-verification']: '870da4657dc940ee',
    ['google-site-verification']: 'joYRyZNufXcpuH3O0Alwiiggy2bwx3lsWu5Br8vKlIw',
  },
};

export default function Home() {
  return (
    <MainWrapper>
      <HeadingImage image={MainImage as any} title={PAGE_MAIN_TITLE} />
      <PageHeading
        isSubtitle={true}
        title={PAGE_MAIN_TITLE}
        subtitle={META_MAIN_TITLE}
        description={META_MAIN_DESCRIPTION}
      />
      <PastryBlock />
      <AboutUsBlock />
      <CakeBlock />
      <CooperationBlock />
      <DeliveryBlock />
    </MainWrapper>
  );
}
