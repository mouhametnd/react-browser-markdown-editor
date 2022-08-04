import { useDispatch } from 'react-redux';
import DeleteSvg from '../../assets/svgs/DeleteSvg';
import getDataFromLS from '../../functions/getDataFromLS';
import useModal from '../../hooks/useModal';
import useSelectedDocument from '../../hooks/useSelectedDocument';
import { documentSliceActions } from '../../store/slices/document/documentSlice';
import { IDocument } from '../../types/types';
import ModalWrapper from '../others/ModalWrapper';
import NormalButton from '../others/NormalButton';

const { deleteDocument } = documentSliceActions;

const DeleteDocument = () => {
  const dispatch = useDispatch();
  const { id, name } = useSelectedDocument('all') as IDocument;
  const [shouldOpen, openModal, closeModal] = useModal({});

  const deleteDocumentClick = () => {
    const document = getDataFromLS('document');
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
        <NormalButton handleClick={deleteDocumentClick}>Confirm & Delete</NormalButton>
      </ModalWrapper>
    </>
  );
};

export default DeleteDocument;
