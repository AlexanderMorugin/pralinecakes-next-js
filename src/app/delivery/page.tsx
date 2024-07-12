import type { Metadata } from 'next';

import DeliveryImage from '@/assets/images/delivery/img-delivery.jpg';
import { MainWrapper } from '@/components';
import {
  Breadcrumbs,
  DeliveryWidget,
  HeadingImage,
} from '@/widgets';
import { PAGE_DELIVERY_TITLE, PAGE_MAIN } from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: 'Delivery',
  description: 'Delivery Delivery Delivery',
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
