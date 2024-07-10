import type { Metadata } from 'next';

import AboutImage from '@/assets/images/about/img-about.jpg';
import { AboutWidget, Breadcrumbs, HeadingImage, PageHeading } from '@/widgets';
import { MainWrapper } from '@/components';
import { PAGE_ABOUT_TITLE, PAGE_MAIN } from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';

export const metadata: Metadata = {
  title: 'About',
  description: 'About About About',
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
