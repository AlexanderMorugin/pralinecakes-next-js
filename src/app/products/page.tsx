import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { Breadcrumbs, CakeBlock, PastryBlock } from '@/widgets';
import {
  META_PRODUCTS_DESCRIPTION,
  META_PRODUCTS_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { CustomLink, PageHeading, PageSubheading, PageText } from '@/entities';

export const metadata: Metadata = {
  title: META_PRODUCTS_TITLE,
  description: META_PRODUCTS_DESCRIPTION,
  keywords: ['продукция', 'пирожные', 'торты'],
  alternates: {
    canonical: 'https://pralinecakes.ru/products/',
  },
  openGraph: {
    title: META_PRODUCTS_TITLE,
    description: META_PRODUCTS_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-products.d08f49e3.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/products/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
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
        <PageSubheading
          title={META_PRODUCTS_TITLE}
          description={META_PRODUCTS_DESCRIPTION}
        />
        <PastryBlock />
        <PageText>
          Здесь показаны только некоторые наши десерты. Чтобы посмотреть
          полностью, нажимайте на&nbsp;
          <CustomLink route={Routes.PASTRY} text='все пирожные' />, также&nbsp;
          <CustomLink route={Routes.CAKES} text='все торты' />
          &nbsp; или листайте справа налево. Дополнительно, пирожные еще можно
          выбрать и&nbsp;
          <CustomLink route={Routes.CATEGORIES} text='по категориям' />.
        </PageText>
        <CakeBlock />
        <PageText>
          Вся продукция нашей компании, приготовлена исключительно ручным
          способом опытными кондитерами, из качественных ингредиентов. Мы несем
          полную гарантию качества наших десертов и соответственно имеем все
          необходимые сертификаты.
        </PageText>
      </MainWrapper>
    </PageWrapper>
  );
}
