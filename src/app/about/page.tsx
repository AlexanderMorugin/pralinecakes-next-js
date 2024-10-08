import type { Metadata } from 'next';

import AboutImage from '@/assets/images/about/img-about.jpg';
import { AboutWidget, Breadcrumbs, HeadingImage } from '@/widgets';
import { MainWrapper } from '@/components';
import {
  META_ABOUT_DESCRIPTION,
  META_ABOUT_TITLE,
  PAGE_ABOUT_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: META_ABOUT_TITLE,
  description: META_ABOUT_DESCRIPTION,
  keywords: ['производим', 'профессиональных', 'кондитерская'],
  alternates: {
    canonical: 'https://pralinecakes.ru/about/',
  },
  openGraph: {
    title: META_ABOUT_TITLE,
    description: META_ABOUT_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-about.9fa134f6.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/about/',
    siteName: PAGE_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_ABOUT_TITLE, route: '' },
];

export default function About() {
  return (
    <MainWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <HeadingImage
        image={AboutImage as any}
        title={PAGE_ABOUT_TITLE}
        isPage={true}
      />
      <PageHeading title={PAGE_ABOUT_TITLE} isPage={true} />
      <AboutWidget />
    </MainWrapper>
  );
}
