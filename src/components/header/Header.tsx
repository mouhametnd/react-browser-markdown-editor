import CopyDocument from '../others/CopyDocument';
import DownloadDocumentButton from '../others/DownloadDocumentButton';
import DeleteDocumentButton from './DeleteDocumentButton';
import DocumentName from './DocumentName';
import Hamburger from './Hamburger';
import SaveDocumentButton from './SaveDocumentButton';

const Header = () => {
  return (
    <header className="bg-gray-500 flex justify-between md:pr-14 fixed top-0 w-full z-40">
      <div className="flex gap-4 md:gap-4 ">
        <Hamburger />
        <h1 className="text-white-100 font-medium text-base font-Pri tracking-[0.2rem] h-[50px]
         self-center hidden md:flex pr-4 border-solid border-r-[1px] border-gray-300 ">
          <span className='m-auto'>MARKDOWN</span>
        </h1>

        <DocumentName />
      </div>
      <div className="flex pr-2 gap-2 md:gap-4">
        <DeleteDocumentButton />
        <SaveDocumentButton />
        <DownloadDocumentButton />
        <CopyDocument/>
      </div>
    </header>
  );
};

export default Header;
