import { ChangeEventHandler, useState } from 'react';
import useSelectedDocument from '../../hooks/useSelectedDocument';
import { IHideEditorLeft, TUseSelectedDocumentReturnArray } from '../../types/types';
import EditorSide from './EditorSide';


const EditorLeft = ({ hideEditorLeft }: IHideEditorLeft) => {
  
  const [value, setValue] = useSelectedDocument('content') as TUseSelectedDocumentReturnArray;
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = e => setValue(e.target.value);

  if (hideEditorLeft) return null;

  return (
    <EditorSide title="MARKDOWN">
      <textarea
        onChange={handleChange}
        value={value}
        className="w-full h-full min-h-[79.9vh] pr-3 bg-transparent font-Sec dark:text-gray-200 text-black-0 text-sm font-light resize-none md:border-r-2 leading-6 tracking-wider outline-none dark:border-r-gray-200 border-r-white-200/100 border-solid  "
      ></textarea>
    </EditorSide>
  );
};

export default EditorLeft;
