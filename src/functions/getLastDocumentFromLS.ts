import { IDocument } from '../types/types';
import getDataFromLS from './getDataFromLS';

const getLastDocumentFromLS = () => getDataFromLS('document')?.documents?.at(0) as IDocument;

export default getLastDocumentFromLS;
