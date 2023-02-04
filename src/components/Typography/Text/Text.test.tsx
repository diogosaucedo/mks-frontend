import { render, screen } from '@testing-library/react';
import React from 'react';

import { Text } from '.';

describe('Text component', () => {
  it('should render and display properties correctly', () => {
    const text = 'This is a text';
    const width = '240px';
    const height = '24px';
    const fontFamily = 'Arial';
    const fontSize = '16px';
    const fontWeight = 700;
    const color = 'red';
    const textAlign = 'center';
    const textDecoration = 'underline';
    const textTransform = 'uppercase';
    const textOverflow = 'ellipsis';
    const overflow = 'hidden';
    const wordWrap = 'break-word';

    render(
      <Text
        width={width}
        height={height}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        textAlign={textAlign}
        textDecoration={textDecoration}
        textTransform={textTransform}
        textOverflow={textOverflow}
        overflow={overflow}
        wordWrap={wordWrap}
      >
        {text}
      </Text>,
    );

    const textElement = screen.getByText(text);

    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P');
    expect(textElement).toHaveStyle(`width: ${width}`);
    expect(textElement).toHaveStyle(`height: ${height}`);
    expect(textElement).toHaveStyle(`font-family: ${fontFamily}`);
    expect(textElement).toHaveStyle(`font-size: ${fontSize}`);
    expect(textElement).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(textElement).toHaveStyle(`color: ${color}`);
    expect(textElement).toHaveStyle(`text-align: ${textAlign}`);
    expect(textElement).toHaveStyle(`text-decoration: ${textDecoration}`);
    expect(textElement).toHaveStyle(`text-transform: ${textTransform}`);
    expect(textElement).toBeVisible();
  });

  it('should match snapshot', () => {
    const text = 'This is a text';
    const width = '320px';
    const height = '32px';
    const fontFamily = 'Arial';
    const fontSize = '18px';
    const fontWeight = 500;
    const color = 'blue';
    const textAlign = 'center';
    const textDecoration = 'underline';
    const textTransform = 'uppercase';
    const textOverflow = 'ellipsis';
    const overflow = 'hidden';
    const wordWrap = 'break-word';

    const { asFragment } = render(
      <Text
        width={width}
        height={height}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        textAlign={textAlign}
        textDecoration={textDecoration}
        textTransform={textTransform}
        textOverflow={textOverflow}
        overflow={overflow}
        wordWrap={wordWrap}
      >
        {text}
      </Text>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
