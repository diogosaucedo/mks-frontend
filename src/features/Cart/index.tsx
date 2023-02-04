import React from 'react';
import * as Styled from './styles';
import { colors } from '@/themes';
import { Button, Flex, Heading, Image, Stack, Text } from '@/components';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { toggleVisible } from '@/store/Stock.store';
import { CartProduct } from '../CartProduct';

export const Cart = () => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  const handleCloseButton = () => {
    dispatch(toggleVisible());
  };

  const products = stock?.products.map(({ id, photo, name, price }) => (
    <CartProduct data={{ id, photo, name, price, amount: 1 }} key={id} />
  ));

  if (stock.visible) {
    return (
      <Styled.Cart>
        <Flex
          flexDirection="column"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          minHeight="100vh"
        >
          <Flex flexDirection="column" width="90%" padding="20px 0">
            <Stack justifyContent="space-between" alignItems="center">
              <Heading
                type="h2"
                color={colors.white}
                width="180px"
                fontSize="27px"
              >
                Carrinho de Compras
              </Heading>
              <Button
                width="38px"
                height="38px"
                background={colors.black}
                borderRadius="50%"
                onClick={handleCloseButton}
              >
                <Image width="15px" src="x.svg" alt="icon close" />
              </Button>
            </Stack>
            <Flex
              padding="70px 0"
              flexDirection="column"
              gap="28px"
              alignItems="center"
            >
              {products.map((product) => product)}
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            width="100%"
            alignItems="center"
            gap="42px"
          >
            <Flex justifyContent="space-between" width="80%">
              <Text fontSize="28px" color={colors.white} fontWeight={700}>
                Total:
              </Text>
              <Text fontSize="28px" color={colors.white} fontWeight={700}>
                R${stock.total}
              </Text>
            </Flex>
            <Button
              border="none"
              width="100%"
              height="97px"
              fontSize="28px"
              color={colors.white}
              background={colors.black}
            >
              <Text fontWeight={700}>Finalizar Compra</Text>
            </Button>
          </Flex>
        </Flex>
      </Styled.Cart>
    );
  } else {
    return <></>;
  }
};
