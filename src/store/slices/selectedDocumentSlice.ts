import { createSlice } from '@reduxjs/toolkit';
import getLastDocumentFromLS from '../../functions/getLastDocumentFromLS';
import { IDocument } from '../../types/types';

interface IAction {
  payload: IDocument;
  type: string;
}

const initialState = getLastDocumentFromLS();



const selectedDocumentSlice = createSlice({
  name: 'selectedDocument',
  initialState,
  reducers: {
    setSelectedDocument: (_, { payload }: IAction) => payload,
  },
  extraReducers: {
    'document/deleteDocument': () => getLastDocumentFromLS(),
    'document/createDocument': () => getLastDocumentFromLS(),
  },
});

const { actions: selectedDocumentSliceActions, reducer: selectedDocumentSliceReducer } = selectedDocumentSlice;

export { selectedDocumentSliceActions, selectedDocumentSliceReducer };
