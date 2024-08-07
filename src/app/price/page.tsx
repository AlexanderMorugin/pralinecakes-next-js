import type { Metadata } from 'next';

import { Breadcrumbs, PriceWidget } from '@/widgets';
import { MainWrapper } from '@/components';
import {
  META_PRICE_DESCRIPTION,
  META_PRICE_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_PRICE_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading, PageSubheading } from '@/entities';

export const metadata: Metadata = {
  title: META_PRICE_TITLE,
  description: META_PRICE_DESCRIPTION,
  keywords: ['прайс-лист', 'пирожные', 'торты'],
  alternates: {
    canonical: 'https://pralinecakes.ru/price/',
  },
  openGraph: {
    title: META_PRICE_TITLE,
    description: META_PRICE_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-main.c25722c4.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/price/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_PRICE_TITLE, route: '' },
];

export default function Price() {
  return (
    <MainWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <PageHeading title={PAGE_PRICE_TITLE} isProduct={true} />
      <PageSubheading
        title={META_PRICE_TITLE}
        description={META_PRICE_DESCRIPTION}
      />
      <PriceWidget />
    </MainWrapper>
  );
}
