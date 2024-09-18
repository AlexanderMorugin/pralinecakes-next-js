import type { FC } from 'react';

const Carta: FC = () => {
  return (
    <iframe
      src='https://yandex.ru/map-widget/v1/?um=constructor%3A0ee61e64d7fb8c39f68894e4881ada8f708a77e05f35e160fff06c841b09fb45&amp;source=constructor'
      width='100%'
      height='300'
      frameBorder='0'
    ></iframe>
  );
};

export default Carta;
