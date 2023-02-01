import { render } from '@testing-library/react';
import React from 'react';
import { Flex } from './Flex';

describe('Flex component', () => {
  it('should render default flex properties', () => {
    const { getByTestId } = render(<Flex data-testid="flex">Test</Flex>);
    const flexElement = getByTestId('flex');

    expect(flexElement).toBeInTheDocument();
    expect(flexElement.tagName).toBe('DIV');
    expect(flexElement).toHaveStyle('display: flex');
  });

  it('should render custom flex properties', () => {
    const flexDirection = 'column';
    const flexWrap = 'wrap';
    const flexBasis = '20%';
    const flexGrow = '1';
    const flexShrink = '0';
    const alignItems = 'center';
    const justifyContent = 'space-between';
    const gap = '10px';
    const width = '100%';
    const maxWidth = '600px';
    const height = '200px';
    const maxHeight = '400px';
    const padding = '20px';
    const borderRadius = '10px';
    const background = 'red';
    const border = '1px solid black';

    const { getByTestId } = render(
      <Flex
        data-testid="flex"
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        flexBasis={flexBasis}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        width={width}
        maxWidth={maxWidth}
        height={height}
        maxHeight={maxHeight}
        padding={padding}
        borderRadius={borderRadius}
        background={background}
        border={border}
      >
        Test
      </Flex>,
    );
    const flexElement = getByTestId('flex');

    expect(flexElement).toBeInTheDocument();
    expect(flexElement.tagName).toBe('DIV');
    expect(flexElement).toHaveStyle('display: flex');
    expect(flexElement).toHaveStyle(`flex-direction: ${flexDirection}`);
    expect(flexElement).toHaveStyle(`flex-wrap: ${flexWrap}`);
    expect(flexElement).toHaveStyle(`flex-basis: ${flexBasis}`);
    expect(flexElement).toHaveStyle(`flex-grow: ${flexGrow}`);
    expect(flexElement).toHaveStyle(`flex-shrink: ${flexShrink}`);
    expect(flexElement).toHaveStyle(`align-items: ${alignItems}`);
    expect(flexElement).toHaveStyle(`justify-content: ${justifyContent}`);
    expect(flexElement).toHaveStyle(`gap: ${gap}`);
    expect(flexElement).toHaveStyle(`width: ${width}`);
    expect(flexElement).toHaveStyle(`max-width: ${maxWidth}`);
    expect(flexElement).toHaveStyle(`height: ${height}`);
    expect(flexElement).toHaveStyle(`max-height: ${maxHeight}`);
    expect(flexElement).toHaveStyle(`padding: ${padding}`);
    expect(flexElement).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(flexElement).toHaveStyle(`background: ${background}`);
    expect(flexElement).toHaveStyle(`border: ${border}`);
  });
});
