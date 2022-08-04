import { createSlice } from '@reduxjs/toolkit';
import getCurrentTheme from '../../functions/getCurrentTheme';
import setDataToLS from '../../functions/setDataToLS';

interface toggleThemePayload {
  payload: boolean;
  type: string;
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isDarkTheme: getCurrentTheme() },
  reducers: {
    toggleTheme: (_, { payload }: toggleThemePayload) => {
      setDataToLS('isDarkTheme', payload);
      return { isDarkTheme: payload };
    },
  },
});

const { actions: themeSliceActions, reducer: themeSliceReducer } = themeSlice;

export { themeSliceActions, themeSliceReducer };
