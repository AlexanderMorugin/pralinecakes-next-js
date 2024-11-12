'use client';

import { useEffect, useState, type FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { ModalOverlay } from '@/components';
import ModalButton from '@/entities/modal-button';

import styles from './product-modal.module.scss';

interface IProductModal {
  image: string | StaticImageData;
  title: string;
  isCake?: boolean;
  isPastry?: boolean;
}

const ProductModal: FC<IProductModal> = ({
  image,
  title,
  isCake,
  isPastry,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleKeyDown = (e: any) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      setShowModal(!showModal);
    }
  };

  useEffect(() => {
    const closeOnEscapeKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        setShowModal(false);
      }
    };
    document.addEventListener('keydown', closeOnEscapeKeyDown);
    return () => {
      document.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [setShowModal]);

  return (
    <>
      <ModalButton
        title='открыть'
        onClick={handleOpenModal}
        onKeyDown={(e: any) => handleKeyDown(e)}
      />

      {showModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <div
            className={styles.productModal}
            onClick={(e) => e.stopPropagation()}
          >
            <figure className={styles.productModal__figure}>
              <Image
                src={image}
                alt={title}
                className={styles.productModal__image}
              />
              {isCake && (
                <figcaption
                  className={styles.productModal__title}
                >{`Торт "${title}"`}</figcaption>
              )}
              {isPastry && (
                <figcaption
                  className={styles.productModal__title}
                >{`Пирожное "${title}"`}</figcaption>
              )}
            </figure>

            <ModalButton
              title='закрыть'
              onClick={handleCloseModal}
              onKeyDown={(e: any) => handleKeyDown(e)}
            />
          </div>
        </ModalOverlay>
      )}
    </>
  );
};

export default ProductModal;
