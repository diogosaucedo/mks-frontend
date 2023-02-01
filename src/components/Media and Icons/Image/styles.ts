import styled from 'styled-components';

import ImageProps from './types';

const Image = styled.img<ImageProps>`
  // Box Model
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
`;

export { Image };
