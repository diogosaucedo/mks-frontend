import HomeLayoutProps from './types';

const HomeLayout = (props: HomeLayoutProps) => {
  return (
    <html lang="pt-br">
      <head />
      <body>{props.children}</body>
    </html>
  );
};

export default HomeLayout;
