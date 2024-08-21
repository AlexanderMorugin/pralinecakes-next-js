import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { Breadcrumbs, ButtonViewAll, StoryMuraveinik } from '@/widgets';
import {
  META_MURAVEINIK_DESCRIPTION,
  META_MURAVEINIK_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_MURAVEINIK_TITLE,
  PAGE_STORIES_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: META_MURAVEINIK_TITLE,
  description: META_MURAVEINIK_DESCRIPTION,
  keywords: ['история', 'торт', 'муравейник'],
  alternates: {
    canonical: 'https://pralinecakes.ru/stories/muraveinik/',
  },
  openGraph: {
    title: META_MURAVEINIK_TITLE,
    description: META_MURAVEINIK_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/pastry-ptichie-moloko-m.2c4de900.jpeg',
      },
    ],
    url: 'https://pralinecakes.ru/stories/muraveinik/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_STORIES_TITLE, route: Routes.STORIES },
  { heading: PAGE_MURAVEINIK_TITLE, route: '' },
];

export default function Muraveinik() {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={META_MURAVEINIK_TITLE} isProduct={true} />
        <StoryMuraveinik />
        <ButtonViewAll text='Истории других десертов' route={Routes.STORIES} />
      </MainWrapper>
    </PageWrapper>
  );
}
