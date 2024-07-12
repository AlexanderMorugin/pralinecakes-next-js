import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { pastryData } from '@/mock/pastry-data';
import {
  PAGE_MAIN,
  PAGE_PASTRY_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { Breadcrumbs, ProductWidget } from '@/widgets';

export const metadata: Metadata = {
  title: 'Delivery',
  description: 'Delivery Delivery Delivery',
};

export function generateStaticParams() {
  const pastry = pastryData.map((pastry) => pastry);
  return pastry;
}

export default function PastryPage({ params }: { params: { route: string } }) {
  const { route } = params;

  const pastry = pastryData.filter((item) => item.route === route);
  const pastryTitle = pastry.map((item) => item.title);

  const breadcrumbs = [
    { heading: PAGE_MAIN, route: Routes.HOME },
    { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
    { heading: PAGE_PASTRY_TITLE, route: Routes.PASTRY },
    { heading: pastryTitle, route: '' },
  ];

  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        {pastry.map((item) => (
          <ProductWidget key={item.id} {...item} isPastry={true} />
        ))}
        {/* <PriorityBlock /> */}
      </MainWrapper>
    </PageWrapper>
  );
}
