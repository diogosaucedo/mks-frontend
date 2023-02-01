import styled from 'styled-components';

import NavbarProps from './types';
import { size } from '@/themes';

const Navbar = styled.nav<NavbarProps>`
  // Layout
  display: flex;
  align-items: center;
  justify-content: center;

  // Box Model
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  // Display
  background: ${({ background }) => background};

  // Responsive

  @media (max-width: ${size.small}px) {
    // Navbar
    height: 48px;

    // Branch
    div div {
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 16px;
      }
    }

    // Button
    div button {
      width: 52px;
      height: 26px;
      div {
        gap: 8px;
        img {
          width: 10px;
          height: 10px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
`;

export { Navbar };
