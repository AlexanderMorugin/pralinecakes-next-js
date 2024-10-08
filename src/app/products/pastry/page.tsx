import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { AllPastry, Breadcrumbs } from '@/widgets';
import {
  META_PASTRY_DESCRIPTION,
  META_PASTRY_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_PASTRY_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading, PageSubheading } from '@/entities';

export const metadata: Metadata = {
  title: META_PASTRY_TITLE,
  description: META_PASTRY_DESCRIPTION,
  keywords: ['пирожные', 'замороженные', 'кондитерская'],
  alternates: {
    canonical: 'https://pralinecakes.ru/products/pastry/',
  },
  openGraph: {
    title: META_PASTRY_TITLE,
    description: META_PASTRY_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/pastry-tri-shokolada-m.c2f4a479.jpeg',
      },
    ],
    url: 'https://pralinecakes.ru/products/pastry/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
  { heading: PAGE_PASTRY_TITLE, route: '' },
];

export default function Pastry() {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={PAGE_PASTRY_TITLE} />
        <PageSubheading
          title={META_PASTRY_TITLE}
          description={META_PASTRY_DESCRIPTION}
        />
        <AllPastry />
      </MainWrapper>
    </PageWrapper>
  );
}
