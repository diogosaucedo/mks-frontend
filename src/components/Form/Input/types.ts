import React from 'react';

type InputProps = {
  type: 'email' | 'text' | 'tel' | 'url';
  value?: string | number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
  borderLeft?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  textAlign?: string;
  outline?: string;
  disabled?: boolean;
};

export default InputProps;
