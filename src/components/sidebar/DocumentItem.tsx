import {} from 'react';
import { useDispatch } from 'react-redux';
import DocumentSvg from '../../assets/svgs/DocumentSvg';
import getDateFormated from '../../functions/getDateFormated';
import { selectedDocumentSliceActions } from '../../store/slices/selectedDocumentSlice';
import { IDocument } from '../../types/types';

interface IProps {
  document: IDocument;
  selectedDocumentId: string | null;
}

const { setSelectedDocument } = selectedDocumentSliceActions;
const DocumentItem = ({ document, selectedDocumentId }: IProps) => {
  const { date, name, id } = document;
  const dispatch = useDispatch();


  const handleClick = () => {
    if (selectedDocumentId !== id) dispatch(setSelectedDocument(document));
  };

  return (
    <li
      onClick={handleClick}
      className={`${
        selectedDocumentId === id && 'selected-document'
      }  flex content-center gap-3 hover:bg-gray-500/50 w-full mx-auto pl-5 rounded-md py-1.5 pb-4 cursor-pointer`}
    >
      <DocumentSvg className="self-center" />
      <div>
        <time className="font-light text-gray-300 text-base">{getDateFormated(date)}</time>
        <h3 className="text-base text-white-100 tracking-wide font-medium">{name}</h3>
      </div>
    </li>
  );
};

export default DocumentItem;
