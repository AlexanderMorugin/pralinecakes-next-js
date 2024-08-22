import { Inter } from 'next/font/google';

import { Footer, Header, YandexMetrika } from '@/components';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

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
        <YandexMetrika enabled={true} />
      </body>
    </html>
  );
}
