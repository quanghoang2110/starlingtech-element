import type color from './color';

export interface Theme {
  colors: typeof color;
  fonts: {
    black: string;
    extraBold: string;
    bold: string;
    semiBold: string;
    medium: string;
    regular: string;
    light: string;
    extraLight: string;
    thin: string;
  };
}
