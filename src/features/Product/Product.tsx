import {
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  Stack,
  Text,
} from '@/components';
import React from 'react';
import { ProductProps } from './type';
import { colors } from '@/themes';

import { useDispatch } from 'react-redux';
import { addProduct, counter, getTotal } from '@/store/Stock.store';

import * as Styled from './styles';

export const Product = (props: ProductProps) => {
  const dispatch = useDispatch();
  return (
    <Styled.Product
      key={props.data.id}
      width="218px"
      height="285px"
      borderRadius="8px"
      flexDirection="column"
      justifyContent="space-between"
      boxShadow="0px 2px 8px rgba(0, 0, 0, 0.135216);"
    >
      <Stack
        flexDirection="column"
        padding="14px"
        gap="6px"
        alignItems="center"
      >
        <Image
          src={props.data.photo}
          alt={props.data.name}
          height="138px"
          width="fit-content"
        />
        <Flex width="100%" justifyContent="space-between" alignItems="start">
          <Heading
            width="120px"
            height="38px"
            type="h2"
            fontSize="16px"
            fontWeight={400}
            color={colors.darkGray}
          >
            {props.data.name}
          </Heading>
          <Highlight
            padding="4px 6px"
            background={colors.darkGray}
            color={colors.white}
            fontSize="15px"
            borderRadius="5px"
            fontWeight={700}
          >
            R${Math.trunc(props.data.price)}
          </Highlight>
        </Flex>
        <Text width="190px" height="25px" fontSize="10px" fontWeight={300}>
          {props.data.description}
        </Text>
      </Stack>
      <Button
        background={colors.darkBlue}
        border="none"
        width="100%"
        height="32px"
        borderRadius="0 0 8px 8px"
        onClick={() => {
          dispatch(addProduct({ ...props.data, amount: 1 }));
          dispatch(counter());
          dispatch(getTotal());
        }}
      >
        <Stack gap="14px" alignItems="center">
          <Image
            src={'shopping-bag.svg'}
            alt="Shopping bag icon"
            width="13px"
            height="fit-content"
          />
          <Text color={colors.white} fontWeight={600} fontSize="14px">
            COMPRAR
          </Text>
        </Stack>
      </Button>
    </Styled.Product>
  );
};
