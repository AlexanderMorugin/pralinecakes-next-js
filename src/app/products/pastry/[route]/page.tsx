import { MainWrapper, PageWrapper } from '@/components';
import { pastryData } from '@/mock/pastry-data';
import {
  META_MAIN_TITLE,
  PAGE_MAIN,
  PAGE_PASTRY_TITLE,
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
  const pastry = pastryData.map((pastry) => pastry);
  return pastry;
}

export function generateMetadata({ params }: { params: { route: string } }) {
  const { route } = params;
  const pastry = pastryData.filter((item) => item.route === route);
  const pastryTitle = pastry.map((item) => item.title);
  const pastryDescription = pastry.map((item) => item.description);
  const pastryPrice = pastry.map((item) => item.price);
  const pastryImage = pastry.map((item) => item.image_meta);
  const pastryUrl = pastry.map((item) => item.url);

  return {
    title: `Пирожное ${pastryTitle} по цене от ${pastryPrice} руб приготовленное кондитерской Пралине.`,
    description: `${pastryDescription} Продукция замороженная, по недорогим ценам.`,
    keywords: ['пирожное', 'замороженное', 'кондитерская'],
    alternates: {
      canonical: `${pastryUrl}`,
    },
    openGraph: {
      title: `Пирожное ${pastryTitle} по цене от ${pastryPrice} руб приготовленное кондитерской Пралине.`,
      description: `${pastryDescription} Продукция замороженная, по недорогим ценам.`,
      images: [{ url: `${pastryImage}` }],
      url: `${pastryUrl}`,
      site_name: META_MAIN_TITLE,
      type: 'website',
      locale: 'ru_RU',
    },
  };
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
        <ButtonViewAll text='Смотреть другие пирожные' route={Routes.PASTRY} />
        <PriorityBlock />
      </MainWrapper>
    </PageWrapper>
  );
}
