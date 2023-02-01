import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICardProduct } from '@/interfaces';

const stock = createSlice({
  name: 'stock',
  initialState: {
    counter: 0,
    total: 0,
    visible: false,
    products: [] as never | ICardProduct[],
  },
  reducers: {
    toggleVisible(state) {
      state.visible = !state.visible;
    },
    addProduct(state, action: PayloadAction<ICardProduct>) {
      if (
        state.products.find(
          (item: ICardProduct) => item.id == action.payload.id,
        )
      ) {
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
    counter(state) {
      state.counter = state.products.length;
    },
    getTotal(state) {
      state.total = state.products.reduce(
        (acc, item) => acc + item.amount * item.price,
        0,
      );
    },
    incrementAmountProduct(state, action: PayloadAction<number>) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          return { ...product, amount: product.amount + 1 };
        } else {
          return product;
        }
      });
    },
    decrementAmountProduct(state, action: PayloadAction<number>) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload && product.amount > 1) {
          return { ...product, amount: product.amount - 1 };
        } else {
          return product;
        }
      });
    },
  },
});

export const {
  toggleVisible,
  addProduct,
  counter,
  removeProduct,
  getTotal,
  incrementAmountProduct,
  decrementAmountProduct,
} = stock.actions;
export default stock.reducer;
