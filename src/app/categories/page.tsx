import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { AllCategories, Breadcrumbs } from '@/widgets';
import { PageHeading } from '@/entities';
import {
  META_CATEGORIES_DESCRIPTION,
  META_CATEGORIES_TITLE,
  PAGE_CATEGORIES_TITLE,
  PAGE_MAIN,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';

export const metadata: Metadata = {
  title: META_CATEGORIES_TITLE,
  description: META_CATEGORIES_DESCRIPTION,
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
        <AllCategories />
      </MainWrapper>
    </PageWrapper>
  );
}
