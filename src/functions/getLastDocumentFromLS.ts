import { IDocument, IDocumentSlice } from "../types/types";
import getDataFromLS from "./getDataFromLS";

const getLastDocumentFromLS = () => { 
  const document = getDataFromLS<IDocumentSlice>('document')?.documents?.at(0) as IDocument;

  return document;
 }
 export default getLastDocumentFromLS;