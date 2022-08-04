import { createSlice } from '@reduxjs/toolkit';
import { IDocumentSlice } from '../../../types/types';
import initialData from '../../../data.json';
import setDataToLS from '../../../functions/setDataToLS';
import createDocumentReducer from './createDocumentReducer';
import renameDocumentReducer from './renameDocumentReducer';
import deleteDocumentReducer from './deleteDocumentReducer';
import getDataFromLS from '../../../functions/getDataFromLS';
import changeDocumentContentReducer from './saveDocumentContent';

let initialState: IDocumentSlice = {
  documents: [...initialData],
};

const dataFromLS = getDataFromLS('document');
dataFromLS ? (initialState = dataFromLS) : setDataToLS('document', initialState);

initialState = {
  documents: [...initialData],
};

const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    createDocument: createDocumentReducer,
    renameDocument: renameDocumentReducer,
    deleteDocument: deleteDocumentReducer,
    saveDocumentContent: changeDocumentContentReducer,
  },
});

const { actions: documentSliceActions, reducer: documentSliceReducer } = documentSlice;

export { documentSliceActions, documentSliceReducer };
