import { render, screen } from '@testing-library/react';
import React from 'react';
import { NavBar } from '.';
import { store } from '@/store/';
import { Provider } from 'react-redux';

describe('Navbar component', () => {
  test('should render properties correctly', () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>,
    );

    expect(screen.getByText('MKS')).toBeInTheDocument();
    expect(screen.getByText('Sistemas')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <NavBar />
      </Provider>,
    );

    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
