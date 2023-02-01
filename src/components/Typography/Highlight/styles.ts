import styled from 'styled-components';

import HighlightProps from './types';

const Highlight = styled.p<HighlightProps>`
  // Box model
  padding: ${({ padding }) => padding};

  // Display
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  color: ${({ color }) => color};
  background: ${({ background }) => background || 'yellow'};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export { Highlight };
