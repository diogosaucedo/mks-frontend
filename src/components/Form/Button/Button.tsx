import * as Styled from './styles';
import ButtonProps from './types';

export const Button = (props: ButtonProps) => {
  return <Styled.Button {...props}>{props.children}</Styled.Button>;
};
