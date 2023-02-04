export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export type ICardProduct = Pick<IProduct, 'id' | 'photo' | 'name' | 'price'> & {
  amount: number;
};
