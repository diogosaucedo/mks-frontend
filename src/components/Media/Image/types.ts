import { IBoxModel, IDisplay } from '@/interfaces';

type ImageProps = {
  src: string;
  alt: string;
} & IBoxModel &
  IDisplay;

export default ImageProps;
