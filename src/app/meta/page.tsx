import type { Metadata } from 'next';
import Image from 'next/image';

import MainImage from '@/assets/images/main/meta-main.jpg';
import AboutImage from '@/assets/images/about/meta-about.jpg';
import ProductsImage from '@/assets/images/products/meta-products.jpg';
import DeliveryImage from '@/assets/images/delivery/meta-delivery.jpg';
import CooperationImage from '@/assets/images/cooperation/meta-cooperation.jpg';
import CategoriesImage from '@/assets/images/category/meta-categories.jpg';
import ContactsImage from '@/assets/images/contacts/meta-contacts.jpg';
import StoriesImage from '@/assets/images/stories/meta-stories.jpg';
import StoryPtichkaImage from '@/assets/images/stories/ptichie-moloko/meta-ptichie.jpg';
import StoryMuraveinikImage from '@/assets/images/stories/muraveinik/meta-muraveinik.jpg';
import StoryNapoleonImage from '@/assets/images/stories/napoleon/meta-napoleon.jpg';
import StoryEsterhazyImage from '@/assets/images/stories/esterhazy/meta-budapest.jpg';

import styles from './page.module.scss';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Meta() {
  return (
    <div className={styles.page}>
      <Image src={MainImage} alt='image' />
      <Image src={AboutImage} alt='image' />
      <Image src={ProductsImage} alt='image' />
      <Image src={DeliveryImage} alt='image' />
      <Image src={CooperationImage} alt='image' />
      <Image src={CategoriesImage} alt='image' />
      <Image src={ContactsImage} alt='image' />
      <Image src={StoriesImage} alt='image' />
      <Image src={StoryPtichkaImage} alt='image' />
      <Image src={StoryMuraveinikImage} alt='image' />
      <Image src={StoryNapoleonImage} alt='image' />
      <Image src={StoryEsterhazyImage} alt='image' />
    </div>
  );
}
