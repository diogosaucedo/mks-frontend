'use client';
import { Center } from '@/components';
import { Product } from '@/features';
import { getProducts } from '@/services';

import { use } from 'react';
import * as Styled from './styles';

const Home = () => {
  const products = use(getProducts());

  return (
    <>
      <Center width="100%" height="100%">
        <Styled.Products>
          {products?.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </Styled.Products>
      </Center>
    </>
  );
};

export default Home;
