import { createSlice } from '@reduxjs/toolkit';
import { IIsDocumentStateSaved } from '../../types/types';

const initialState: IIsDocumentStateSaved = {
  isSaved: false,
};
interface ISaveDocumentPayload {
  type: string;
  payload: boolean;
}

const setNotSaved = () => ({ isSaved: false });

const isDocumentSavedSlice = createSlice({
  name: 'saveDocument',
  initialState,
  reducers: {
    setIsDocumentSaved: (_, { payload }: ISaveDocumentPayload) => {
      return {
        isSaved: payload,
      };
    },
  },
  extraReducers: {
    'document/createDocument': setNotSaved,
    'document/deleteDocument': setNotSaved,
    'selectedDocument/setSelectedDocument': setNotSaved,
  },
});

const { actions: isDocumentSavedSliceActions, reducer: isDocumentSavedSliceReducer } = isDocumentSavedSlice;

export { isDocumentSavedSliceActions, isDocumentSavedSliceReducer };
