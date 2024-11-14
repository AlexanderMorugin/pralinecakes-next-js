import type { FC } from 'react';

import { ProductProps } from '@/shared/types/types';
import { ProductCard, ProductHeading, TextBlock } from '@/entities';
import {
  PAGE_CAKES_LINK,
  PAGE_CAKES_TITLE,
  PAGE_PASTRY_LINK,
  PAGE_PASTRY_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';

import styles from './product-block.module.scss';
import Link from 'next/link';

interface IProductBlock {
  dataPastry?: ProductProps[];
  dataCakes?: ProductProps[];
  isLink?: boolean;
  isCake?: boolean;
  isCakeBlock?: boolean;
  isPastry?: boolean;
  isPastryBlock?: boolean;
  isCategory?: boolean;
  className?: string;
}

export const ProductBlock: FC<IProductBlock> = ({
  dataPastry,
  dataCakes,
  isLink,
  isCake = false,
  isCakeBlock = false,
  isPastry = false,
  isPastryBlock = false,
  isCategory = false,
  className,
}) => {
  const dataCakeSliceOne = dataCakes?.slice(0, 8);
  const dataCakeSliceTwo = dataCakes?.slice(8, 16);
  const dataCakeSliceThree = dataCakes?.slice(16, 25);

  const dataPastrySliceOne = dataPastry?.slice(0, 8);
  const dataPastrySliceTwo = dataPastry?.slice(8, 16);
  const dataPastrySliceThree = dataPastry?.slice(16, 24);
  const dataPastrySliceFour = dataPastry?.slice(24, 32);
  const dataPastrySliceFive = dataPastry?.slice(32, 40);
  const dataPastrySliceSix = dataPastry?.slice(40, 49);

  return (
    <div className={`${className} ${styles.productBlock}`}>
      {isCake && (
        <ProductHeading
          title={PAGE_CAKES_TITLE}
          subtitle={PAGE_CAKES_LINK}
          route={Routes.CAKES}
          isLink={isLink}
        />
      )}

      {isPastry && (
        <ProductHeading
          title={PAGE_PASTRY_TITLE}
          subtitle={PAGE_PASTRY_LINK}
          route={Routes.PASTRY}
          isLink={isLink}
          isPastry={isPastry}
        />
      )}

      {isCake && isCakeBlock && (
        <ul className={styles.productBlock__container}>
          {dataCakes?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                route={`/products/cakes/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
        </ul>
      )}

      {isCake && !isCakeBlock && (
        <>
          <ul className={styles.productBlock__container}>
            {dataCakeSliceOne?.map((cake) => (
              <li key={cake.id}>
                <ProductCard
                  route={`/products/cakes/${cake.route}`}
                  image_small={cake.image_small}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  rating={cake.rating}
                />
              </li>
            ))}
          </ul>
          <TextBlock>
            Вкусное, согревающее кондитерское изделие. Всегда приятно выпить
            чашечку чая или кофе и съесть кусочек сочного, сладкого тортика. Это
            праздник, это гости, это неотъемлемая часть теплой встречи друзей,
            родственников и влюбленных! Компания Пралине выпекает шикарные торты
            и купить их можно по низким ценам.
          </TextBlock>
          <ul className={styles.productBlock__container}>
            {dataCakeSliceTwo?.map((cake) => (
              <li key={cake.id}>
                <ProductCard
                  route={`/products/cakes/${cake.route}`}
                  image_small={cake.image_small}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  rating={cake.rating}
                />
              </li>
            ))}
          </ul>
          <TextBlock>
            Все торты мы продаем замороженными, что существенно улучшает срок
            хранения продукции для наших клиентов. Почти все изделия мы режем
            кусочками и купить их можно в виде отдельных десертов. Это так же
            удобно для владельцев кофеен и ресторанов. Загляните на
            страничку&nbsp;
            <Link
              href='/products/pastry/'
              className={styles.productBlock__link}
            >
              наших пирожных
            </Link>
            &nbsp;и выбирайте.
          </TextBlock>
          <ul className={styles.productBlock__container}>
            {dataCakeSliceThree?.map((cake) => (
              <li key={cake.id}>
                <ProductCard
                  route={`/products/cakes/${cake.route}`}
                  image_small={cake.image_small}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  rating={cake.rating}
                />
              </li>
            ))}
          </ul>
        </>
      )}

      {isPastry && isPastryBlock && (
        <ul className={styles.productBlock__container}>
          {dataPastry?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                route={`/products/pastry/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
        </ul>
      )}

      {isPastry && isCategory && (
        <ul className={styles.productBlock__container}>
          {dataPastry?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                route={`/products/pastry/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
        </ul>
      )}

      {isPastry && !isPastryBlock && !isCategory && (
        <>
          <ul className={styles.productBlock__container}>
            {dataPastrySliceOne?.map((cake) => (
              <li key={cake.id}>
                <ProductCard
                  route={`/products/pastry/${cake.route}`}
                  image_small={cake.image_small}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  rating={cake.rating}
                />
              </li>
            ))}
          </ul>
          <TextBlock>
            Некоторые десерты отмечены значком &quot;Хит&quot;. Это значит, что
            данное пирожное пользуется большой популярностью среди наших
            покупателей. Заказывайте хитовые позиции и ваши клиенты всегда будут
            довольны!
          </TextBlock>
          <ul className={styles.productBlock__container}>
            {dataPastrySliceTwo?.map((cake) => (
              <li key={cake.id}>
                <ProductCard
                  route={`/products/pastry/${cake.route}`}
                  image_small={cake.image_small}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  rating={cake.rating}
                />
              </li>
            ))}
          </ul>
          <TextBlock>
            Некоторые пирожные выглядят как кусочки торта? Совершенно верно,
            сначала мы отпекаем целые торты и затем нарезаем их на сегменты,
            чтобы нашим клиентам было удобней их продавать. Ведь каждый десерт
            отдельно упакован и его проще хранить! Загляните на страничку&nbsp;
            <Link href='/products/cakes/' className={styles.productBlock__link}>
              тортов
            </Link>
            .
          </TextBlock>
          <ul className={styles.productBlock__container}>
            {dataPastrySliceThree?.map((cake) => (
              <li key={cake.id}>
                <ProductCard
                  route={`/products/pastry/${cake.route}`}
                  image_small={cake.image_small}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  rating={cake.rating}
                />
              </li>
            ))}
          </ul>
          <TextBlock>
            Конечно же самыми популярными пирожными являются фруктовые и
            шоколадные! Но стоит обратить внимание и на другие десерты.
            Бисквитные, ореховые, сырные, воздушное суфле и многие другие.
            Смотрите&nbsp;
            <Link href='/categories/' className={styles.productBlock__link}>
              все категории
            </Link>
            &nbsp;нашей продукции.
          </TextBlock>
          <ul className={styles.productBlock__container}>
            {dataPastrySliceFour?.map((cake) => (
              <li key={cake.id}>
                <ProductCard
                  route={`/products/pastry/${cake.route}`}
                  image_small={cake.image_small}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  rating={cake.rating}
                />
              </li>
            ))}
          </ul>
          <TextBlock>
            Вся наша продукция поставляется в замороженном виде. Это весьма
            удобно для хранения! Привозим на автомобиле морозильнике, на
            следующий день после заказа. Подробнее об условиях доставки&nbsp;
            <Link href='/delivery/' className={styles.productBlock__link}>
              здесь
            </Link>
          </TextBlock>
          <ul className={styles.productBlock__container}>
            {dataPastrySliceFive?.map((cake) => (
              <li key={cake.id}>
                <ProductCard
                  route={`/products/pastry/${cake.route}`}
                  image_small={cake.image_small}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  rating={cake.rating}
                />
              </li>
            ))}
          </ul>
          <TextBlock>
            Работаем с юр. лицами - кафе, рестораны и другими предприятиями
            общественного питания. Звоните, пишите в мессенджерах, с
            удовольствием ответим на интересующие вопросы. Бесплатно привезем
            качественные&nbsp;
            <Link href='/cooperation/' className={styles.productBlock__link}>
              пирожные на дегустацию
            </Link>
            !
          </TextBlock>
          <ul className={styles.productBlock__container}>
            {dataPastrySliceSix?.map((cake) => (
              <li key={cake.id}>
                <ProductCard
                  route={`/products/pastry/${cake.route}`}
                  image_small={cake.image_small}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  rating={cake.rating}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
