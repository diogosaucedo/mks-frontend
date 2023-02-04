import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Input } from '.';

describe('Input component', () => {
  it('should have the correct type and css properties', () => {
    const type = 'text';
    const placeholder = 'This is a input';
    const disabled = false;
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
    const wordWrap = 'break-word';
    const background = '#f2f2f2';
    const border = 'none';
    const borderRadius = '5px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';

    render(
      <Input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
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
        wordWrap={wordWrap}
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      />,
    );
    const inputElement = screen.getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe('INPUT');
    expect(inputElement).toHaveAttribute('type', type);
    expect(inputElement).toHaveStyle(`width: ${width}`);
    expect(inputElement).toHaveStyle(`height: ${height}`);
    expect(inputElement).toHaveStyle(`font-family: ${fontFamily}`);
    expect(inputElement).toHaveStyle(`font-size: ${fontSize}`);
    expect(inputElement).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(inputElement).toHaveStyle(`color: ${color}`);
    expect(inputElement).toHaveStyle(`text-align: ${textAlign}`);
    expect(inputElement).toHaveStyle(`text-decoration: ${textDecoration}`);
    expect(inputElement).toHaveStyle(`text-transform: ${textTransform}`);
    expect(inputElement).toHaveStyle(`text-overflow: ${textOverflow}`);
    expect(inputElement).toHaveStyle(`word-wrap: ${wordWrap}`);
    expect(inputElement).toHaveStyle(`background: ${background}`);
    expect(inputElement).toHaveStyle(`border: ${border}`);
    expect(inputElement).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(inputElement).toHaveStyle(`box-shadow: ${boxShadow}`);
  });

  it('should call the onChange function when a change occurs', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Input type="email" onChange={onChange} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });

  // Snapshot
  it('should match the snapshot', () => {
    const type = 'text';
    const placeholder = 'This is a input';
    const disabled = false;
    const width = '200px';
    const height = '24px';
    const fontFamily = 'Arial';
    const fontSize = '16px';
    const fontWeight = 400;
    const color = 'blue';
    const textAlign = 'center';
    const textDecoration = 'underline';
    const textTransform = 'uppercase';
    const textOverflow = 'ellipsis';
    const wordWrap = 'break-word';
    const background = '#f2f2f2';
    const border = 'none';
    const borderRadius = '5px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';

    const { asFragment } = render(
      <Input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
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
        wordWrap={wordWrap}
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
