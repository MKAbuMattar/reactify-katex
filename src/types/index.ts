import type { ComponentType, ReactElement } from 'react';

export interface MathComponentProps {
  children?: string;
  errorColor?: string;
  math?: string;
  renderError?: (error: Error) => ReactElement;
}

export interface CreateMathComponentProps extends MathComponentProps {
  Component: ComponentType<InternalPathComponentProps>;
  displayMode: boolean;
}

export interface InternalPathComponentProps {
  html: string;
}
