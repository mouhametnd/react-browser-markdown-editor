import { CaseReducer } from '@reduxjs/toolkit';
import changeDocumentProp from '../../../functions/changeDocumentProp';
import setDataToLS from '../../../functions/setDataToLS';
import { IDocumentSlice, ISaveDocumentContentPayload, TDocumentState } from '../../../types/types';

interface IAction {
  type: string;
  payload: ISaveDocumentContentPayload;
}

const saveDocumentContentReducer: CaseReducer<IDocumentSlice, IAction> = (state: TDocumentState, { payload }) => {
  const { document, newContent } = payload;
  changeDocumentProp({ state, document, prop: 'content', newValue: newContent });
  changeDocumentProp({ state, document, prop: 'isSaved', newValue: true });

  setDataToLS('document', state);
  return state;
};

export default saveDocumentContentReducer;
