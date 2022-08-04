import SaveSvg from '../../assets/svgs/SaveSvg';
import Check from '../../assets/svgs/CheckSvg';
import ButtonBox from '../others/ButtonBox';
import { useDispatch, useSelector } from 'react-redux';
import { IDocument, IStore } from '../../types/types';
import useSelectedDocument from '../../hooks/useSelectedDocument';
import { documentSliceActions } from '../../store/slices/document/documentSlice';
import { selectedDocumentSliceActions } from '../../store/slices/selectedDocumentSlice';

const { saveDocumentContent } = documentSliceActions;
const { setSelectedDocument } = selectedDocumentSliceActions;

const SaveDocumentButton = () => {
  const dispatch = useDispatch();
  const selectedDocument = useSelectedDocument('all') as IDocument;
  const { isSaved } = selectedDocument;
  const { content } = useSelector(state => state as IStore);

  const handleClick = () => {
    if (!isSaved) {
      dispatch(saveDocumentContent({ document: selectedDocument, newContent: content.md }));
      dispatch(setSelectedDocument({ ...selectedDocument, content: content.md, isSaved: true }));
    }
  };

  return (
    <ButtonBox handleClick={handleClick}>
      <div className="m-auto">
        {isSaved ? (
          <div className="flex flex-col text-xs text-white-100 font-medium">
            <Check className="mx-auto" />
            Saved
          </div>
        ) : (
          <SaveSvg />
        )}
      </div>
    </ButtonBox>
  );
};

export default SaveDocumentButton;
