import SaveSvg from '../../assets/svgs/SaveSvg';
import Check from '../../assets/svgs/CheckSvg';
import ButtonBox from '../others/ButtonBox';
import { useDispatch, useSelector } from 'react-redux';
import { IDocument, IStore } from '../../types/types';
import { isDocumentSavedSliceActions } from '../../store/slices/isDocumentSavedSlice';
import useSelectedDocument from '../../hooks/useSelectedDocument';
import { documentSliceActions } from '../../store/slices/document/documentSlice';

const { saveDocumentContent } = documentSliceActions;
const { setIsDocumentSaved } = isDocumentSavedSliceActions;

const SaveDocumentButton = () => {
  const dispatch = useDispatch();
  const selectedDocument = useSelectedDocument('all') as IDocument;

  const { isDocumentSaved, content } = useSelector(state => state as IStore);
  const { isSaved } = isDocumentSaved;
  

  const handleClick = () => {
    if (!isSaved) {
      dispatch(saveDocumentContent({ document: selectedDocument, newContent: content.md }));
      dispatch(setIsDocumentSaved(true));
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
