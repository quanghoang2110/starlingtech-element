import type { StarlingColorScheme } from '../starlingTheme';

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
