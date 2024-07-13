import type { Metadata } from 'next';

import MainImage from '@/assets/images/main/img-main.jpg';
import { MainWrapper } from '@/components';
import { PageHeading } from '@/entities';
import { META_MAIN_DESCRIPTION, META_MAIN_TITLE, PAGE_MAIN_TITLE } from '@/shared/constants/pages';
import {
  AboutUsBlock,
  CakeBlock,
  CooperationBlock,
  DeliveryBlock,
  HeadingImage,
  PastryBlock,
} from '@/widgets';

export const metadata: Metadata = {
  title: META_MAIN_TITLE,
  description: META_MAIN_DESCRIPTION,
    // keywords: ['Next.js', 'React', 'JavaScript'],
    // openGraph: {
    //   title: 'Next.js',
    //   description: 'The React Framework for the Web',
    //   url: 'https://nextjs.org',
    //   siteName: 'Next.js',
    //   images: [
    //     {
    //       url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //       width: 800,
    //       height: 600,
    //     },
    //     {
    //       url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //       width: 1800,
    //       height: 1600,
    //       alt: 'My custom alt',
    //     },
    //   ],
    //   locale: 'en_US',
    //   type: 'website',
    // },
};

function Home() {
  return (
    <MainWrapper>
      <HeadingImage image={MainImage as any} title={PAGE_MAIN_TITLE} />
      <PageHeading title={PAGE_MAIN_TITLE} />
      <PastryBlock />
      <AboutUsBlock />
      <CakeBlock />
      <CooperationBlock />
      <DeliveryBlock />
    </MainWrapper>
  );
}

export default Home;
