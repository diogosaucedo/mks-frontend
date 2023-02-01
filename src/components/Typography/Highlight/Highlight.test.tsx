import { render } from '@testing-library/react';
import React from 'react';

import { Highlight } from './Highlight';

describe('Highlight component', () => {
  it('should render default font properties', () => {
    const { getByText } = render(
      <Highlight background="yellow">Test</Highlight>,
    );
    const highlightElement = getByText('Test');

    expect(highlightElement).toBeInTheDocument();
    expect(highlightElement.tagName).toBe('P');
    expect(highlightElement).toHaveStyle('font-family: inherit');
    expect(highlightElement).toHaveStyle('font-size: inherit');
    expect(highlightElement).toHaveStyle('font-weight: inherit');
    expect(highlightElement).toHaveStyle('background: yellow');
  });

  it('should render custom font properties', () => {
    const fontFamily = 'Arial';
    const fontSize = '14px';
    const fontWeight = 700;
    const color = 'red';
    const background = 'green';
    const { getByText } = render(
      <Highlight
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        background={background}
      >
        Test
      </Highlight>,
    );
    const highlightElement = getByText('Test');

    expect(highlightElement).toBeInTheDocument();
    expect(highlightElement.tagName).toBe('P');
    expect(highlightElement).toHaveStyle(`font-family: ${fontFamily}`);
    expect(highlightElement).toHaveStyle(`font-size: ${fontSize}`);
    expect(highlightElement).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(highlightElement).toHaveStyle(`color: ${color}`);
    expect(highlightElement).toHaveStyle(`background: ${background}`);
  });
});
