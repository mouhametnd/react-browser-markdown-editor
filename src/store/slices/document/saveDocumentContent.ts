import changeDocumentProp from '../../../functions/changeDocumentProp';
import setDataToLS from '../../../functions/setDataToLS';
import { ISaveDocumentContentPayload, TDocumentSliceReducers, TDocumentState } from '../../../types/types';

interface IAction {
  type: string;
  payload: ISaveDocumentContentPayload;
}

type TSaveDocumentContentReducer = TDocumentSliceReducers<IAction>;

const saveDocumentContentReducer: TSaveDocumentContentReducer = (state: TDocumentState, { payload }) => {
  const { document, newContent } = payload;
  changeDocumentProp({ state, document, prop: 'content', newValue: newContent });

  setDataToLS('document', state);
  return state;
};

export default saveDocumentContentReducer;
