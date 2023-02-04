import { render, screen } from '@testing-library/react';
import React from 'react';

import { Footer } from '.';

describe('Footer component', () => {
  it('should render and display properties correctly', () => {
    const text = 'MKS sistemas © Todos os direitos reservados';

    render(<Footer></Footer>);

    const content = screen.getByText(text);
    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle('font-size: 12px');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Footer></Footer>);

    expect(asFragment()).toMatchSnapshot();
  });
});
