import { IDocument, IRenameDocumentPayload, TDocumentSliceReducers, TDocumentState } from '../types/types';
import getDocumentById from './getDocumentByid';
import setDataToLS from './setDataToLS';

interface IAction {
  type: string;
  payload: IRenameDocumentPayload;
}

type TRenameDocumentReducer = TDocumentSliceReducers<IAction>;

// type ss = (a: keyof IDocument) => TRenameDocumentReducer;
type ss = (a: keyof IDocument) => (b: cc<typeof a>) => void;

type cc<T extends keyof IDocument> = {
  type?: string;
  payload: {
    newValue: IDocument[T];
  };
};

const cl: ss = prop => {
  const renameDocumentReducer = ({ payload }: cc<typeof prop>) => {};

  return renameDocumentReducer;
};

const w = cl('name');
w({ payload: { newValue: 20 } });

type p = cc<'content' | 'date'>;
// because content and date, a solution could be make different functions.