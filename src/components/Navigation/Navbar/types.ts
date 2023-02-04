import { IBoxModel, IDisplay } from '@/interfaces';

type NavbarProps = {
  children: React.ReactNode;
} & IBoxModel &
  IDisplay;

export default NavbarProps;
