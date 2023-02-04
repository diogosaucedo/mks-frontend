import Image from 'next/image';
import * as Styled from './styles';

import { Flex, Stack, Button, Heading, Text } from '@/components';
import { colors } from '@/themes';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { toggleVisible, getTotal } from '@/store/Stock.store';

export const NavBar = () => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  const handleClick = () => {
    dispatch(toggleVisible());
    dispatch(getTotal());
  };

  return (
    <Styled.Navbar width="100%" height="100px" background={colors.darkBlue}>
      <Flex
        width="90%"
        maxWidth="1300px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack alignItems="center" gap="8px">
          <Heading
            type="h1"
            fontSize="40px"
            color={colors.white}
            fontWeight={600}
          >
            MKS
          </Heading>
          <Text fontSize="20px" color={colors.white} fontWeight={300}>
            Sistemas
          </Text>
        </Stack>
        {!stock.visible && (
          <Button
            width="90px"
            height="45px"
            borderRadius="8px"
            background={colors.white}
            border="none"
            onClick={handleClick}
          >
            <Stack alignItems="center" gap="16px">
              <Image
                src={'./cart.svg'}
                width={18}
                height={18}
                alt="Icone do carrinho de compras"
              />
              <Text fontSize="18px" fontWeight={700}>
                {stock.counter}
              </Text>
            </Stack>
          </Button>
        )}
      </Flex>
    </Styled.Navbar>
  );
};
