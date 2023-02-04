import { render, screen } from '@testing-library/react';
import React from 'react';
import { Image } from '.';

describe('Image Component', () => {
  it('should render and display properties correctly', () => {
    const src = 'https://cdn.dicionariopopular.com/imagens/ricardo-milos.jpg';
    const alt = 'Uma vez visto, jamais sera desvisto.';
    const width = '100%';
    const height = '100%';
    const borderRadius = '10px';
    const boxShadow = '0 0 10px black';

    render(
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      />,
    );

    const imageElement = screen.getByAltText(alt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
    expect(imageElement).toHaveStyle(`width: ${width}`);
    expect(imageElement).toHaveStyle(`height: ${height}`);
    expect(imageElement).toHaveStyle(`border-radius: ${borderRadius}`);
    expect(imageElement).toHaveStyle(`box-shadow: ${boxShadow}`);
  });

  it('should match snapshot', () => {
    const src = 'https://cdn.dicionariopopular.com/imagens/ricardo-milos.jpg';
    const alt = 'Uma vez visto, jamais sera desvisto.';
    const width = '90%';
    const height = '90%';
    const borderRadius = '10px';
    const boxShadow = '0 0 10px black';

    const { asFragment } = render(
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
