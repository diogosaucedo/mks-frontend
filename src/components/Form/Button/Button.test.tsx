// Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('should render with default styles', () => {
    const { getByText } = render(<Button>Button</Button>);
    const button = getByText('Button');

    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveStyle(`display: flex;`);
    expect(button).toHaveStyle(`align-items: center;`);
    expect(button).toHaveStyle(`justify-content: center;`);
    expect(button).toHaveStyle(`outline: none;`);
    expect(button).toHaveStyle(`font-family: inherit;`);
  });

  it('should render with custom styles', () => {
    const buttonProps = {
      width: '100px',
      height: '50px',
      borderRadius: '10px',
      background: '#333',
      border: '1px solid #333',
      color: '#fff',
      fontFamily: 'Arial',
      fontSize: '14px',
      textDecoration: 'underline',
      hover: 'background: #fff; color: #333',
    };

    const { getByText } = render(<Button {...buttonProps}>Button</Button>);

    const button = getByText('Button');

    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveStyle(`display: flex`);
    expect(button).toHaveStyle(`align-items: center`);
    expect(button).toHaveStyle(`justify-content: center`);
    expect(button).toHaveStyle(`width: ${buttonProps.width}`);
    expect(button).toHaveStyle(`height: ${buttonProps.height}`);
    expect(button).toHaveStyle(`border-radius: ${buttonProps.borderRadius}`);
    expect(button).toHaveStyle(`background: ${buttonProps.background}`);
    expect(button).toHaveStyle(`border: ${buttonProps.border}`);
    expect(button).toHaveStyle(`outline: none`);
    expect(button).toHaveStyle(`color: ${buttonProps.color}`);
    expect(button).toHaveStyle(`font-family: ${buttonProps.fontFamily}`);
    expect(button).toHaveStyle(`font-size: ${buttonProps.fontSize}`);
    expect(button).toHaveStyle(
      `text-decoration: ${buttonProps.textDecoration}`,
    );
  });

  it('should trigger onClick', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Button onClick={handleClick}>Button</Button>);
    const button = getByText('Button');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
