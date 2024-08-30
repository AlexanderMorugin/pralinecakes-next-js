import { type FC, ReactNode } from 'react';

import styles from './modal-overlay.module.scss';

interface IModalOverlay {
  children: ReactNode;
  onClick: () => void;
}

const ModalOverlay: FC<IModalOverlay> = ({ children, onClick }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClick}>
      {children}
    </div>
  );
};

export default ModalOverlay;
