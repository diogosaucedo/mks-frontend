import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button component', () => {
  it('should render and display properties correctly', () => {
    const text = 'This is a button';
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
    const background = '#f2f2f2';
    const border = 'none';
    const borderRadius = '5px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';

    render(
      <Button
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
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      >
        {text}
      </Button>,
    );

    const buttonElement = screen.getByText(text);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
    expect(buttonElement).toHaveStyle(`display: flex`);
    expect(buttonElement).toHaveStyle(`align-items: center`);
    expect(buttonElement).toHaveStyle(`justify-content: center`);
    expect(buttonElement).toHaveStyle(`width: ${width}`);
    expect(buttonElement).toHaveStyle(`height: ${height}`);
    expect(buttonElement).toHaveStyle(`font-family: ${fontFamily}`);
    expect(buttonElement).toHaveStyle(`font-size: ${fontSize}`);
    expect(buttonElement).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(buttonElement).toHaveStyle(`color: ${color}`);
    expect(buttonElement).toHaveStyle(`text-align: ${textAlign}`);
    expect(buttonElement).toHaveStyle(`text-decoration: ${textDecoration}`);
    expect(buttonElement).toHaveStyle(`text-transform: ${textTransform}`);
    expect(buttonElement).toHaveStyle(`background: ${background}`);
    expect(buttonElement).toHaveStyle(`border: ${border}`);
    expect(buttonElement).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(buttonElement).toHaveStyle(`box-shadow: ${boxShadow}`);
    expect(buttonElement).toHaveStyle(`outline: none`);
  });

  it('should trigger onClick', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Button onClick={handleClick}>Button</Button>);
    const button = getByText('Button');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const text = 'This is a button';
    const width = '180px';
    const height = '20px';
    const fontFamily = 'Arial';
    const fontSize = '12px';
    const fontWeight = 500;
    const color = 'blue';
    const textAlign = 'center';
    const textDecoration = 'underline';
    const textTransform = 'uppercase';
    const textOverflow = 'ellipsis';
    const overflow = 'hidden';
    const wordWrap = 'break-word';
    const background = '#f2f2f2';
    const border = 'none';
    const borderRadius = '5px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';

    const { asFragment } = render(
      <Button
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
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      >
        {text}
      </Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
