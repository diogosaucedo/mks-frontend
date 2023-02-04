import { IBoxModel, IDisplay, IText } from '@/interfaces';
import React from 'react';

type InputProps = {
  type: 'email' | 'text' | 'tel' | 'url';
  value?: string | number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  outline?: string;
  disabled?: boolean;
} & IBoxModel & IText & IDisplay;

export default InputProps;
