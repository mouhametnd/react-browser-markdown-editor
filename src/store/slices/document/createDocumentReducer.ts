import { CaseReducer } from '@reduxjs/toolkit';
import createNewDocument from '../../../functions/createNewDocument';
import setDataToLS from '../../../functions/setDataToLS';
import { IDocumentSlice } from '../../../types/types';

interface ICreateDocumentAction {
  type: string;
  payload: {
    name: string;
    content?: string;
  };
}

const createDocumentReducer: CaseReducer<IDocumentSlice, ICreateDocumentAction> = (state, { payload }) => {
  const newDocuments = [createNewDocument(payload.name, payload.content), ...state.documents];

  setDataToLS('document', { ...state, documents: newDocuments });

  return {
    ...state,
    documents: newDocuments,
  };
};

export default createDocumentReducer;
