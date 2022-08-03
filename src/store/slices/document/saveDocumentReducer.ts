// import setDataToLS from '../../../functions/setDataToLS';
import setDataToLS from '../../../functions/setDataToLS';
import { TDocumentSliceReducers } from '../../../types/types';

type TSaveDocumentAction = {
  type: string;
  payload: {
    isSaved: boolean;
  };
};

type TSaveDocumentReducer = TDocumentSliceReducers<TSaveDocumentAction>;

const saveDocumentReducer: TSaveDocumentReducer = (state, { payload }) => {
  const { isSaved } = payload;
  setDataToLS('document', state);
  return {
    ...state,
    isSaved,
  };
};

export default saveDocumentReducer;
