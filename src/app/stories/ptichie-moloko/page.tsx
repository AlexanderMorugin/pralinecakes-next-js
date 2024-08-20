import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { Breadcrumbs, ButtonViewAll, StoryPtichka } from '@/widgets';
import {
  META_PTICHKA_DESCRIPTION,
  META_PTICHKA_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_PTICHKA_TITLE,
  PAGE_STORIES_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading, PageSubheading } from '@/entities';

export const metadata: Metadata = {
  title: META_PTICHKA_TITLE,
  description: META_PTICHKA_DESCRIPTION,
  keywords: ['история', 'торт', 'конфеты', 'птичье молоко'],
  alternates: {
    canonical: 'https://pralinecakes.ru/stories/ptichie-moloko/',
  },
  openGraph: {
    title: META_PTICHKA_TITLE,
    description: META_PTICHKA_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/pastry-ptichie-moloko-m.2c4de900.jpeg',
      },
    ],
    url: 'https://pralinecakes.ru/stories/ptichie-moloko/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_STORIES_TITLE, route: Routes.STORIES },
  { heading: PAGE_PTICHKA_TITLE, route: '' },
];

export default function PtichieMoloko() {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={META_PTICHKA_TITLE} isProduct={true} />
        <StoryPtichka />
        <ButtonViewAll text='Истории других десертов' route={Routes.STORIES} />
      </MainWrapper>
    </PageWrapper>
  );
}
