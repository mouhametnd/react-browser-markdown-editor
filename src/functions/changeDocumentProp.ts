import { IDocument, TDocumentState } from '../types/types';
import getDocumentById from './getDocumentByid';

type TSignature = {
  <T extends keyof IDocument>(a: { state: TDocumentState; document: IDocument; prop: T; newValue: IDocument[T] }): void;
};

const changeDocumentProp: TSignature = ({ state, document, prop, newValue }) => {
  const { documents } = state;
  const newDocumentChanged = { ...document, [prop]: newValue };

  const documentRef = getDocumentById(document.id, documents) as IDocument;

  documents.splice(documents.indexOf(documentRef), 1, newDocumentChanged);

  return state;
};

export default changeDocumentProp;
