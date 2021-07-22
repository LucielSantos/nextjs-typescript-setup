import NextHead from 'next/head';

interface IProps {
  title: string;
}

export const Head = ({ title }: IProps) => (
  <NextHead>
    <title>{title}</title>
  </NextHead>
);
