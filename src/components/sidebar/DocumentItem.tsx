import DocumentSvg from '../../assets/svgs/DocumentSvg';
import getDateFormated from '../../functions/getDateFormated';
import { IDocument } from '../../types/types';
interface IProps {
  document: IDocument;
  selectedDocumentId: string | null;
  handleClickCb: () => void;
}

const DocumentItem = ({ document, selectedDocumentId, handleClickCb }: IProps) => {
  const { created, name, id } = document;

  return (
    <li
      onClick={handleClickCb}
      className={`${
        selectedDocumentId === id && 'selected-document'
      }  flex content-center gap-3 hover:bg-gray-500/50 w-full mx-auto pl-5 rounded-md py-1.5 pb-4 cursor-pointer`}
    >
      <DocumentSvg className="self-center" />
      <div className="pointer-events-none">
        <time className="font-light text-gray-300 text-base">{getDateFormated(created)}</time>
        <h3 className="text-base text-white-100 tracking-wide font-medium">{name}</h3>
      </div>
    </li>
  );
};

export default DocumentItem;
