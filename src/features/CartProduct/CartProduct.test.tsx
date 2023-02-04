import { store } from '@/store/';
import {
  removeProduct,
  counter,
  incrementAmountProduct,
  decrementAmountProduct,
  getTotal,
} from '@/store/Stock.store';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';

import { CartProduct } from '.';

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');

  return {
    ...originalModule,
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
  };
});

describe('CardProduct feature', () => {
  it('should render properties correctly', () => {
    const product = {
      id: 8,
      name: 'Headset Cloud Stinger',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
      price: 600.0,
      amount: 1,
    };

    const truncatedPrice = Math.trunc(product.price);

    render(
      <Provider store={store}>
        <CartProduct key={product.id} data={product} />
      </Provider>,
    );
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`R$${truncatedPrice}`)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toHaveAttribute(
      'src',
      product.photo,
    );
  });

  it('should match snapshot', () => {
    const product = {
      id: 8,
      name: 'Headset Cloud Stinger',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
      price: 600.0,
      amount: 1,
    };

    const { asFragment } = render(
      <Provider store={store}>
        <CartProduct key={product.id} data={product} />
      </Provider>,
    );

    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should dispatch actions correctly', () => {
    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);

    const product = {
      id: 8,
      name: 'Headset Cloud Stinger',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
      price: 600.0,
      amount: 1,
    };

    render(
      <Provider store={store}>
        <CartProduct key={product.id} data={product} />
      </Provider>,
    );

    const buttonIncrement = screen.getByText('+');
    buttonIncrement.click();

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenCalledWith(incrementAmountProduct(product.id));
    expect(dispatch).toHaveBeenCalledWith(counter());
    expect(dispatch).toHaveBeenCalledWith(getTotal());

    const buttonDecrement = screen.getByText('-');
    buttonDecrement.click();

    expect(dispatch).toHaveBeenCalledTimes(6);
    expect(dispatch).toHaveBeenCalledWith(decrementAmountProduct(product.id));
    expect(dispatch).toHaveBeenCalledWith(counter());
    expect(dispatch).toHaveBeenCalledWith(getTotal());

    const buttonRemove = screen.getByText('X');
    buttonRemove.click();

    expect(dispatch).toHaveBeenCalledTimes(9);
    expect(dispatch).toHaveBeenCalledWith(removeProduct(product.id));
    expect(dispatch).toHaveBeenCalledWith(counter());
    expect(dispatch).toHaveBeenCalledWith(getTotal());
  });
});
