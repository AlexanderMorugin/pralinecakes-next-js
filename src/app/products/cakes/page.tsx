import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { AllCakes, Breadcrumbs } from '@/widgets';
import {
  META_CAKES_DESCRIPTION,
  META_CAKES_TITLE,
  META_MAIN_TITLE,
  PAGE_CAKES_TITLE,
  PAGE_MAIN,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading, PageSubheading } from '@/entities';

export const metadata: Metadata = {
  title: META_CAKES_TITLE,
  description: META_CAKES_DESCRIPTION,
  keywords: ['торт', 'замороженные', 'кондитерская'],
  alternates: {
    canonical: 'https://pralinecakes.ru/products/cakes/',
  },
  openGraph: {
    title: META_CAKES_TITLE,
    description: META_CAKES_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/cake-lemon-m-new.2662a0eb.jpeg',
      },
    ],
    url: 'https://pralinecakes.ru/products/cakes/',
    siteName: META_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
  { heading: PAGE_CAKES_TITLE, route: '' },
];

export default function Cakes() {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={PAGE_CAKES_TITLE} />
        <PageSubheading
          title={META_CAKES_TITLE}
          description={META_CAKES_DESCRIPTION}
        />
        <AllCakes />
      </MainWrapper>
    </PageWrapper>
  );
}
