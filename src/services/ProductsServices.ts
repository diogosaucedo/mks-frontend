import { IProduct } from '@/interfaces';

export const getProducts = async (): Promise<IProduct[] | undefined> => {
  const url =
    'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products/?page=1&rows=8&sortBy=id&orderBy=DESC';
  const response = await fetch(url);
  const data = await response.json();
  return data?.products;
};
