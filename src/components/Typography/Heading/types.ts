import { IBoxModel, IText } from '@/interfaces';

type HeadingProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
} & IBoxModel &
  IText;

export default HeadingProps;
