import {useKaTeX} from '../hooks/use-katex.hook';
import type {CreateMathComponentProps} from '../types';

export const CreateMathComponent = ({
  children,
  errorColor,
  math,
  renderError,
  Component,
  displayMode,
}: CreateMathComponentProps) => {
  const formula = math ?? children ?? '';
  const {html, error} = useKaTeX({
    formula,
    displayMode,
    errorColor,
    renderError,
  });

  if (error) {
    return renderError ? (
      renderError(error)
    ) : (
      <Component html={`${error.message}`} />
    );
  }

  return <Component html={html} />;
};
