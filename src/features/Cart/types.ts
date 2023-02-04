import { IBoxModel, IDisplay } from '@/interfaces';

type CartProps = {
  children?: React.ReactNode;
} & IBoxModel &
  IDisplay;
export type { CartProps };
