import styled from 'styled-components';
import FooterProps from './types';

const Footer = styled.footer<FooterProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
`;

export { Footer };
