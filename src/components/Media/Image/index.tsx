import React from 'react';

import * as Styled from './styles';
import ImageProps from './types';

export const Image = (props: ImageProps) => {
  return <Styled.Image {...props} />;
};
