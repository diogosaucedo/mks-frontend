import styled from 'styled-components';

import ButtonProps from './types';

export const Button = styled.button<ButtonProps>`
  // Layout
  display: flex;
  align-items: center;
  justify-content: center;

  // Box model
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  padding: ${({ padding }) => padding};

  // Position
  transform: ${({ transform }) => transform};

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
  overflow: ${({ textOverflow }) => textOverflow};
  word-wrap: ${({ wordWrap }) => wordWrap};

  // Display:
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
  outline: none;

  :hover {
    cursor: pointer;
    ${({ hover }) => hover}
  }
`;
