import type { Metadata } from 'next';

import Image from 'next/image';

import Link from 'next/link';

import styles from './page.module.css';
import Routes from '@/shared/constants/routes';

export const metadata: Metadata = {
  title: 'Кондитерская Пралине Москва',
  description: 'Кондитерская Пралине Москва',
};

function Home() {
  return (
    <>
      <Link href={Routes.ABOUT}>О нас</Link>
      <Link href={Routes.CONTACTS}>Контакты</Link>
      <Link href={Routes.DELIVERY}>Доставка</Link>
      <Link href={Routes.COOPERATION}>Сотрудничество</Link>
      <Link href={Routes.PRODUCTS}>Продукция</Link>
      <Link href={Routes.CATEGORIES}>Категории</Link>
    </>
  );
}

export default Home;
