import styled from 'styled-components';

import { Flex } from '@/components';
import { size } from '@/themes';

export const Products = styled(Flex)`
  // Responsive

  @media (max-width: ${size.small}px) {
    padding: 18px 0;
  }
`;
