import { Dispatch, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import setTextareaContent from '../functions/setTextareaContent';
import { IStore } from '../types/types';

const useSelectedDocument = (prop: 'name' | 'content'): [string, Dispatch<React.SetStateAction<string>>] => {
  const selectedDocument = useSelector(state => state as IStore).selectedDocument;

  const [value, setValue] = useState(selectedDocument[prop]);

  console.log(selectedDocument);

  useEffect(() => {
    if (prop !== 'content') return;
    setTextareaContent(value);
  }, [value]);

  useEffect(() => {
    setValue(selectedDocument[prop]);
  }, [selectedDocument]);

  return [value, setValue];
};

export default useSelectedDocument;
