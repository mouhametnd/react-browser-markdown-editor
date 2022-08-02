import { nanoid } from 'nanoid';

const createNewDocument = (name: string, content?: string  )=> ({
  id: nanoid(),
  name: name,
  date: Date.now(),
  content : content || '',
});
export default createNewDocument;