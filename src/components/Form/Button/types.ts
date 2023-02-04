import { IBoxModel, IDisplay, IText } from '@/interfaces';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hover?: string;
  transform?: string;
} & IBoxModel &
  IText &
  IDisplay;
export default ButtonProps;
