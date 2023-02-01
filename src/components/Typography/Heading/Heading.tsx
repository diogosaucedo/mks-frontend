import HeadingProps from './types';
import * as Styled from './styles';

export const Heading = (props: HeadingProps) => {
  return (
    <Styled.Heading {...props} as={props.type}>
      {props.children}
    </Styled.Heading>
  );
};
