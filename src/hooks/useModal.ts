import { useEffect, useState } from 'react';
import isFunction from '../functions/isFunction';

type TUseModal = (a: { openModalCb?: Function; closeModalCb?: Function }) => [boolean, () => void, () => void];

const useModal: TUseModal = ({ closeModalCb, openModalCb }) => {
  const [shouldOpen, setShouldOpen] = useState(false);

  const closeModal = () => {
    isFunction(closeModalCb) && closeModalCb();
    setShouldOpen(false);
  };

  const openModal = () => {
    isFunction(openModalCb) && openModalCb();
    setShouldOpen(true);
  };

  useEffect(() => {
    shouldOpen ? openModal() : closeModal();
  }, [shouldOpen]);

  return [shouldOpen, openModal, closeModal];
};

export default useModal;
