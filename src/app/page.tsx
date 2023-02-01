'use client';
import { Center, Flex } from '@/components';
import { Product } from '@/features';
import { IProduct } from '@/interfaces';
import { use } from 'react';

const getProducts = async (): Promise<IProduct[] | undefined> => {
  const url =
    'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products/?page=1&rows=8&sortBy=id&orderBy=DESC';
  const response = await fetch(url);
  const data = await response.json();
  return data?.products;
};

const Home = () => {
  const products = use(getProducts());

  const flexProps = {
    width: '100%',
    maxWidth: '938px',
    flexWrap: 'wrap',
    gap: '20px',
  };

  return (
    <>
      <Center width="100%" height="100%">
        <Flex {...flexProps}>
          {products?.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </Flex>
      </Center>
    </>
  );
};

export default Home;
