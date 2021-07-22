import { useMemo, memo } from 'react';

import { icons, IIcon } from './icons';

type TIconName = keyof typeof icons;

export interface IIconProps extends Omit<IIcon, 'iconSize'> {
  name: TIconName;
  size?: IIcon['iconSize'];
  onClick?(event: any): void;
}

const IconComponent: React.FC<IIconProps> = ({
  name = 'close',
  color = 'one',
  size = 'md',
  onClick,
  ...props
}) => {
  const Component = useMemo(() => icons[name], [name]);

  return <Component color={color} onClick={onClick} {...{ ...props, iconSize: size }} />;
};

export const Icon = memo(IconComponent);
