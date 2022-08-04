import showdown from 'showdown';
import { contentSliceActions } from '../store/slices/contentSlice';
import store from '../store/store';

const { setContent } = contentSliceActions;
const dispatch = store.dispatch;

const setTextareaContent = (content: string) => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(content);
  dispatch(setContent({ md: content, html }));
};

export default setTextareaContent;