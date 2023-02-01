import { Card } from '@/components';
import { Button } from '@/components/Form/Button/styles';
import { Input } from '@/components/Form/Input/styles';
import { Flex } from '@/components/Layout/Flex/styles';
import { Stack } from '@/components/Layout/Stack/styles';
import { Image } from '@/components/Media and Icons/Image/styles';
import { Highlight } from '@/components/Typography/Highlight/styles';
import { Text } from '@/components/Typography/Text/styles';
import { colors, size } from '@/themes';
import styled from 'styled-components';

export const CartProduct = styled(Card)`
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
