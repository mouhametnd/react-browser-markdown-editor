import { nanoid } from 'nanoid';

const createNewDocument = (name: string, content?: string) => ({
  id: nanoid(),
  name: name,
  date: Date.now(),
  content: content || '',
  isSaved: false,
});
export default createNewDocument;
