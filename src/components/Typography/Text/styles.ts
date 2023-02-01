import styled from 'styled-components';

import TextProps from './types';

const Text = styled.p<TextProps>`
  // Box model
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color};
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
`;

export { Text };
