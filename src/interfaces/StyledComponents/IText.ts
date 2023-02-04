export interface IText {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  textDecoration?: 'none' | 'underline' | 'line-through';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  lineHeight?: string;
  letterSpacing?: string;
  textOverflow?: 'clip' | 'ellipsis';
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  wordWrap?: 'normal' | 'break-word';
}
