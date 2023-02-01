import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading component', () => {
  it('renders with default font family, font size and font weight if not specified', () => {
    const { getByText } = render(<Heading type="h1">Heading 1</Heading>);

    const headingElement = getByText('Heading 1');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
    expect(headingElement).toHaveStyle('font-family: inherit');
  });

  it('should render the heading with correct type, text and styles', () => {
    const text = 'Heading Example';
    const fontFamily = 'Arial';
    const fontSize = '24px';
    const fontWeight = 700;
    const color = 'red';

    const { getByText } = render(
      <Heading
        type="h2"
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
      >
        {text}
      </Heading>,
    );

    const headingElement = getByText(text);

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H2');
    expect(headingElement).toHaveStyle(`font-family: ${fontFamily}`);
    expect(headingElement).toHaveStyle(`font-size: ${fontSize}`);
    expect(headingElement).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(headingElement).toHaveStyle(`color: ${color}`);
  });
});
