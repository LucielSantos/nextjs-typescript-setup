import { memo } from 'react';

interface IProps {
  children: any;
}

const TypographyComponent: React.FC<IProps> = ({ children }) => {
  return <p>{children}</p>;
};

export const Typography = memo(TypographyComponent);
