import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Input } from './Input';

describe('Input', () => {
  it('should be rendered in the document', () => {
    const { container } = render(<Input type="email" />);
    expect(container).toBeInTheDocument();
  });

  it('should be rendered with the correct placeholder', () => {
    const placeholder = 'Email';
    const { getByPlaceholderText } = render(
      <Input type="email" placeholder={placeholder} />,
    );
    const input = getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });

  it('should call the onChange function when a change occurs', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Input type="email" onChange={onChange} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('should have the correct type and css properties', () => {
    const inputProps = {
      type: 'email',
      placeholder: 'test',
      required: true,
      width: '100px',
      height: '50px',
      padding: '10px',
      borderRadius: '5px',
      background: '#fff',
      border: '1px solid #000',
      color: '#000',
      fontSize: '14px',
      fontFamily: 'Arial',
      outline: 'none',
    };

    const { getByPlaceholderText } = render(<Input {...inputProps} />);

    const input = getByPlaceholderText('test');

    expect(input.getAttribute('type')).toBe(inputProps.type);
    expect(input).toHaveAttribute('required');
    expect(input).toHaveStyle(`width: ${inputProps.width}`);
    expect(input).toHaveStyle(`height: ${inputProps.height}`);
    expect(input).toHaveStyle(`padding: ${inputProps.padding}`);
    expect(input).toHaveStyle(`border-radius: ${inputProps.borderRadius}`);
    expect(input).toHaveStyle(`background: ${inputProps.background}`);
    expect(input).toHaveStyle(`border: ${inputProps.border}`);
    expect(input).toHaveStyle(`color: ${inputProps.color}`);
    expect(input).toHaveStyle(`font-size: ${inputProps.fontSize}`);
    expect(input).toHaveStyle(`font-family: ${inputProps.fontFamily}`);
    expect(input).toHaveStyle(`outline: ${inputProps.outline}`);
  });
});
