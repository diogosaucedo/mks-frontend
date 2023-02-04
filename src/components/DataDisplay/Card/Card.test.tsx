import { render, screen } from '@testing-library/react';
import React from 'react';

import { Card } from '.';

describe('Card component', () => {
  it('should render and display properties correctly', () => {
    const text = 'This is a card';
    const flexDirection = 'column';
    const flexWrap = 'wrap';
    const alignItems = 'center';
    const justifyContent = 'center';
    const gap = '8px';
    const width = '240px';
    const height = '320px';
    const padding = '8px';
    const background = '#f2f2f2';
    const border = 'none';
    const borderRadius = '5px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';

    render(
      <Card
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        width={width}
        height={height}
        padding={padding}
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      >
        {text}
      </Card>,
    );
    const cardElement = screen.getByText(text);

    expect(cardElement).toBeInTheDocument();
    expect(cardElement.tagName).toBe('DIV');
    expect(cardElement).toHaveStyle(`flex-direction: ${flexDirection};`);
    expect(cardElement).toHaveStyle(`flex-wrap: ${flexWrap};`);
    expect(cardElement).toHaveStyle(`align-items: ${alignItems};`);
    expect(cardElement).toHaveStyle(`justify-content: ${justifyContent};`);
    expect(cardElement).toHaveStyle(`gap: ${gap};`);
    expect(cardElement).toHaveStyle(`width: ${width};`);
    expect(cardElement).toHaveStyle(`height: ${height};`);
    expect(cardElement).toHaveStyle(`padding: ${padding};`);
    expect(cardElement).toHaveStyle(`background: ${background};`);
    expect(cardElement).toHaveStyle(`border: ${border};`);
    expect(cardElement).toHaveStyle(`border-radius: ${borderRadius};`);
    expect(cardElement).toHaveStyle(`box-shadow: ${boxShadow};`);
  });

  it('should match snapshot', () => {
    const text = 'This is a card';
    const flexDirection = 'column';
    const flexWrap = 'wrap';
    const alignItems = 'center';
    const justifyContent = 'center';
    const gap = '12px';
    const width = '320px';
    const height = '360px';
    const padding = '16px';
    const background = '#f2f2f2';
    const border = 'none';
    const borderRadius = '8px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';

    const { asFragment } = render(
      <Card
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        width={width}
        height={height}
        padding={padding}
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      >
        {text}
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
