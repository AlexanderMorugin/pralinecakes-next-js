import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { AllCakes, Breadcrumbs } from '@/widgets';
import {
  PAGE_CAKES_TITLE,
  PAGE_MAIN,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: 'Delivery',
  description: 'Delivery Delivery Delivery',
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
        <AllCakes />
      </MainWrapper>
    </PageWrapper>
  );
}
