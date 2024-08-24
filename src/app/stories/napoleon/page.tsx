import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import {
  Breadcrumbs,
  ButtonViewAll,
  ProductsForStories,
  StoryNapoleon,
} from '@/widgets';
import {
  META_NAPOLEON_DESCRIPTION,
  META_NAPOLEON_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_NAPOLEON_TITLE,
  PAGE_STORIES_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';
import { pastryData } from '@/mock/pastry-data';
import { cakesData } from '@/mock/cakes-data';

export const metadata: Metadata = {
  title: PAGE_NAPOLEON_TITLE,
  description: META_NAPOLEON_TITLE,
  keywords: ['история', 'торт', 'наполеон'],
  alternates: {
    canonical: 'https://pralinecakes.ru/stories/napoleon/',
  },
  openGraph: {
    title: META_NAPOLEON_TITLE,
    description: META_NAPOLEON_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-ptichie.b6a08eb2.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/stories/napoleon/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_STORIES_TITLE, route: Routes.STORIES },
  { heading: PAGE_NAPOLEON_TITLE, route: '' },
];

export default function Napoleon() {
  const napoleonPastry = pastryData.filter(
    (item) => item.route === 'napoleon'
  );

  const napoleonCake = cakesData.filter(
    (item) => item.route === 'napoleon'
  );

  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={META_NAPOLEON_TITLE} isProduct={true} />
        <StoryNapoleon />
        <ProductsForStories
          dataPastry={napoleonPastry}
          dataCake={napoleonCake}
          title='Очень вкусный "Наполеон" от кондитерской "Пралине"'
        />
        <ButtonViewAll text='Истории других десертов' route={Routes.STORIES} />
      </MainWrapper>
    </PageWrapper>
  );
}
