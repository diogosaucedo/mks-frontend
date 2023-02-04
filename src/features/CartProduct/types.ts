import { ICardProduct } from '@/interfaces';

type CartProductProps = {
  children?: React.ReactNode;
  data: ICardProduct;
  key?: number | string;
};

export default CartProductProps;
