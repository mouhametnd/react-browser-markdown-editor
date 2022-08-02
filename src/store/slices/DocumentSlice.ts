import { createSlice } from '@reduxjs/toolkit';
import { ICreateDocumentAction, IDocumentSlice } from '../../types/types';
import initialData from '../../data.json';
import setDataToLS from '../../functions/setDataToLS';
import createNewDocument from '../../functions/createDocument';

const initialState: IDocumentSlice = {
  documents: [...initialData],
};

setDataToLS('document', initialState);

const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    createDocument: (state, { payload }: ICreateDocumentAction) => {
      const newDocuments = [createNewDocument(payload.name, payload.content), ...state.documents];

      setDataToLS('document', newDocuments);
      return {
        ...state,
        documents: newDocuments,
      };
    },
  },
});

const { actions: documentSliceActions, reducer: documentSliceReducer } = documentSlice;

export { documentSliceActions, documentSliceReducer };
