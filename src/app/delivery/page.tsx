import type { Metadata } from 'next';

import DeliveryImage from '@/assets/images/delivery/img-delivery.jpg';
import { MainWrapper } from '@/components';
import { Breadcrumbs, DeliveryWidget, HeadingImage } from '@/widgets';
import {
  META_DELIVERY_DESCRIPTION,
  META_DELIVERY_TITLE,
  META_MAIN_TITLE,
  PAGE_DELIVERY_TITLE,
  PAGE_MAIN,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: META_DELIVERY_TITLE,
  description: META_DELIVERY_DESCRIPTION,
  keywords: ['доставка', 'привезем', 'бесплатно'],
  alternates: {
    canonical: 'https://pralinecakes.ru/delivery/',
  },
  openGraph: {
    title: META_DELIVERY_TITLE,
    description: META_DELIVERY_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-delivery.8a2e0bf1.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/delivery/',
    siteName: META_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_DELIVERY_TITLE, route: '' },
];

export default function Delivery() {
  return (
    <MainWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <HeadingImage
        image={DeliveryImage as any}
        title={PAGE_DELIVERY_TITLE}
        isPage={true}
      />
      <PageHeading title={PAGE_DELIVERY_TITLE} isPage={true} />
      <DeliveryWidget />
    </MainWrapper>
  );
}
