import { useSelector } from 'react-redux';
import { IStore } from '../../types/types';
import DocumentItem from './DocumentItem';

const DocumentList = () => {
  const { document, selectedDocument } = useSelector(state => state as IStore);
  const { documents } = document;

  return (
    <ul className="scrollbar-orange flex flex-col gap-3 max-h-[350px] md:max-h-[500px] overflow-y-auto">
      {documents.map(document => (
        <DocumentItem document={document} selectedDocumentId={selectedDocument?.id || null} key={document.id} />
      ))}
    </ul>
  );
};

export default DocumentList;
