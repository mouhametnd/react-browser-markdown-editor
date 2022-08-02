import { createSlice } from '@reduxjs/toolkit';
import getDataFromLS from '../../functions/getDataFromLS';
import { IDocument, IDocumentSlice } from '../../types/types';

type TInitialState = null | IDocument;

interface IAction {
  payload: IDocument | null;
  type: string;
}

const document = getDataFromLS<IDocumentSlice>('document')?.documents?.at(0) || null;

const initialState: TInitialState = document;

const selectedDocumentSlice = createSlice({
  name: 'selectedDocument',
  initialState,
  reducers: {
    setSelectedDocument: (_, { payload }: IAction) => payload
  },
});

const { actions: selectedDocumentSliceActions, reducer: selectedDocumentSliceReducer } = selectedDocumentSlice;

export { selectedDocumentSliceActions, selectedDocumentSliceReducer };
