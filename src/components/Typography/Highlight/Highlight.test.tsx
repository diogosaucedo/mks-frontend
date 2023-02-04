import { render, screen } from '@testing-library/react';
import React from 'react';

import { Highlight } from '.';

describe('Highlight component', () => {
  it('should render and display properties correctly', () => {
    const text = 'This is a highlight';
    const width = '320px';
    const height = '24px';
    const padding = '10px';
    const fontFamily = 'Arial';
    const fontSize = '12px';
    const fontWeight = 700;
    const color = '#f2f2f2';
    const textAlign = 'center';
    const textDecoration = 'underline';
    const textTransform = 'uppercase';
    const background = 'rgba(0, 0, 0, 0.5)';
    const border = 'none';
    const borderRadius = '5px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';

    render(
      <Highlight
        width={width}
        height={height}
        padding={padding}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        textAlign={textAlign}
        textDecoration={textDecoration}
        textTransform={textTransform}
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      >
        {text}
      </Highlight>,
    );
    const highlightElement = screen.getByText(text);

    expect(highlightElement).toBeInTheDocument();
    expect(highlightElement.tagName).toBe('P');
    expect(highlightElement).toHaveStyle(`width: ${width};`);
    expect(highlightElement).toHaveStyle(`height: ${height};`);
    expect(highlightElement).toHaveStyle(`padding: ${padding};`);
    expect(highlightElement).toHaveStyle(`font-family: ${fontFamily};`);
    expect(highlightElement).toHaveStyle(`font-size: ${fontSize};`);
    expect(highlightElement).toHaveStyle(`font-weight: ${fontWeight};`);
    expect(highlightElement).toHaveStyle(`color: ${color};`);
    expect(highlightElement).toHaveStyle(`text-align: ${textAlign};`);
    expect(highlightElement).toHaveStyle(`text-decoration: ${textDecoration};`);
    expect(highlightElement).toHaveStyle(`text-transform: ${textTransform};`);
    expect(highlightElement).toHaveStyle(`background: ${background};`);
    expect(highlightElement).toHaveStyle(`border: ${border};`);
    expect(highlightElement).toHaveStyle(`border-radius: ${borderRadius};`);
    expect(highlightElement).toHaveStyle(`box-shadow: ${boxShadow};`);
  });

  it('should match snapshot', () => {
    const text = 'This is a highlight';
    const width = '300px';
    const height = '36px';
    const padding = '8px';
    const fontFamily = 'Arial';
    const fontSize = '16px';
    const fontWeight = 500;
    const color = '#f2f2f2';
    const textAlign = 'center';
    const textDecoration = 'underline';
    const textTransform = 'uppercase';
    const background = 'rgba(0, 0, 0, 0.8)';
    const border = 'none';
    const borderRadius = '8px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.3)';

    const { asFragment } = render(
      <Highlight
        width={width}
        height={height}
        padding={padding}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        textAlign={textAlign}
        textDecoration={textDecoration}
        textTransform={textTransform}
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      >
        {text}
      </Highlight>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
