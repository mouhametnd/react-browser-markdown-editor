import { useSelector, useStore } from 'react-redux';
import ThemeToggle from '../ThemeToggle';
import CreateDocumentButton from './CreateDocumentButton';
import Document from './DocumentItem';
import DocumentList from './DocumentList';


const Sidebar = () => {
  return (
    <aside
      className={
        ' bg-black-300 h-[85vh] md:h-screen min-w-[250px] max-w-[270px] px-4 py-4 flex flex-col fixed z-40  -translate-x-full'
      }
    >
      <div className="mb-5">
        <h1 className="text-white-100 font-bold text-xl font-Pri tracking-[0.2rem] mb-1">MARKDOWN </h1>
        <h2 className="text-gray-300 font-semibold text-lg ">MY DOCUMENTS</h2>
      </div>

      <div className="flex flex-col gap-5 content-center">
        <CreateDocumentButton />
        <DocumentList/>
      </div>

      <ThemeToggle className="mt-auto " />
    </aside>
  );
};

export default Sidebar;
