import * as Styled from './styles';
import HighlightProps from './types';

export const Highlight = (props: HighlightProps) => {
  return <Styled.Highlight {...props}>{props.children}</Styled.Highlight>;
};
