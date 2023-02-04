import styled from 'styled-components';

import NavbarProps from './types';
import { size } from '@/themes';
import { Heading } from '@/components/Typography/Heading/styles';
import { Text } from '@/components/Typography/Text/styles';
import { Button } from '@/components/Form/Button/styles';
import { Stack } from '@/components/Layout/Stack/styles';
import { Image } from '@/components/Media/Image/styles';

const Navbar = styled.nav<NavbarProps>`
  // Layout
  display: flex;
  align-items: flex;
  justify-content: center;

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

  @media (max-width: ${size.small}px) {
    // Navbar
    height: 48px;

    // Branch
    ${Heading} {
      font-size: 32px;
    }

    ${Text} {
      font-size: 16px;
    }

    // Button

    ${Button} {
      width: 52px;
      height: 26px;
      ${Stack} {
        gap: 8px;
      }
      > ${Image} {
        width: 10px;
        height: 10px;
      }
      > ${Text} {
        font-size: 12px;
      }
    }
  }
`;

export { Navbar };
