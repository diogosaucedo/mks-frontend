import * as Styled from './styles';
import TextProps from './types';

export const Text = (props: TextProps) => {
  return <Styled.Text {...props}>{props.children}</Styled.Text>;
};
