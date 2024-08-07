import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { AllCategories, Breadcrumbs } from '@/widgets';
import { PageHeading, PageSubheading } from '@/entities';
import {
  META_CATEGORIES_DESCRIPTION,
  META_CATEGORIES_TITLE,
  PAGE_CATEGORIES_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';

export const metadata: Metadata = {
  title: META_CATEGORIES_TITLE,
  description: META_CATEGORIES_DESCRIPTION,
  keywords: ['категории', 'пирожные'],
  alternates: {
    canonical: 'https://pralinecakes.ru/categories/',
  },
  openGraph: {
    title: META_CATEGORIES_TITLE,
    description: META_CATEGORIES_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-categories.afe5266c.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/categories/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
  { heading: PAGE_CATEGORIES_TITLE, route: '' },
];

export default function Categories() {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={PAGE_CATEGORIES_TITLE} />
        <PageSubheading
          title={META_CATEGORIES_TITLE}
          description={META_CATEGORIES_DESCRIPTION}
        />
        <AllCategories />
      </MainWrapper>
    </PageWrapper>
  );
}
