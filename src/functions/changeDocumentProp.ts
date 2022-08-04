import { IDocument, TDocumentState } from '../types/types';
import getDocumentById from './getDocumentByid';

type TSignature = {
  <T extends keyof IDocument>(a: {
    state: TDocumentState;
    document: IDocument;
    prop: T;
    newValue: IDocument[T];
  }): IDocument;
};

const changeDocumentProp: TSignature = ({ state, document, prop, newValue }) => {
  const { documents } = state;
  const documentRef = getDocumentById(document.id, documents) as IDocument;
  const newDocumentChanged = { ...documentRef, [prop]: newValue };

  documents.splice(documents.indexOf(documentRef), 1, newDocumentChanged);

  return newDocumentChanged;
};

export default changeDocumentProp;
