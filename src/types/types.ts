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
  created: number;
  content: string;
  isSaved: boolean;
}

interface IDocumentSlice {
  documents: IDocument[];
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
}

type TDataStorage = {
  isDarkTheme: boolean;
  document: IDocumentSlice;
};

export type {
  HasClassName,
  HasChildren,
  IStore,
  IDocument,
  IDocumentSlice,
  IContent,
  TDocumentState,
  TDocumentSliceReducers,
  IRenameDocumentPayload,
  TUseSelectedDocumentReturnArray,
  IHideEditorLeft,
  TDataStorage,
};
