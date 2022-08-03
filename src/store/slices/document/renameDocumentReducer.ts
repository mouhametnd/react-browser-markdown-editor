import getDocumentById from '../../../functions/getDocumentByid';
import setDataToLS from '../../../functions/setDataToLS';
import { IDocument, IRenameDocumentPayload, TDocumentSliceReducers, TDocumentState } from '../../../types/types';

interface IAction {
  type: string;
  payload: IRenameDocumentPayload;
}

type TRenameDocumentReducer = TDocumentSliceReducers<IAction>;

const renameDocumentReducer: TRenameDocumentReducer = (state: TDocumentState, { payload }) => {
  const { document, newName } = payload;
  const { documents } = state;
  const documentRenamed = { ...document, name: newName };
  const documentRef = getDocumentById(document.id, documents) as IDocument;

  documents.splice(documents.indexOf(documentRef), 1, documentRenamed);

  setDataToLS('document', state);
  return state;
};

export default renameDocumentReducer;
