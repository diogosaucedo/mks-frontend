import * as Styled from './styles';
import CardProps from './types';

export const Card = (props: CardProps) => {
  return <Styled.Card {...props}>{props.children}</Styled.Card>;
};
