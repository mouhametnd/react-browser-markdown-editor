import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import setRenameDocument from '../functions/setRenameDocument';
import setTextareaContent from '../functions/setTextareaContent';
import { IDocument, IStore, TUseSelectedDocumentReturnArray } from '../types/types';

type TUseSelectedDocument = (a: 'name' | 'content' | 'all') => TUseSelectedDocumentReturnArray | IDocument;

const useSelectedDocument: TUseSelectedDocument = prop => {
  const selectedDocument = useSelector(state => state as IStore).selectedDocument;

  if (prop === 'all') {
    return selectedDocument;
  }

  const [propValue, setPropValue] = useState(selectedDocument[prop]);

  useEffect(() => {
    if (prop === 'content') return setTextareaContent(propValue);

    if (prop === 'name') {
      propValue.trim()
        ? setRenameDocument({ newName: propValue, document: selectedDocument })
        : setPropValue(selectedDocument.name);
      return;
    }
  }, [propValue]);

  useEffect(() => {
    setPropValue(selectedDocument[prop]);

    
  }, [selectedDocument]);

  return [propValue, setPropValue];
};

export default useSelectedDocument;
