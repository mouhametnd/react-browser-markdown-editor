import { createSlice } from '@reduxjs/toolkit';
import { IDocumentSlice } from '../../../types/types';
import initialData from '../../../data.json';
import setDataToLS from '../../../functions/setDataToLS';
import createDocumentReducer from './createDocumentReducer';
import renameDocumentReducer from './renameDocumentReducer';
import deleteDocumentReducer from './deleteDocumentReducer';
import getDataFromLS from '../../../functions/getDataFromLS';

let initialState: IDocumentSlice = {
  documents: [...initialData],
};
const dataFromLS = getDataFromLS<IDocumentSlice>('document');
dataFromLS ? (initialState = dataFromLS) : setDataToLS('document', initialState);

const documentSlice = createSlice({
  name: 'document',
  // initialState,
  initialState: {
    documents: [...initialData],
  },
  reducers: {
    createDocument: createDocumentReducer,
    renameDocument: renameDocumentReducer,
    deleteDocument: deleteDocumentReducer,
  },
});

const { actions: documentSliceActions, reducer: documentSliceReducer } = documentSlice;

export { documentSliceActions, documentSliceReducer };
