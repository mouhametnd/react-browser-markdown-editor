import { createSlice } from '@reduxjs/toolkit';
import { IContent } from '../../types/types';


interface IAction {
  type: string;
  payload: IContent;
}

const initialState: IContent = {
  html: '',
  md: '',
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContent: (_, { payload }: IAction) => payload,
  },
});

const { actions: contentSliceActions, reducer: contentSliceReducer } = contentSlice;
export { contentSliceActions, contentSliceReducer };