import type { Metadata } from 'next';

import CooperationImage from '@/assets/images/cooperation/img-cooperation.jpg';
import { MainWrapper } from '@/components';
import {
  Breadcrumbs,
  CooperationWidget,
  HeadingImage,
  PageHeading,
} from '@/widgets';
import { PAGE_COOPERATION_TITLE, PAGE_MAIN } from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Contacts Contacts Contacts',
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
