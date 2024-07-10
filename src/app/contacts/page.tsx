import Link from 'next/link';
import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { Breadcrumbs, Carta, ContactsWidget, PageHeading } from '@/widgets';
import { PAGE_CONTACTS_TITLE, PAGE_MAIN } from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Contacts Contacts Contacts',
};

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_CONTACTS_TITLE, route: '' },
];

export default function Contacts() {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={PAGE_CONTACTS_TITLE} />
        <ContactsWidget />
      </MainWrapper>
      <Carta />
    </PageWrapper>
  );
}
