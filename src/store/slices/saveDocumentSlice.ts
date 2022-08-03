import { createSlice } from '@reduxjs/toolkit';
import setDataToLS from '../../functions/setDataToLS';
import { IDocument, IDocumentSlice, ISaveDocumentState } from '../../types/types';
import store from '../store';

interface IAction {
  type: string;
  payload: ISaveDocumentState;
}

const initialState: IAction['payload'] = {
  isSaved: false,
};

interface ISaveDocumentPayload {
  type: string;
  payload: {
    selectedDocument: IDocument;
    mdContent: string;
    document: IDocumentSlice;
  };
}

const saveDocumentSlice = createSlice({
  name: 'saveDocument',
  initialState,
  reducers: {
    saveDocument: (_, { payload }: ISaveDocumentPayload) => {
      let { selectedDocument, document, mdContent } = payload;
      // console.log(selectedDocument);
      // console.log(document);
      selectedDocument = { ...selectedDocument, content: mdContent };
      const documents = [...document.documents];

      const ref = documents.find(({ id }) => id === selectedDocument.id) as IDocument;
      documents.splice(documents.indexOf(ref), 1, selectedDocument);

      setDataToLS('document', { ...document, documents });
      return { isSaved: true };
    },
  },
  extraReducers: {
    'document/createDocument': () => ({ isSaved: false }),
    'document/deleteDocument': () => ({ isSaved: false }),
    'selectedDocument/setSelectedDocument': () => ({ isSaved: false }),
  },
});

const { actions: saveDocumentSliceActions, reducer: saveDocumentSliceReducer } = saveDocumentSlice;

export { saveDocumentSliceActions, saveDocumentSliceReducer };
