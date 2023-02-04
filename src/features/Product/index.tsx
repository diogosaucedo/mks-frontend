import {
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  Stack,
  Text,
} from '@/components';
import { addProduct, counter, getTotal } from '@/store/Stock.store';
import { colors } from '@/themes';
import React from 'react';
import { useDispatch } from 'react-redux';

import * as Styled from './styles';
import { ProductProps } from './type';

export const Product = (props: ProductProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...props.data, amount: 1 }));
    dispatch(counter());
    dispatch(getTotal());
  };
  const truncatedPrice = Math.trunc(props.data.price);

  return (
    <Styled.Product key={props.data.id}>
      <Flex flexDirection="column" padding="14px" gap="6px" alignItems="center">
        <Image
          src={props.data.photo}
          alt={props.data.name}
          height="138px"
          width="fit-content"
        />
        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="flex-start"
        >
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
            R${truncatedPrice}
          </Highlight>
        </Flex>
        <Text
          width="190px"
          height="25px"
          fontSize="10px"
          fontWeight={300}
          overflow="hidden"
          textOverflow="ellipsis"
          wordWrap="break-word"
        >
          {props.data.description}
        </Text>
      </Flex>
      <Button
        background={colors.darkBlue}
        border="none"
        width="100%"
        height="32px"
        borderRadius="0 0 8px 8px"
        onClick={handleClick}
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
