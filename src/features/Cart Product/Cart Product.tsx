import React from 'react';
import CartProductProps from './types';
import {
  Button,
  Flex,
  Highlight,
  Image,
  Input,
  Stack,
  Text,
} from '@/components';
import { colors } from '@/themes';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  removeProduct,
  counter,
  incrementAmountProduct,
  decrementAmountProduct,
  getTotal,
} from '@/store/Stock.store';

import * as Styled from './styles';

export const CartProduct = (props: CartProductProps) => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);
  let amount = 1;
  for (const product of stock.products) {
    if (product.id === props.data.id) {
      amount = product.amount;
    }
  }
  return (
    <Styled.CartProduct
      alignItems="center"
      width="379px"
      height="95px"
      borderRadius="8px"
      background={colors.white}
      boxShadow="-2px 2px 10px rgba(0, 0, 0, 0.05)"
      key={props.key}
      justifyContent="space-around"
    >
      <Stack justifyContent="space-between" alignItems="center" gap="20px">
        <Flex alignItems="center" gap="21px">
          <Image
            height="60px"
            width="fit-content"
            src={props.data.photo}
            alt={props.data.name}
          />
          <Text width="100px" fontSize="13px">
            {props.data.name}
          </Text>
        </Flex>
        <Stack alignItems="center" gap="40px">
          <Stack flexDirection="column" gap="4px">
            <Text fontSize="5px">Qtd:</Text>
            <Stack
              border={`0.3px solid ${colors.lightGray}`}
              borderRadius="4px"
            >
              <Button
                fontSize="12px"
                background="none"
                border="none"
                width="15px"
                height="19px"
                onClick={() => {
                  dispatch(decrementAmountProduct(props.data.id));
                  dispatch(counter());
                  dispatch(getTotal());
                }}
              >
                -
              </Button>
              <Input
                fontSize="12px"
                disabled
                value={amount}
                pattern="[0-9]+"
                type="text"
                width="20px"
                height="19px"
                border="none"
                borderLeft={`0.3px solid ${colors.lightGray}`}
                borderRight={`0.3px solid ${colors.lightGray}`}
                textAlign="center"
              />
              <Button
                fontSize="12px"
                background="none"
                border="none"
                width="15px"
                height="19px"
                onClick={() => {
                  dispatch(incrementAmountProduct(props.data.id));
                  dispatch(counter());
                  dispatch(getTotal());
                }}
              >
                +
              </Button>
            </Stack>
          </Stack>
          <Highlight background="none" fontSize="14px" fontWeight={700}>
            R${Math.trunc(props.data.price)}
          </Highlight>
        </Stack>
      </Stack>
      <Button
        width="18px"
        height="18px"
        background={colors.black}
        borderRadius="50%"
        onClick={() => {
          dispatch(removeProduct(props.data.id));
          dispatch(counter());
          dispatch(getTotal());
        }}
        transform="translate(10px, -45px)"
      >
        <Text fontSize="8px" color={colors.white}>
          X
        </Text>
      </Button>
    </Styled.CartProduct>
  );
};
