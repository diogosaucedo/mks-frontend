import React from 'react';
import { render } from '@testing-library/react';
import { NavBar } from './Navbar';

describe('Navbar component', () => {
  // it('renders with given width and height', () => {
  //   const { container } = render(<NavBar />);

  //   expect(container).toBeInTheDocument();
  //   expect(container).toHaveStyle(`width: 100%`);
  //   expect(container).toHaveStyle(`height: 100px`);
  // });

  // it('renders with given background color', () => {
  //   const { container } = render(<NavBar />);
  //   expect(container).toHaveStyle(`background: #0F52BA`);
  // });

  it('renders heading with text "MKS"', () => {
    const { getByText } = render(<NavBar />);
    const heading = getByText('MKS');
    expect(heading).toBeInTheDocument();
  });

  it('renders subheading with text "Sistemas"', () => {
    const { getByText } = render(<NavBar />);
    const subHeading = getByText('Sistemas');
    expect(subHeading).toBeInTheDocument();
  });

  it('renders button with text "0"', () => {
    const { getByText } = render(<NavBar />);
    const button = getByText('0');
    expect(button).toBeInTheDocument();
  });
});
