import React from 'react';
import { render } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack component', () => {
  it('should render default stack properties', () => {
    const { getByTestId } = render(<Stack data-testid="stack">Test</Stack>);
    const stackElement = getByTestId('stack');

    expect(stackElement).toBeInTheDocument();
    expect(stackElement.tagName).toBe('DIV');
    expect(stackElement).toHaveStyle('display: flex');
  });

  it('should render custom stack properties', () => {
    const flexDirection = 'column';
    const alignItems = 'center';
    const justifyContent = 'space-between';
    const gap = '10px';
    const padding = '20px';
    const borderRadius = '10px';
    const background = 'red';
    const border = '1px solid black';

    const { getByTestId } = render(
      <Stack
        data-testid="stack"
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        padding={padding}
        borderRadius={borderRadius}
        background={background}
        border={border}
      >
        Test
      </Stack>,
    );
    const stackElement = getByTestId('stack');

    expect(stackElement).toBeInTheDocument();
    expect(stackElement.tagName).toBe('DIV');
    expect(stackElement).toHaveStyle(`flex-direction: ${flexDirection}`);
    expect(stackElement).toHaveStyle(`align-items: ${alignItems}`);
    expect(stackElement).toHaveStyle(`justify-content: ${justifyContent}`);
    expect(stackElement).toHaveStyle(`gap: ${gap}`);
    expect(stackElement).toHaveStyle(`padding: ${padding}`);
    expect(stackElement).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(stackElement).toHaveStyle(`background: ${background}`);
    expect(stackElement).toHaveStyle(`border: ${border}`);
  });
});
