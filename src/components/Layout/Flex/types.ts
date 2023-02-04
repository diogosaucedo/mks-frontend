import { IBoxModel, IDisplay, IFlexContainer } from '@/interfaces';

type FlexProps = {
  children: React.ReactNode;
} & IFlexContainer &
  IBoxModel &
  IDisplay;

export default FlexProps;
