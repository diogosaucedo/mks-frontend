import { IBoxModel, IDisplay } from '@/interfaces';

type FooterProps = {
  children: React.ReactNode;
} & IBoxModel &
  IDisplay;

export default FooterProps;
