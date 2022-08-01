import {} from 'react';
import DocumentSvg from '../../assets/svgs/DocumentSvg';

const Document = () => {
  return (
    <div className="flex content-center gap-3 hover:bg-gray-600 w-72 mx-auto pl-5 rounded-md py-1.5 cursor-pointer">
      <DocumentSvg className="self-center" />
      <div>
        <time className="font-light text-gray-300 text-base">April 5, 2022</time>
        <h3 className='text-base text-white-100 tracking-wide font-medium'>Welcome</h3>
      </div>
    </div>
  );
};

export default Document;
