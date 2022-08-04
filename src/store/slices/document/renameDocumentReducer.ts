import changeDocumentProp from '../../../functions/changeDocumentProp';
import { CaseReducer } from '@reduxjs/toolkit';
import setDataToLS from '../../../functions/setDataToLS';
import { IDocumentSlice, IRenameDocumentPayload, TDocumentState } from '../../../types/types';

interface IAction {
  type: string;
  payload: IRenameDocumentPayload;
}

const renameDocumentReducer: CaseReducer<IDocumentSlice, IAction> = (state: TDocumentState, { payload }) => {
  const { document, newName } = payload;
  changeDocumentProp({ state, document, prop: 'name', newValue: newName });

  setDataToLS('document', state);
  return state;
};

export default renameDocumentReducer;
