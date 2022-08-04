import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setDataToLS from '../functions/setDataToLS';
import setRenameDocument from '../functions/setRenameDocument';
import setTextareaContent from '../functions/setTextareaContent';
import { selectedDocumentSliceActions } from '../store/slices/selectedDocumentSlice';
import { IDocument, IStore, TUseSelectedDocumentReturnArray } from '../types/types';

type TUseSelectedDocument = (a: 'name' | 'content' | 'all') => TUseSelectedDocumentReturnArray | IDocument;

const { setSelectedDocument } = selectedDocumentSliceActions;

const useSelectedDocument: TUseSelectedDocument = prop => {
  const dispatch = useDispatch();
  const { selectedDocument, document } = useSelector(state => state as IStore);

  if (prop === 'all') {
    return selectedDocument;
  }

  const [propValue, setPropValue] = useState(selectedDocument[prop]);

  useEffect(() => {
    const payload = {
      ...selectedDocument,
      [prop]: propValue,
      isSaved: prop === 'content' ? selectedDocument.content === propValue : selectedDocument.isSaved,
    };
    dispatch(setSelectedDocument(payload));

    if (prop === 'content') return setTextareaContent(propValue);

    propValue.trim()
      ? setRenameDocument({ newName: propValue, document: selectedDocument })
      : setPropValue(selectedDocument.name);
  }, [propValue]);

  useEffect(() => {
    setPropValue(selectedDocument[prop]);
  }, [selectedDocument]);

  return [propValue, setPropValue];
};

export default useSelectedDocument;
