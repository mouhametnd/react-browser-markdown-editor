import { CaseReducer } from '@reduxjs/toolkit';
import getDocumentById from '../../../functions/getDocumentByid';
import setDataToLS from '../../../functions/setDataToLS';
import { IDocument, IDocumentSlice } from '../../../types/types';

interface IAction {
  type: string;
  payload: { id: string };
}

const deleteDocumentReducer: CaseReducer<IDocumentSlice, IAction> = (state, { payload }) => {
  const { id } = payload;
  const { documents } = state;

  const documentRef = getDocumentById(id, documents) as IDocument;

  documents.splice(documents.indexOf(documentRef), 1);

  setDataToLS('document', state);
  return state;
};

export default deleteDocumentReducer;
