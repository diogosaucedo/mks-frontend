import { IBoxModel, IDisplay, IText } from '@/interfaces';

type HighlightProps = {
  children: React.ReactNode;
} & IText &
  IBoxModel &
  IDisplay;

export default HighlightProps;
