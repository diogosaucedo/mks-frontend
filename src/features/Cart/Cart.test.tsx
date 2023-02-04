import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisible } from '@/store/Stock.store';
import { Cart } from '.';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Cart feature', () => {
  const dispatch = jest.fn();
  const mockSelector = jest.fn().mockReturnValue({
    visible: true,
    products: [
      { id: 1, photo: 'photo1.jpg', name: 'Product 1', price: 9.99 },
      { id: 2, photo: 'photo2.jpg', name: 'Product 2', price: 19.99 },
    ],
    total: 29.98,
  });

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (useSelector as jest.Mock).mockImplementation(mockSelector);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Cart component', () => {
    render(<Cart />);

    expect(screen.getByText('Carrinho de Compras')).toBeInTheDocument();
    expect(screen.getByText('Finalizar Compra')).toBeInTheDocument();
    expect(screen.getByText('R$29.98')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Cart />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call toggleVisible when clicking on close button', () => {
    render(<Cart />);

    screen.getByRole('button', { name: 'icon close' }).click();
    expect(dispatch).toHaveBeenCalledWith(toggleVisible());
  });
});
