import * as React from 'react';

import ThemeContext from './ThemeContext';
import type { Theme } from './type';
import color from './color';
import { fonts } from './theming';

type Props = {
  value?: Theme;
  children: React.ReactNode;
};

export default function ThemeProvider({ value, children }: Props) {
  return (
    <ThemeContext.Provider value={value ?? { colors: color, fonts: fonts }}>
      {children}
    </ThemeContext.Provider>
  );
}
