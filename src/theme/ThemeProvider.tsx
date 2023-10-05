import * as React from 'react';

import StarlingThemeContext from './ThemeContext';
import type { StarlingTheme } from './type';
import color from './color';
import { fonts } from './theming';

type Props = {
  value?: StarlingTheme;
  children: React.ReactNode;
};

export default function ThemeProvider({ value, children }: Props) {
  const pColor = { ...color, ...value?.colors };
  const pFonts = { ...fonts, ...value?.fonts };

  return (
    <StarlingThemeContext.Provider value={{ colors: pColor, fonts: pFonts }}>
      {children}
    </StarlingThemeContext.Provider>
  );
}
