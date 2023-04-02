import type { InternalPathComponentProps, MathComponentProps } from '../types';
import { CreateMathComponent } from './CreateMathComponent';

const InternalBlockMath = ({ html }: InternalPathComponentProps) => {
  return (
    <div
      data-testid={'reactify-katex'}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const BlockMath = (props: MathComponentProps) => {
  return (
    <CreateMathComponent
      {...props}
      Component={InternalBlockMath}
      displayMode={true}
    />
  );
};
