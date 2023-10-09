import * as React from 'react';

import StarlingThemeContext from './ThemeContext';
import type { StarlingTheme } from './type';
import color from './light';

type Props = {
  value?: Partial<StarlingTheme>;
  children: React.ReactNode;
};

export default function ThemeProvider({ value, children }: Props) {
  const pColor = { ...color, ...value?.colors };
  return (
    <StarlingThemeContext.Provider value={{ colors: pColor }}>
      {children}
    </StarlingThemeContext.Provider>
  );
}
