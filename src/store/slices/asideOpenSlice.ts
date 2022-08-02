import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAsideOpen: false,
};

const setAsideOpenSlice = createSlice({
  name: 'setAsideOpen',
  initialState: initialState,
  reducers: {
    setAside: ({ isAsideOpen }) => {
      return { isAsideOpen: !isAsideOpen };
    },
  },
});

const { actions: asideOpenActions, reducer: asideOpenReducer } = setAsideOpenSlice;

export { asideOpenActions, asideOpenReducer };
