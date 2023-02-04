import styled from 'styled-components';

import FlexProps from './types';

const Flex = styled.div<FlexProps>`
  // Layout
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-flow: ${({ flexFlow }) => flexFlow};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};

  // Box Model
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  padding: ${({ padding }) => padding};

  // Display
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
`;

export { Flex };
