import { createSlice } from '@reduxjs/toolkit';
import getCurrentTheme from '../../functions/getCurrentTheme';
import setValueToLS from '../../functions/setValueToLS';

interface toggleThemePayload {
  payload: boolean;
  type: string;
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isDarkTheme: getCurrentTheme() },
  reducers: {
    toggleTheme: (_, { payload }: toggleThemePayload) => {
      setValueToLS('isDarkTheme', payload);
      return { isDarkTheme: payload };
    },
  },
});

const { actions: themeSliceActions, reducer: themeSliceReducer } = themeSlice;

export { themeSliceActions, themeSliceReducer };
