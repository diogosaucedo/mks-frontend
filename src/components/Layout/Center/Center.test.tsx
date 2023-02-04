import React from 'react';
import { render, screen } from '@testing-library/react';

import { Center } from '.';

describe('Center component', () => {
  it('should render and display properties correctly', () => {
    const text = 'This is a center component';
    const width = '600px';
    const height = '600px';
    const padding = '8px';
    const background = '#f2f2f2';
    const border = 'none';
    const borderRadius = '5px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';

    render(
      <Center
        width={width}
        height={height}
        padding={padding}
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      >
        {text}
      </Center>,
    );

    const centerElement = screen.getByText(text);

    expect(centerElement).toBeInTheDocument();
    expect(centerElement.tagName).toBe('DIV');
    expect(centerElement).toHaveStyle(`display: flex`);
    expect(centerElement).toHaveStyle(`align-items: center`);
    expect(centerElement).toHaveStyle(`justify-content: center`);
    expect(centerElement).toHaveStyle(`width: ${width}`);
    expect(centerElement).toHaveStyle(`height: ${height}`);
    expect(centerElement).toHaveStyle(`padding: ${padding}`);
    expect(centerElement).toHaveStyle(`background: ${background}`);
    expect(centerElement).toHaveStyle(`border: ${border}`);
    expect(centerElement).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(centerElement).toHaveStyle(`box-shadow: ${boxShadow}`);
  });

  it('should match the snapshot', () => {
    const text = 'This is a center component';
    const width = '400px';
    const height = '400px';
    const padding = '12px';
    const background = '#f2f2f2';
    const border = 'none';
    const borderRadius = '5px';
    const boxShadow = '2px 2px 5px rgba(0,0,0,0.5)';

    const { asFragment } = render(
      <Center
        width={width}
        height={height}
        padding={padding}
        background={background}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      >
        {text}
      </Center>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
