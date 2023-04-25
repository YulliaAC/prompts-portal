'use client'
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { CloseButton } from '../CloseButton/CloseButton';
import styles from './Modal.module.css';

export const Modal = ({ children, onClose }) => {
  const modalRoot = document.querySelector('#modal-root');
  const onBackdropClose = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => window.removeEventListener('keydown', onEscapeClose);
  }, [onClose]);

  return createPortal(
    <div onClick={onBackdropClose} className={styles.backdrop}>
      <div className={styles.window}>
        {/* <CloseButton onClose={onClose} /> */}
        {children}
      </div>
    </div>,
    modalRoot
  );
};