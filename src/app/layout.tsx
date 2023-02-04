'use client';

import { Footer, NavBar } from '@/components';
import { Cart } from '@/features';
import { store } from '@/store/';
import { GlobalStyles } from '@/themes';
import { Montserrat } from '@next/font/google';
import { Provider } from 'react-redux';

import HomeLayoutProps from './types';

const montserrat = Montserrat({ subsets: ['latin'] });

const HomeLayout = (props: HomeLayoutProps) => {
  return (
    <html lang="pt-br">
      <head />
      <body className={montserrat.className}>
        <GlobalStyles />
        <Provider store={store}>
          <NavBar />
          <Cart />
          {props.children}
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
};

export default HomeLayout;
