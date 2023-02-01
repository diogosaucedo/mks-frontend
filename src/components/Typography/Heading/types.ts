type HeadingProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  width?: string;
  height?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
};

export default HeadingProps;
