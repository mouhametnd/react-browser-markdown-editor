import SaveSvg from '../../assets/svgs/SaveSvg';
import Check from '../../assets/svgs/CheckSvg';
import ButtonBox from '../others/ButtonBox';
import { useDispatch, useSelector } from 'react-redux';
import { IDocument, IStore } from '../../types/types';
import { saveDocumentSliceActions } from '../../store/slices/saveDocumentSlice';
import setDataToLS from '../../functions/setDataToLS';
import useSelectedDocument from '../../hooks/useSelectedDocument';
import getDocumentById from '../../functions/getDocumentByid';

const { saveDocument: saveDocumentAction } = saveDocumentSliceActions;
const SaveDocumentButton = () => {
  const dispatch = useDispatch();
  const { saveDocument, document, content } = useSelector(state => state as IStore);
  const { isSaved } = saveDocument;
  const selectedDocument = useSelectedDocument('all') as IDocument;
  

  const handleClick = () => {
    if (!isSaved) {
      dispatch(saveDocumentAction({ selectedDocument, document, mdContent: content.md }));
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
