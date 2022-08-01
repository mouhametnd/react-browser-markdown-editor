import DocumentSvg from '../../assets/svgs/DocumentSvg';

const DocumentName = () => {
  return (
    <div className="flex h-max self-center gap-3">
      <div className='self-center w-5 hidden md:visible'>
        <DocumentSvg />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[13px] text-gray-200  hidden md:inline">Document Name</span>
        <input type="text" value={'welcomssse'} className='bg-transparent text-white-100 font-medium outline-none border-b-2  transition-colors pl-1  border-transparent hover:border-white-100 w-full text-xs md:text-base' onChange={() => {}} />
      </div>
    </div>
  );
};

export default DocumentName;
