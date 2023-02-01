'use client';

import { NavBar } from '@/components';
import { Montserrat } from '@next/font/google';

import HomeLayoutProps from './types';
import { GlobalStyles } from '@/themes';
import { Cart } from '@/features';
import { Footer } from '@/components/Navigation/Footer/Footer';

import { store } from '@/store/';
import { Provider } from 'react-redux';

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
