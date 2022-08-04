import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useModal from '../../hooks/useModal';
import { selectedDocumentSliceActions } from '../../store/slices/selectedDocumentSlice';
import store from '../../store/store';
import { IDocument, IStore } from '../../types/types';
import ModalWrapper from '../others/ModalWrapper';
import NormalButton from '../others/NormalButton';
import DocumentItem from './DocumentItem';


const { setSelectedDocument } = selectedDocumentSliceActions;
const DocumentList = () => {
  const dispatch = useDispatch();
  const [isOpen, openModal, closeModal] = useModal({});
  const { document, selectedDocument } = useSelector(state => state as IStore);
  const { documents } = document;

  const [nextDoc, setNextDoc] = useState<IDocument | null>(null);
  const [currentDoc, setCurrentDocument] = useState<IDocument | null>(null);
  

  const docNavigation = (document: IDocument) => {
    const currentSelectedDoc = store.getState().selectedDocument;
  
    if (currentSelectedDoc.id === document.id) return;
    if (currentSelectedDoc.isSaved) return dispatch(setSelectedDocument(document));

    setNextDoc(document);
    setCurrentDocument(currentSelectedDoc);
    openModal();
  };

  const setNextDocClick = () => {
    dispatch(setSelectedDocument(nextDoc as IDocument));
    closeModal();
  };
  
  return (
    <>
      <ul className="scrollbar-orange flex flex-col gap-3 max-h-[350px] md:max-h-[500px] overflow-y-auto">
        {documents.map(document => (
          <DocumentItem
            document={document}
            selectedDocumentId={selectedDocument?.id || null}
            key={document.id}
            handleClickCb={() => docNavigation(document)}
          />
        ))}
      </ul>

      <ModalWrapper
        title="Leave this document?"
        description={`Are you sure you want to leave the unsaved "${currentDoc?.name}" document and its contents? This action cannot be reversed.`}
        shouldOpen={isOpen}
        closeCb={closeModal}
      >
        <NormalButton handleClick={setNextDocClick}>Confirm & Leave</NormalButton>
      </ModalWrapper>
    </>
  );
};

export default DocumentList;
