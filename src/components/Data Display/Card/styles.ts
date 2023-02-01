import styled from 'styled-components';

import CardProps from './types';

const Card = styled.div<CardProps>`
  // Layout
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  // Box model
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};

  // Display:
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  box-shadow: ${({ boxShadow }) => boxShadow};
`;

export { Card };
