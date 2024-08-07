import { MainWrapper, PageWrapper } from '@/components';
import { cakesData } from '@/mock/cakes-data';
import {
  PAGE_CAKES_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import {
  Breadcrumbs,
  ButtonViewAll,
  PriorityBlock,
  ProductWidget,
} from '@/widgets';

export function generateStaticParams() {
  const cake = cakesData.map((cake) => cake);
  return cake;
}

export function generateMetadata({ params }: { params: { route: string } }) {
  const { route } = params;
  const cake = cakesData.filter((item) => item.route === route);
  const cakeTitle = cake.map((item) => item.title);
  const cakeDescription = cake.map((item) => item.description);
  const cakePrice = cake.map((item) => item.price);
  const cakeImage = cake.map((item) => item.image_meta);
  const cakeUrl = cake.map((item) => item.url);

  return {
    title: `Торт ${cakeTitle} по цене ${cakePrice} руб от кондитерской Пралине.`,
    description: `${cakeDescription} Поставляется в замороженном виде, по оптовой цене.`,
    keywords: ['торт', 'замороженный', 'кондитерская'],
    alternates: {
      canonical: `${cakeUrl}`,
    },
    openGraph: {
      title: `Торт ${cakeTitle} по цене ${cakePrice} руб от кондитерской Пралине.`,
      description: `${cakeDescription} Поставляется в замороженном виде, по оптовой цене.`,
      images: [{ url: `${cakeImage}` }],
      url: `${cakeUrl}`,
      site_name: PAGE_MAIN_TITLE,
      type: 'website',
      locale: 'ru_RU',
    },
  };
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
          <ProductWidget key={item.id} {...item} isCake={true} />
        ))}
        <ButtonViewAll text='Смотреть другие торты' route={Routes.CAKES} />
        <PriorityBlock />
      </MainWrapper>
    </PageWrapper>
  );
}
