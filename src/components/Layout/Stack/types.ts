import { IDisplay, IFlexContainer } from '@/interfaces';

type StackProps = {
  children: React.ReactNode;
} & IFlexContainer &
  IDisplay;

export default StackProps;
