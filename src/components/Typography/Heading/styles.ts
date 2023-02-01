import styled from 'styled-components';

import HeadingProps from './types';

const Heading = styled.h1<HeadingProps>`
  // Box model
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
`;

export { Heading };
