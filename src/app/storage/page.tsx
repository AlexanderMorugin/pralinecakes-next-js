import type { Metadata } from 'next';

import StorageImage from '@/assets/images/storage/img-storage.jpg';
import { MainWrapper } from '@/components';
import { Breadcrumbs, HeadingImage, StorageWidget } from '@/widgets';
import {
  META_STORAGE_DESCRIPTION,
  META_STORAGE_TITLE,
  PAGE_COOPERATION_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
  PAGE_STORAGE_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: META_STORAGE_TITLE,
  description: META_STORAGE_DESCRIPTION,
  keywords: ['хранение', 'размораживать', 'маркировка'],
  alternates: {
    canonical: 'https://pralinecakes.ru/storage/',
  },
  openGraph: {
    title: META_STORAGE_TITLE,
    description: META_STORAGE_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-cooperation.78ec3c5a.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/storage/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_STORAGE_TITLE, route: '' },
];

export default function Storage() {
  return (
    <MainWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <HeadingImage
        image={StorageImage as any}
        title={PAGE_STORAGE_TITLE}
        isPage={true}
      />
      <PageHeading title={PAGE_STORAGE_TITLE} isPage={true} />
      <StorageWidget />
    </MainWrapper>
  );
}
