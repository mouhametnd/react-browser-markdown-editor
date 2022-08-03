import { IDocument } from '../types/types';

const getDocumentById = (idQuery: string, documents: IDocument[]) => documents.find(({ id }) => id === idQuery);

export default  getDocumentById;   