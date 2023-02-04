import { store } from '@/store/';
import { addProduct, counter, getTotal } from '@/store/Stock.store';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';

import { Product } from '.';

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');

  return {
    ...originalModule,
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
  };
});

describe('Product feature', () => {
  it('should render properties correctly', () => {
    const product = {
      id: 8,
      name: 'Headset Cloud Stinger',
      brand: 'HyperX',
      description:
        'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
      price: 600.0,
      createdAt: '2023-01-23T18:17:04.771Z',
      updatedAt: '2023-01-23T18:17:04.771Z',
    };
    const truncatedPrice = Math.trunc(product.price);
    render(
      <Provider store={store}>
        <Product key={product.id} data={product} />
      </Provider>,
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText(`R$${truncatedPrice}`)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toHaveAttribute(
      'src',
      product.photo,
    );
    expect(screen.getByText('COMPRAR')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const product = {
      id: 8,
      name: 'Headset Cloud Stinger',
      brand: 'HyperX',
      description:
        'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
      price: 600.0,
      createdAt: '2023-01-23T18:17:04.771Z',
      updatedAt: '2023-01-23T18:17:04.771Z',
    };

    const { asFragment } = render(
      <Provider store={store}>
        <Product key={product.id} data={product} />
      </Provider>,
    );

    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should dispatch addProduct, counter and getTotal actions on button click', () => {
    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    const product = {
      id: 8,
      name: 'Headset Cloud Stinger',
      brand: 'HyperX',
      description:
        'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
      price: 600.0,
      createdAt: '2023-01-23T18:17:04.771Z',
      updatedAt: '2023-01-23T18:17:04.771Z',
    };

    render(
      <Provider store={store}>
        <Product key={product.id} data={product} />
      </Provider>,
    );
    const button = screen.getByRole('button');
    button.click();

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenCalledWith(
      addProduct({ ...product, amount: 1 }),
    );
    expect(dispatch).toHaveBeenCalledWith(counter());
    expect(dispatch).toHaveBeenCalledWith(getTotal());
  });
});
