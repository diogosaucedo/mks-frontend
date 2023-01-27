import { Montserrat } from '@next/font/google';

import HomeLayoutProps from './types';

const montserrat = Montserrat({ subsets: ['latin'] });

const HomeLayout = (props: HomeLayoutProps) => {
  return (
    <html lang="pt-br">
      <head />
      <body className={montserrat.className}>{props.children}</body>
    </html>
  );
};

export default HomeLayout;
