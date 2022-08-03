import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setRenameDocument from '../functions/setRenameDocument';
import setTextareaContent from '../functions/setTextareaContent';
import { isDocumentSavedSliceActions } from '../store/slices/isDocumentSavedSlice';
import { IDocument, IStore, TUseSelectedDocumentReturnArray } from '../types/types';

type TUseSelectedDocument = (a: 'name' | 'content' | 'all') => TUseSelectedDocumentReturnArray | IDocument;

const { setIsDocumentSaved } = isDocumentSavedSliceActions;

const useSelectedDocument: TUseSelectedDocument = prop => {
  const dispatch = useDispatch();
  const selectedDocument = useSelector(state => state as IStore).selectedDocument;

  if (prop === 'all') {
    return selectedDocument;
  }

  const [propValue, setPropValue] = useState(selectedDocument[prop]);

  useEffect(() => {
    // set new date

    if (prop === 'content') {
      dispatch(setIsDocumentSaved(false));
      return setTextareaContent(propValue);
    }

    if (prop === 'name') {
      propValue.trim()
        ? setRenameDocument({ newName: propValue, document: selectedDocument })
        : setPropValue(selectedDocument.name);
    }
  }, [propValue]);

  useEffect(() => {
    setPropValue(selectedDocument[prop]);
  }, [selectedDocument]);

  return [propValue, setPropValue];
};

export default useSelectedDocument;
