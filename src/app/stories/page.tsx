import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { Breadcrumbs, StoriesWidget } from '@/widgets';
import {
  META_STORIES_DESCRIPTION,
  META_STORIES_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_STORIES_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading, PageSubheading } from '@/entities';

export const metadata: Metadata = {
  title: META_STORIES_TITLE,
  description: META_STORIES_DESCRIPTION,
  keywords: ['истории', 'десерты', 'торты', 'пирожные'],
  alternates: {
    canonical: 'https://pralinecakes.ru/stories/',
  },
  openGraph: {
    title: META_STORIES_TITLE,
    description: META_STORIES_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-products.d08f49e3.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/stories/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_STORIES_TITLE, route: '' },
];

export default function Stories() {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={PAGE_STORIES_TITLE} />
        <PageSubheading
          title={META_STORIES_TITLE}
          description={META_STORIES_DESCRIPTION}
        />
        <StoriesWidget />
      </MainWrapper>
    </PageWrapper>
  );
}
