import { ReactNode } from 'react';
interface HasClassName {
  className?: string;
}
interface HasChildren {
  children?: ReactNode;
}

export type { HasClassName, HasChildren };
