import styled from 'styled-components';

import { Flex } from '@/components';
import { size } from '@/themes';

export const Products = styled(Flex)`
  width: 100%;
  max-width: 938px;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 116px 0;

  // Responsive
  @media (max-width: ${size.small}px) {
    padding: 18px 0;
  }
`;
