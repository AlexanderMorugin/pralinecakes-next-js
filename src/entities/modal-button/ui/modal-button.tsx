import type { FC } from 'react';

import styles from './modal-button.module.scss';

interface IModalButton {
  title: string;
  onClick: () => void;
  onKeyDown: (e: any) => void;
}

const ModalButton: FC<IModalButton> = ({ title, onClick, onKeyDown }) => {
  return (
    <div
      className={styles.modalButton}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role='button'
    >
      {title}
    </div>
  );
};

export default ModalButton;
