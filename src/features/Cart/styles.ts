import styled from 'styled-components';
import { CartProps } from './types';

const Cart = styled.div<CartProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  z-index: 999;
  position: absolute;
  right: 0;
  /* top: 0; */
`;

export { Cart };
