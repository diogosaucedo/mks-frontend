import styled from 'styled-components';

import CenterProps from './types';

const Center = styled.div<CenterProps>`
  // Layout
  display: flex;
  align-items: center;
  justify-content: center;

  // Box Model
  width: ${({ width }) => width || 'fit-content'};
  height: ${({ height }) => height || 'fit-content'};
  padding: ${({ padding }) => padding};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
`;

export { Center };
