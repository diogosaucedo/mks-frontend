import styled from 'styled-components';

import TextProps from './types';

const Text = styled.p<TextProps>`
  // Box model
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  padding: ${({ padding }) => padding};

  // Typography
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-transform: ${({ textTransform }) => textTransform};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  text-overflow: ${({ textOverflow }) => textOverflow};
  overflow: ${({ overflow }) => overflow};
  word-wrap: ${({ wordWrap }) => wordWrap};
`;

export { Text };
