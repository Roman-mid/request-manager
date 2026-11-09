import { createPortal } from 'react-dom';

import styleLoading from './Loader.module.scss';

const overlay: Element | null = document.querySelector('#modal-root');

export const Loader = () =>
  createPortal(
    <div className={styleLoading.overlay} style={{ zIndex: '10000' }}>
      <span className={styleLoading.loader} />
    </div>,
    overlay as Element,
  );
