import { configureStore } from '@reduxjs/toolkit';
import { asideOpenReducer } from './slices/asideOpenSlice';
import { themeSliceReducer } from './slices/themeSlice';

const store = configureStore({
  reducer: {
    asideOpen: asideOpenReducer,
    theme: themeSliceReducer,
  },
});

export default store;
