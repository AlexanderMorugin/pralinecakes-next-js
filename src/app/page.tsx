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
    <main className={styles.home}>
      <Link href={Routes.ABOUT}>
        О нас
      </Link>
      <Link href={Routes.CONTACTS}>
        Контакты
      </Link>
      <Link href={Routes.DELIVERY}>
        Доставка
      </Link>
      <Link href={Routes.COOPERATION}>
        Сотрудничество
      </Link>
      <Link href={Routes.PRODUCTS}>
        Продукция
      </Link>
      <Link href={Routes.CATEGORIES}>
        Категории
      </Link>
    </main>

    //     <main className={styles.main}>
    //      <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    // </main>
  );
}

export default Home;
