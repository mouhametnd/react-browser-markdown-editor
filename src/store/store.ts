import { configureStore } from '@reduxjs/toolkit';
import { asideOpenReducer } from './slices/asideOpenSlice';
import { contentSliceReducer } from './slices/contentSlice';
import { documentSliceReducer } from './slices/document/documentSlice';
import { saveDocumentSliceReducer } from './slices/saveDocumentSlice';
import { selectedDocumentSliceReducer } from './slices/selectedDocumentSlice';
import { themeSliceReducer } from './slices/themeSlice';

const store = configureStore({
  reducer: {
    asideOpen: asideOpenReducer,
    theme: themeSliceReducer,
    document: documentSliceReducer,
    selectedDocument: selectedDocumentSliceReducer,
    content: contentSliceReducer,
    saveDocument: saveDocumentSliceReducer,
  },
});

export default store;
