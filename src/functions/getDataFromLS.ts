import { TDataStorage } from '../types/types';

type TSignature = <K extends keyof TDataStorage>(query: K) => TDataStorage[K] | null;

const getDataFromLS: TSignature = query => JSON.parse(localStorage.getItem(query) || 'null');

export default getDataFromLS;
