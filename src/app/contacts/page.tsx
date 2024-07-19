import type { Metadata } from 'next';

import { MainWrapper, PageWrapper } from '@/components';
import { Breadcrumbs, Carta, ContactsWidget } from '@/widgets';
import {
  META_CONTACTS_DESCRIPTION,
  META_CONTACTS_TITLE,
  META_MAIN_TITLE,
  PAGE_CONTACTS_TITLE,
  PAGE_MAIN,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';
import { PageHeading } from '@/entities';

export const metadata: Metadata = {
  title: META_CONTACTS_TITLE,
  description: META_CONTACTS_DESCRIPTION,
  keywords: ['контакты', 'адрес', 'телефон'],
  alternates: {
    canonical: 'https://pralinecakes.ru/contacts/',
  },
  openGraph: {
    title: META_CONTACTS_TITLE,
    description: META_CONTACTS_DESCRIPTION,
    images: [
      {
        url: 'https://pralinecakes.ru/_next/static/media/meta-contacts.2e771d05.jpg',
      },
    ],
    url: 'https://pralinecakes.ru/contacts/',
    siteName: META_MAIN_TITLE,
    type: 'website',
    locale: 'ru_RU',
  },
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
