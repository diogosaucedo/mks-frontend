import React from 'react';

import * as Styled from './styles';
import FlexProps from './types';

export const Flex = (props: FlexProps) => {
  return <Styled.Flex {...props}>{props.children}</Styled.Flex>;
};
