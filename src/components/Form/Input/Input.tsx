import React from 'react';

import * as Styled from './styles';
import InputProps from './types';

export const Input = (props: InputProps) => {
  return <Styled.Input {...props} />;
};
