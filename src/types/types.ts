import { Draft } from '@reduxjs/toolkit';
import { Dispatch, ReactNode } from 'react';
interface HasClassName {
  className?: string;
}
interface HasChildren {
  children?: ReactNode;
}

interface IDocument {
  id: string;
  name: string;
  date: number;
  content: string;
}

interface IDocumentSlice {
  documents: IDocument[];
}

interface ICreateDocumentAction {
  type: string;
  payload: {
    name: string;
    content?: string;
  };
}

interface IContent {
  md: string;
  html: string;
}
type TDocumentState = Draft<IDocumentSlice>;

type TDocumentSliceReducers<T extends { type: string }> = (state: TDocumentState, payload: T) => IDocumentSlice;

interface IHideEditorLeft {
  hideEditorLeft: boolean;
}

interface IRenameDocumentPayload {
  newName: string;
  document: IDocument;
}

type TUseSelectedDocumentReturnArray = [string, Dispatch<React.SetStateAction<string>>];

interface ISaveDocumentState {
  isSaved: boolean;
}

interface IStore {
  asideOpen: {
    isAsideOpen: boolean;
  };
  theme: {
    isDarkTheme: boolean;
  };
  document: IDocumentSlice;
  selectedDocument: IDocument;
  content: IContent;
  saveDocument: ISaveDocumentState;
}

export type {
  HasClassName,
  HasChildren,
  IStore,
  IDocument,
  IDocumentSlice,
  ICreateDocumentAction,
  IContent,
  TDocumentState,
  TDocumentSliceReducers,
  IRenameDocumentPayload,
  TUseSelectedDocumentReturnArray,
  IHideEditorLeft,
  ISaveDocumentState,
};
