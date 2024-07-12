import type { Metadata } from 'next';

import { categoryData } from '@/mock/category-data';
import { pastryData } from '@/mock/pastry-data';
import { PAGE_CATEGORIES_TITLE, PAGE_MAIN, PAGE_PRODUCTS_TITLE } from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { MainWrapper, PageWrapper } from '@/components';
import { Breadcrumbs, Category } from '@/widgets';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: 'Delivery',
  description: 'Delivery Delivery Delivery',
};

export function generateStaticParams() {
  const category = categoryData.map((category) => category);
  return category;
}

export default function CakePage({ params }: { params: { route: string } }) {
  const { route } = params;

  const category = categoryData.filter((item) => item.route === route);
  const categoryName = category.map((item) => item.name);
  const currentArray = pastryData.filter((item) =>
    item.type.includes(route || '#')
  );

  const breadcrumbs = [
    { heading: PAGE_MAIN, route: Routes.HOME },
    { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
    { heading: PAGE_CATEGORIES_TITLE, route: Routes.CATEGORIES },
    { heading: categoryName, route: '' },
  ];

  return (
    <PageWrapper>
    <Breadcrumbs links={breadcrumbs} />
    <MainWrapper>
      <PageHeading title={`Пирожные ${categoryName}`} />
      <Category data={currentArray} />
    </MainWrapper>
  </PageWrapper>
  );
}
