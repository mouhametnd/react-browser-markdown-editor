import { documentSliceActions } from '../store/slices/document/documentSlice';
import store from '../store/store';
import { IRenameDocumentPayload } from '../types/types';

const { renameDocument } = documentSliceActions;
const dispatch = store.dispatch;
const setRenameDocument = (payload: IRenameDocumentPayload) => dispatch(renameDocument(payload));

export default setRenameDocument;
