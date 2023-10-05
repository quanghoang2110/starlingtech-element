import type { StarlingColorScheme } from './color';

export interface StarlingTheme {
  colors: StarlingColorScheme;
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
