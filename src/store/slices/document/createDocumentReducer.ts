import createNewDocument from '../../../functions/createNewDocument';
import setDataToLS from '../../../functions/setDataToLS';
import { ICreateDocumentAction, TDocumentSliceReducers } from '../../../types/types';

type TCreateDocumentReducer = TDocumentSliceReducers<ICreateDocumentAction>;

const createDocumentReducer: TCreateDocumentReducer = (state, { payload }) => {
  const newDocuments = [createNewDocument(payload.name, payload.content), ...state.documents];

  setDataToLS('document', { ...state, documents: newDocuments });
  return {
    ...state,
    documents: newDocuments,
  };
};

export default createDocumentReducer;
