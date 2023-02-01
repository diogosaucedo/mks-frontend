import styled from 'styled-components';

import ButtonProps from './types';

export const Button = styled.button<ButtonProps>`
  // Layout
  display: flex;
  align-items: center;
  justify-content: center;

  // Box Model
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  // Position
  transform: ${({ transform }) => transform};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  outline: none;
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  font-size: ${({ fontSize }) => fontSize};
  text-decoration: ${({ textDecoration }) => textDecoration};

  :hover {
    cursor: pointer;
    ${({ hover }) => hover}
  }
`;
