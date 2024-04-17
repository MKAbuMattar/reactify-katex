import type {InternalPathComponentProps, MathComponentProps} from '../types';
import {CreateMathComponent} from './create-math.component';

const InternalInlineMath = ({html}: InternalPathComponentProps) => {
  return (
    <span
      data-testid={'reactify-katex'}
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
};

export const InlineMath = (props: MathComponentProps) => {
  return (
    <CreateMathComponent
      {...props}
      Component={InternalInlineMath}
      displayMode={false}
    />
  );
};
