# reactify-katex

`reactify-katex` is an NPM package that provides a simple and convenient way to use KaTeX in React applications. This package includes two components, `BlockMath` and `InlineMath`, which can be used to render mathematical expressions.

## Installation

To install `reactify-katex`, use the following command:

```bash
# npm
npm install --save reactify-katex

# yarn
yarn add reactify-katex

# pnpm
pnpm add reactify-katex
```

## Usage

```tsx
import React from 'react';
import { BlockMath, InlineMath } from 'reactify-katex';
import 'katex/dist/katex.min.css';

const App = () => {
  return (
    <>
      <BlockMath math={'\\frac{1}{n}'} />
      <InlineMath math={'x^2 + y^2 = z^2'} />
    </>
  );
};

export default App;
```

## API

### `BlockMath`

The `BlockMath` component is used to render mathematical equations and symbols in display mode. It takes the following props:

- `math` (string, optional): the KaTeX string to be rendered.
- `children` (string, optional): an alternative way to pass the KaTeX string as a child.
- `errorColor` (string, optional): the color of the error message displayed if the KaTeX string is invalid (default is 'red').
- `renderError` (function, optional): a function that returns a React element to be displayed if the KaTeX string is invalid (useful for customizing the error message).

```tsx
<BlockMath
  math={'\\frac{1}{n}'}
  errorColor={'blue'}
  renderError={(error) => <div>{error.message}</div>}
/>;

{
  /* Alternatively, you can pass the KaTeX string as a child */
}
<BlockMath>{'\\frac{1}{n}'}</BlockMath>;
```

### `InlineMath`

The `InlineMath` component is used to render mathematical equations and symbols in inline mode. It takes the same props as `BlockMath`.

```tsx
<InlineMath math={'x^2 + y^2 = z^2'} />;

{
  /* Alternatively, you can pass the KaTeX string as a child */
}
<InlineMath>x^2 + y^2 = z^2</InlineMath>;
```

## License

This package is licensed under the MIT License.
