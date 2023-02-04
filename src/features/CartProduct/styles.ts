import { Card } from '@/components';
import { Button } from '@/components/Form/Button/styles';
import { Input } from '@/components/Form/Input/styles';
import { Flex } from '@/components/Layout/Flex/styles';
import { Stack } from '@/components/Layout/Stack/styles';
import { Image } from '@/components/Media/Image/styles';
import { Highlight } from '@/components/Typography/Highlight/styles';
import { Text } from '@/components/Typography/Text/styles';
import { colors, size } from '@/themes';
import styled from 'styled-components';

export const CartProduct = styled(Card)`
  align-items: center;
  justify-content: space-around;
  width: 379px;
  height: 95px;
  border-radius: 8px;
  background: ${colors.white};
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: ${size.small}px) {
    width: 250px;
    height: 220px;
    > ${Stack} {
      flex-direction: column;
      transform: translate(10px);

      > ${Flex} {
        flex-direction: column;
        align-items: center;
        width: 90%;
        gap: 8px;

        > ${Image} {
          height: 100px;
          width: fit-content;
        }
        > ${Text} {
          font-size: 14px;
          width: fit-content;
          max-width: 211px;
        }
      }
      > ${Stack} {
        flex-direction: row;
        gap: 30px;
        > ${Stack} {
          > ${Text} {
            display: none;
          }
          > ${Stack} {
            width: 97px;
            height: 34px;
            ${Button} {
              width: 32px;
              height: 100%;
              font-size: 22px;
            }
            ${Input} {
              width: 33px;
              height: 100%;
              font-size: 22px;
            }
          }
        }
        > ${Highlight} {
          padding: 8px 12px;
          color: ${colors.white};
          border-radius: 5px;
          background: ${colors.darkGray};
        }
      }
    }
    > ${Button} {
      background: none;
      border: none;
      transform: translate(0, -90px);
      > ${Text} {
        color: ${colors.darkGray};
        font-size: 25px;
      }
    }
  }
`;
