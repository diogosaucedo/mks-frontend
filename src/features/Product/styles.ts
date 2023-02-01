import styled from 'styled-components';

import { Card } from '@/components';
import { Button } from '@/components/Form/Button/styles';
import { size } from '@/themes';
import { Image } from '@/components/Media and Icons/Image/styles';
import { Highlight } from '@/components/Typography/Highlight/styles';
import { Heading } from '@/components/Typography/Heading/styles';
import { Text } from '@/components/Typography/Text/styles';

export const Product = styled(Card)`
  // Responsive

  @media (max-width: ${size.small}px) {
    width: 250px;
    height: 318px;

    // change childs

    ${Image} {
      height: 158px;
    }

    ${Highlight} {
      padding: 5px 10px;
    }

    ${Heading} {
      width: 140px;
    }

    ${Text} {
      width: 100%;
      height: 28px;
    }

    // Button
    ${Button} {
      height: 36px;
      ${Image} {
        width: 15px;
        height: fit-content;
      }
      ${Text} {
        height: fit-content;
      }
    }
  }
`;
