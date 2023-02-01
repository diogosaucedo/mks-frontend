import React from 'react';
import * as Styled from './styles';
import { colors } from '@/themes';
import { Button, Flex, Heading, Image, Stack, Text } from '@/components';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { toggleVisible } from '@/store/Stock.store';
import { CartProduct } from '../Cart Product/Cart Product';

export const Cart = () => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);
  if (stock.visible) {
    return (
      <Styled.Cart width="486px" height="100vh" background={colors.darkBlue}>
        <Flex
          flexDirection="column"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
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
                onClick={() => dispatch(toggleVisible())}
              >
                <Image width="15px" src="x.svg" alt="icon close" />
              </Button>
            </Stack>
            <Stack
              padding="70px 0"
              flexDirection="column"
              gap="28px"
              alignItems="center"
            >
              {stock?.products.map(({ id, photo, name, price }) => (
                <CartProduct
                  data={{ id, photo, name, price, amount: 1 }}
                  key={id}
                />
              ))}
            </Stack>
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
