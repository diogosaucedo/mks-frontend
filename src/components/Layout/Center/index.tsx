import React from 'react';

import * as Styled from './styles';
import CenterProps from './types';

export const Center = (props: CenterProps) => {
  return <Styled.Center {...props}>{props.children}</Styled.Center>;
};
