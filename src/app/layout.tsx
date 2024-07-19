import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer, Header } from '@/components';

import './globals.scss';
import YandexMetrika from '@/components/yandex-metrika/yandex-metrika';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  other: {
    ['yandex-verification']: '870da4657dc940ee',
    ['google-site-verification']: 'joYRyZNufXcpuH3O0Alwiiggy2bwx3lsWu5Br8vKlIw',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <YandexMetrika enabled={true} /> */}
      </body>
    </html>
  );
}
