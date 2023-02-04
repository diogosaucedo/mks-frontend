import { render, screen } from '@testing-library/react';
import React from 'react';
import { Flex } from '.';

describe('Flex component', () => {
  it('should render and display properties correctly', () => {
    const text = 'This is a test text';
    const flexDirection = 'column';
    const flexWrap = 'wrap';
    const alignItems = 'center';
    const justifyContent = 'space-between';
    const gap = '10px';
    const width = '100%';
    const height = '200px';
    const padding = '20px';
    const background = 'red';
    const border = '1px solid black';
    const borderRadius = '10px';
    const boxShadow = '0 0 10px black';

    render(
      <Flex
        data-testid="flex"
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        width={width}
        height={height}
        padding={padding}
        borderRadius={borderRadius}
        background={background}
        border={border}
        boxShadow={boxShadow}
      >
        {text}
      </Flex>,
    );
    const flexElement = screen.getByText(text);

    expect(flexElement).toBeInTheDocument();
    expect(flexElement.tagName).toBe('DIV');
    expect(flexElement).toHaveStyle('display: flex');
    expect(flexElement).toHaveStyle(`flex-direction: ${flexDirection}`);
    expect(flexElement).toHaveStyle(`flex-wrap: ${flexWrap}`);
    expect(flexElement).toHaveStyle(`align-items: ${alignItems}`);
    expect(flexElement).toHaveStyle(`justify-content: ${justifyContent}`);
    expect(flexElement).toHaveStyle(`gap: ${gap}`);
    expect(flexElement).toHaveStyle(`width: ${width}`);
    expect(flexElement).toHaveStyle(`height: ${height}`);
    expect(flexElement).toHaveStyle(`padding: ${padding}`);
    expect(flexElement).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(flexElement).toHaveStyle(`background: ${background}`);
    expect(flexElement).toHaveStyle(`border: ${border}`);
    expect(flexElement).toHaveStyle(`box-shadow: ${boxShadow}`);
  });

  it('should match snapshot', () => {
    const text = 'This is a test text';
    const flexDirection = 'column';
    const flexWrap = 'wrap';
    const alignItems = 'center';
    const justifyContent = 'space-between';
    const gap = '12px';
    const width = '80%';
    const height = '240px';
    const padding = '24px';
    const background = 'red';
    const border = '1px solid black';
    const borderRadius = '10px';
    const boxShadow = '0 0 10px black';

    const { asFragment } = render(
      <Flex
        data-testid="flex"
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        width={width}
        height={height}
        padding={padding}
        borderRadius={borderRadius}
        background={background}
        border={border}
        boxShadow={boxShadow}
      >
        {text}
      </Flex>,
    );

    expect(asFragment).toMatchSnapshot();
  });
});
