import { createSlice } from '@reduxjs/toolkit';
import getDataFromLS from '../../functions/getDataFromLS';
import getLastDocumentFromLS from '../../functions/getLastDocumentFromLS';
import { IDocument, IDocumentSlice } from '../../types/types';
import store from '../store';
import { documentSliceActions } from './document/documentSlice';

type TInitialState = IDocument;

interface IAction {
  payload: IDocument;
  type: string;
}

const initialState: TInitialState = getLastDocumentFromLS();

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
