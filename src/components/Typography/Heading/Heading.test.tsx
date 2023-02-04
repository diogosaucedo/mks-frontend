import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from '.';

describe('Heading component', () => {
  it('should render and display properties correctly', () => {
    const text = 'This is a heading';
    const type = 'h2';
    const width = '100%';
    const height = '24px';
    const fontFamily = 'Arial';
    const fontSize = '16px';
    const fontWeight = 600;
    const color = 'black';
    const textAlign = 'center';
    const textDecoration = 'none';
    const textTransform = 'uppercase';
    const letterSpacing = '0.05em';
    const textOverflow = 'ellipsis';
    const overflow = 'hidden';
    const wordWrap = 'break-word';

    render(
      <Heading
        type={type}
        width={width}
        height={height}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        textAlign={textAlign}
        textDecoration={textDecoration}
        textTransform={textTransform}
        letterSpacing={letterSpacing}
        textOverflow={textOverflow}
        overflow={overflow}
        wordWrap={wordWrap}
      >
        {text}
      </Heading>,
    );

    const headingElement = screen.getByText(text);

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H2');
    expect(headingElement).toHaveStyle(`width: ${width}`);
    expect(headingElement).toHaveStyle(`height: ${height}`);
    expect(headingElement).toHaveStyle(`font-family: ${fontFamily}`);
    expect(headingElement).toHaveStyle(`font-size: ${fontSize}`);
    expect(headingElement).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(headingElement).toHaveStyle(`color: ${color}`);
    expect(headingElement).toHaveStyle(`text-align: ${textAlign}`);
    expect(headingElement).toHaveStyle(`text-decoration: ${textDecoration}`);
    expect(headingElement).toHaveStyle(`text-transform: ${textTransform}`);
    expect(headingElement).toHaveStyle(`letter-spacing: ${letterSpacing}`);
  });

  it('should match snapshot', () => {
    const text = 'This is a heading';
    const type = 'h4';
    const width = '90%';
    const height = '32px';
    const fontFamily = 'Arial';
    const fontSize = '16px';
    const fontWeight = 500;
    const color = 'black';
    const textAlign = 'center';
    const textDecoration = 'none';
    const textTransform = 'uppercase';
    const letterSpacing = '0.05em';
    const textOverflow = 'ellipsis';
    const overflow = 'hidden';
    const wordWrap = 'break-word';

    const { asFragment } = render(
      <Heading
        type={type}
        width={width}
        height={height}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        textAlign={textAlign}
        textDecoration={textDecoration}
        textTransform={textTransform}
        letterSpacing={letterSpacing}
        textOverflow={textOverflow}
        overflow={overflow}
        wordWrap={wordWrap}
      >
        {text}
      </Heading>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
