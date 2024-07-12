import { MainWrapper, PageWrapper } from '@/components';
import { cakesData } from '@/mock/cakes-data';
import {
  PAGE_CAKES_TITLE,
  PAGE_MAIN,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { Breadcrumbs, ProductWidget } from '@/widgets';

export function generateStaticParams() {
  const cake = cakesData.map((cake) => cake);
  return cake;
}

export default function CakePage({ params }: { params: { route: string } }) {
  const { route } = params;

  const cake = cakesData.filter((item) => item.route === route);
  const cakeTitle = cake.map((item) => item.title);

  const breadcrumbs = [
    { heading: PAGE_MAIN, route: Routes.HOME },
    { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
    { heading: PAGE_CAKES_TITLE, route: Routes.CAKES },
    { heading: cakeTitle, route: '' },
  ];

  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        {cake.map((item) => (
          <ProductWidget
            key={item.id}
            {...item}
            // isCake={true}
          />
        ))}
        {/* <PriorityBlock /> */}
      </MainWrapper>
    </PageWrapper>
  );
}
