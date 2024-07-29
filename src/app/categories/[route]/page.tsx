import { categoryData } from '@/mock/category-data';
import { pastryData } from '@/mock/pastry-data';
import {
  META_MAIN_TITLE,
  PAGE_CATEGORIES_TITLE,
  PAGE_MAIN,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { MainWrapper, PageWrapper } from '@/components';
import { Breadcrumbs, Category, ViewAllCategories } from '@/widgets';
import { PageHeading, PageSubheading } from '@/entities';

export function generateStaticParams() {
  const category = categoryData.map((category) => category);
  return category;
}

export function generateMetadata({ params }: { params: { route: string } }) {
  const { route } = params;
  const category = categoryData.filter((item) => item.route === route);
  const categoryName = category.map((item) => item.name);
  const categoryDescription = category.map((item) => item.description);
  const categoryImage = category.map((item) => item.image_meta);
  const categoryUrl = category.map((item) => item.url);

  return {
    title: `Пирожные ${categoryName} от кондитерской Пралине.`,
    description: `${categoryDescription} с ценами, которые готовят в кондитерской Пралине для кафе, баров, пекарен, театров.`,
    keywords: ['пирожные', 'категории'],
    alternates: {
      canonical: `${categoryUrl}`,
    },
    openGraph: {
      title: `Пирожные ${categoryName} от кондитерской Пралине.`,
      description: `${categoryDescription} с ценами, которые готовят в кондитерской Пралине для кафе, баров, пекарен, театров.`,
      images: [{ url: `${categoryImage}` }],
      url: `${categoryUrl}`,
      site_name: META_MAIN_TITLE,
      type: 'website',
      locale: 'ru_RU',
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { route: string };
}) {
  const { route } = params;

  const category = categoryData.filter((item) => item.route === route);
  const categoryName = category.map((item) => item.name);
  const categoryDescription = category.map((item) => item.description);
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
        <PageSubheading
          title={`Категория - Пирожные ${categoryName}. Которые можно купить в кондитерской Пралине.`}
          description={`${categoryDescription}. Приготовленные для предприятий общественного питания.`}
        />
        <Category data={currentArray} />
        <ViewAllCategories />
      </MainWrapper>
    </PageWrapper>
  );
}
