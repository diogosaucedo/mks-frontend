import { render } from '@testing-library/react';
import React from 'react';

import { Text } from './Text';

describe('Text component', () => {
  it('should render default font properties', () => {
    const { getByText } = render(<Text>Test</Text>);
    const textElement = getByText('Test');

    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
    expect(textElement).toHaveStyle('font-family: inherit');
    expect(textElement).toHaveStyle('font-weight: 400');
  });

  it('should render custom font properties', () => {
    const fontFamily = 'Arial';
    const fontSize = '14px';
    const fontWeight = 700;
    const color = 'red';
    const { getByText } = render(
      <Text
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
      >
        Test
      </Text>,
    );
    const textElement = getByText('Test');

    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
    expect(textElement).toHaveStyle(`font-family: ${fontFamily}`);
    expect(textElement).toHaveStyle(`font-size: ${fontSize}`);
    expect(textElement).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(textElement).toHaveStyle(`color: ${color}`);
  });
});
