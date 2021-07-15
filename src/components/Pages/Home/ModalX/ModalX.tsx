import { memo } from 'react';

interface IProps {}

const ModalXComponent: React.FC<IProps> = () => {
  return <div>ModalX</div>;
};

export const ModalX = memo(ModalXComponent);
