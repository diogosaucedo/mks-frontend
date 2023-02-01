import styled from 'styled-components';

import InputProps from './types';

const Input = styled.input<InputProps>`
  // Box Model
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-left: ${({ borderLeft }) => borderLeft};
  border-right: ${({ borderRight }) => borderRight};
  border-top: ${({ borderTop }) => borderTop};
  border-bottom: ${({ borderBottom }) => borderBottom};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  outline: ${({ outline }) => outline};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  text-align: ${({ textAlign }) => textAlign};
`;

export { Input };
