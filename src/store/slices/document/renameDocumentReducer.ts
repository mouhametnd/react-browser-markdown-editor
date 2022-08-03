import first from '../../../functions/changeDocumentProp';
import getDocumentById from '../../../functions/getDocumentByid';
import setDataToLS from '../../../functions/setDataToLS';
import { IRenameDocumentPayload, TDocumentSliceReducers, TDocumentState } from '../../../types/types';

interface IAction {
  type: string;
  payload: IRenameDocumentPayload;
}

type TRenameDocumentReducer = TDocumentSliceReducers<IAction>;

const renameDocumentReducer: TRenameDocumentReducer = (state: TDocumentState, { payload }) => {
  const { document, newName } = payload;
  first({ state, document, prop: 'name', newValue: newName });

  setDataToLS('document', state);
  return state;
};

export default renameDocumentReducer;
