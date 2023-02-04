import React from 'react';
import { render, screen } from '@testing-library/react';
import { Stack } from '.';

describe('Stack component', () => {
  it('should render and display properties correctly', () => {
    const text = 'This is a test text';
    const flexDirection = 'column';
    const flexWrap = 'wrap';
    const alignItems = 'center';
    const justifyContent = 'space-between';
    const gap = '10px';
    const background = 'red';
    const border = '1px solid black';
    const borderRadius = '10px';
    const boxShadow = '0 0 10px black';

    render(
      <Stack
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        borderRadius={borderRadius}
        background={background}
        border={border}
        boxShadow={boxShadow}
      >
        {text}
      </Stack>,
    );

    const stackElement = screen.getByText(text);

    expect(stackElement).toBeInTheDocument();
    expect(stackElement.tagName).toBe('DIV');
    expect(stackElement).toHaveStyle(`display: flex`);
    expect(stackElement).toHaveStyle(`flex-direction: ${flexDirection}`);
    expect(stackElement).toHaveStyle(`flex-wrap: ${flexWrap}`);
    expect(stackElement).toHaveStyle(`align-items: ${alignItems}`);
    expect(stackElement).toHaveStyle(`justify-content: ${justifyContent}`);
    expect(stackElement).toHaveStyle(`gap: ${gap}`);
    expect(stackElement).toHaveStyle(`background: ${background}`);
    expect(stackElement).toHaveStyle(`border: ${border}`);
    expect(stackElement).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(stackElement).toHaveStyle(`box-shadow: ${boxShadow}`);
  });

  it('should match snapshot', () => {
    const text = 'This is a test text';
    const flexDirection = 'column';
    const flexWrap = 'wrap';
    const alignItems = 'center';
    const justifyContent = 'space-between';
    const gap = '12px';
    const background = 'purple';
    const border = '1px solid black';
    const borderRadius = '12px';
    const boxShadow = '0 0 12px black';

    const { asFragment } = render(
      <Stack
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        borderRadius={borderRadius}
        background={background}
        border={border}
        boxShadow={boxShadow}
      >
        {text}
      </Stack>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
