import { nanoid } from 'nanoid';
import { IDocument } from '../types/types';

const createNewDocument = (name: string, content?: string): IDocument => ({
  id: nanoid(),
  name: name,
  created: Date.now(),
  content: content || '',
  isSaved: false,
});
export default createNewDocument;
