import * as Styled from './styles';
import HeadingProps from './types';

export const Heading = (props: HeadingProps) => {
  return (
    <Styled.Heading {...props} as={props.type}>
      {props.children}
    </Styled.Heading>
  );
};
