import * as Styled from './styles';
import StackProps from './types';

export const Stack = (props: StackProps) => {
  return <Styled.Stack {...props}>{props.children}</Styled.Stack>;
};
