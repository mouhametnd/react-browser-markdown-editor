import { TDataStorage } from '../types/types';

type TSignature = <K extends keyof TDataStorage>(query: K, value: TDataStorage[K]) => void;

const setDataToLS: TSignature = (query, value) => localStorage.setItem(query, JSON.stringify(value));
export default setDataToLS;
