import styled, { css, DefaultTheme } from 'styled-components';

import { IoIosClose as Close } from 'react-icons/io';
import { IconType } from 'react-icons/lib';

type TColor = keyof DefaultTheme['colors'];
type TSizes = keyof DefaultTheme['icon']['sizes'] | string;
type TMargin = keyof DefaultTheme['spacings'] | string;

export interface IIcon {
  color?: TColor;
  iconSize?: TSizes;
  clickable?: boolean;
  marginTop?: TMargin;
  marginRight?: TMargin;
  marginBottom?: TMargin;
  marginLeft?: TMargin;
}

const addIconStyle = (Icon: IconType) => styled(Icon)<IIcon>`
  color: ${({ theme, color = 'one' }) => theme.colors[color]};
  font-size: ${({ theme, iconSize = 'md' }) => theme.icon.sizes[iconSize] || iconSize};
  margin-top: ${({ theme, marginTop }) => (marginTop ? theme.spacings[marginTop] || marginTop : 0)};
  margin-right: ${({ theme, marginRight }) =>
    marginRight ? theme.spacings[marginRight] || marginRight : 0};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom ? theme.spacings[marginBottom] || marginBottom : 0};
  margin-left: ${({ theme, marginLeft }) =>
    marginLeft ? theme.spacings[marginLeft] || marginLeft : 0};

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      transition: filter 0.2s, background-color 0.2s;

      &:hover {
        filter: brightness(80%);
      }

      &:active {
        filter: brightness(70%);
      }
    `}
`;

export const icons = {
  close: addIconStyle(Close),
};
