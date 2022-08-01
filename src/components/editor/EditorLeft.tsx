import React from 'react';
import EditorSide from './EditorSide';

const EditorLeft = () => {
  return (
    <EditorSide title="MARKDOWN">
      <textarea
        name=""
        id=""
        className="w-full h-full min-h-[79.9vh] pr-3 bg-transparent font-Sec dark:text-gray-200 text-black-0 text-sm font-light resize-none md:border-r-2 leading-6 tracking-wider outline-none dark:border-r-gray-200 border-r-white-200/100 border-solid  overflow-hidden  "
      ></textarea>
    </EditorSide>
  );
};

export default EditorLeft;
