import { ChangeEventHandler, FocusEventHandler, useEffect, useState } from 'react';
import DocumentSvg from '../../assets/svgs/DocumentSvg';
import useInputValidation from '../../hooks/useInputValidation';
import useSelectedDocument from '../../hooks/useSelectedDocument';
import { TUseSelectedDocumentReturnArray } from '../../types/types';

const DocumentName = () => {
  const [nameValue, setNameValue] = useSelectedDocument('name') as TUseSelectedDocumentReturnArray;
  
  const [inputValue, setInputValue] = useState(nameValue);

  const succeedCb = (value: string) => setNameValue(value);
  const rejectedCb = (value: string) => setNameValue(value);

  const [_, validator] = useInputValidation({ succeedCb, rejectedCb });

  const handleBlur: FocusEventHandler<HTMLInputElement> = e => validator(e.target.value);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => setInputValue(e.target.value);

  useEffect(() => {
    setInputValue(nameValue);
  }, [nameValue]);


  return (
    <div className="flex h-max self-center gap-3">
      <div className="self-center w-5 hidden md:visible">
        <DocumentSvg />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[13px] text-gray-200  hidden md:inline">Document Name</span>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          className="bg-transparent text-white-100 font-medium outline-none border-b-2  transition-colors pl-1  border-transparent hover:border-white-100 w-full text-xs md:text-base"
        />
      </div>
    </div>
  );
};

export default DocumentName;
