import { CaseReducer } from '@reduxjs/toolkit';
import createNewDocument from '../../../functions/createNewDocument';
import setDataToLS from '../../../functions/setDataToLS';
import { ICreateDocumentAction, IDocumentSlice } from '../../../types/types';

const createDocumentReducer: CaseReducer<IDocumentSlice, ICreateDocumentAction> = (state, { payload }) => {
  const newDocuments = [createNewDocument(payload.name, payload.content), ...state.documents];

  setDataToLS('document', { ...state, documents: newDocuments });

  return {
    ...state,
    documents: newDocuments,
  };
};

export default createDocumentReducer;
