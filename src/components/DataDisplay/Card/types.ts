import { IBoxModel, IDisplay, IFlexContainer } from '@/interfaces';

type CardProps = {
  children: React.ReactNode;
  key?: number | string;
} & IFlexContainer &
  IBoxModel &
  IDisplay;

export default CardProps;
