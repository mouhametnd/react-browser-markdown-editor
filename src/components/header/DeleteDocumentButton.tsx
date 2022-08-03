import { KeyboardEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import DeleteSvg from '../../assets/svgs/DeleteSvg';
import getDataFromLS from '../../functions/getDataFromLS';
import getLastDocumentFromLS from '../../functions/getLastDocumentFromLS';
import useModal from '../../hooks/useModal';
import useSelectedDocument from '../../hooks/useSelectedDocument';
import { documentSliceActions } from '../../store/slices/document/documentSlice';
import { IDocument, IDocumentSlice, IStore } from '../../types/types';
import ModalWrapper from '../others/ModalWrapper';

const { deleteDocument } = documentSliceActions;

const DeleteDocument = () => {
  const dispatch = useDispatch();
  const { id, name } = useSelectedDocument('all') as IDocument;
  const [shouldOpen, openModal, closeModal] = useModal({});

  const deleteDocumentClick = () => {
    const document = getDataFromLS<IDocumentSlice>('document');
    if (document && document.documents.length > 1) dispatch(deleteDocument({ id }));

    closeModal();
  };

  return (
    <>
      <button className="bg-black-hover" onClick={openModal}>
        <DeleteSvg />
      </button>
      <ModalWrapper
        title="Delete this document?"
        description={`Are you sure you want to delete the "${name}" document and its contents? This action cannot be reversed.`}
        shouldOpen={shouldOpen}
        closeCb={closeModal}
      >
        <button
          onClick={deleteDocumentClick}
          className="text-white-100 bg-orange rounded-md py-2 hover:bg-orange/80 transition-colors font-light"
        >
          Confirm & Delete
        </button>
      </ModalWrapper>
    </>
  );
};

export default DeleteDocument;
