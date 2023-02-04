import { IBoxModel, IText } from '@/interfaces';

type TextProps = {
  children: React.ReactNode;
} & IBoxModel &
  IText;

export default TextProps;
