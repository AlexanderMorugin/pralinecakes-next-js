import type { Metadata } from 'next';

import CooperationImage from '@/assets/images/cooperation/img-cooperation.jpg';
import { MainWrapper } from '@/components';
import { Breadcrumbs, CooperationWidget, HeadingImage } from '@/widgets';
import {
  META_COOPERATION_DESCRIPTION,
  META_COOPERATION_TITLE,
  PAGE_COOPERATION_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: META_COOPERATION_TITLE,
  description: META_COOPERATION_DESCRIPTION,
  keywords: ['сотрудничество', 'партнерство', 'дегустация'],
  alternates: {
    canonical: 'https://pralinecakes.ru/cooperation/',
  },
  openGraph: {
    title: META_COOPERATION_TITLE,
    description: META_COOPERATION_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-cooperation.78ec3c5a.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/cooperation/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_COOPERATION_TITLE, route: '' },
];

export default function Cooperation() {
  return (
    <MainWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <HeadingImage
        image={CooperationImage as any}
        title={PAGE_COOPERATION_TITLE}
        isPage={true}
      />
      <PageHeading title={PAGE_COOPERATION_TITLE} isPage={true} />
      <CooperationWidget />
    </MainWrapper>
  );
}
