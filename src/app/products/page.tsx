import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { Breadcrumbs, CakeBlock, PastryBlock } from '@/widgets';
import {
  META_PRODUCTS_DESCRIPTION,
  META_PRODUCTS_TITLE,
  PAGE_MAIN,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: META_PRODUCTS_TITLE,
  description: META_PRODUCTS_DESCRIPTION,
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_PRODUCTS_TITLE, route: '' },
];

export default function Products() {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={PAGE_PRODUCTS_TITLE} />
        <PastryBlock />
        <CakeBlock />
      </MainWrapper>
    </PageWrapper>
  );
}
