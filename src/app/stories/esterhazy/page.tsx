import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import {
  Breadcrumbs,
  ButtonViewAll,
  ProductsForStories,
  StoryEsterhazy,
} from '@/widgets';
import {
  META_ESTERHAZY_DESCRIPTION,
  META_ESTERHAZY_TITLE,
  PAGE_ESTERHAZY_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_STORIES_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';
import { pastryData } from '@/mock/pastry-data';
import { cakesData } from '@/mock/cakes-data';

export const metadata: Metadata = {
  title: PAGE_ESTERHAZY_TITLE,
  description: META_ESTERHAZY_TITLE,
  keywords: ['история', 'торт', 'эстерхази'],
  alternates: {
    canonical: 'https://pralinecakes.ru/stories/esterhazy/',
  },
  openGraph: {
    title: META_ESTERHAZY_TITLE,
    description: META_ESTERHAZY_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-budapest.46d97d54.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/stories/esterhazy/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_STORIES_TITLE, route: Routes.STORIES },
  { heading: PAGE_ESTERHAZY_TITLE, route: '' },
];

export default function Esterhazy() {
  const esterhaziPastry = pastryData.filter(
    (item) => item.route === 'esterhazi'
  );

  const esterhaziCake = cakesData.filter((item) => item.route === 'esterhazi');

  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={META_ESTERHAZY_TITLE} isProduct={true} />
        <StoryEsterhazy />
        <ProductsForStories
          dataPastry={esterhaziPastry}
          dataCake={esterhaziCake}
          title='Венгерский ореховый десерт производства кондитерской "Пралине"'
        />
        <ButtonViewAll text='Истории других десертов' route={Routes.STORIES} />
      </MainWrapper>
    </PageWrapper>
  );
}
