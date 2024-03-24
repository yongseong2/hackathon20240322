import { ReactNode, MouseEvent } from 'react';
import ModalPortal from './ModalPortal';

import { useModalContext } from './ModalContext';
import Icon from '../Icon';

interface Props {
  label?: string;
  children: ReactNode;
  id: string;
}

export function Modal({ id, label, children }: Props) {
  const { openModals, closeModal } = useModalContext();
  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {openModals[id] && (
        <ModalPortal>
          <div
            onClick={e => handleBackgroundClick(e)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-200"
          >
            <div
              className={`rounded-lg bg-white shadow-lg transition-transform duration-200`}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2 text-lg font-bold">
                  {label}
                </div>
                <button onClick={() => closeModal()} className="">
                  <Icon name="Close" />
                </button>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
}
