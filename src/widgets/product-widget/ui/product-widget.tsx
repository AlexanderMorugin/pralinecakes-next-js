import Image from 'next/image';
import type { FC } from 'react';

const ProductWidget: FC = ({  ...item }) => {
  return <>
          <Image
          src={item.image_normal}
          alt={item.title}
          priority
          // className={styles.product__image}
        />
  <p>{item.title}</p>
  <p>{item.description}</p>
  <p>{item.condition}</p>
  </>;
};

export default ProductWidget;
