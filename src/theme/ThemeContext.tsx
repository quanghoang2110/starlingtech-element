import * as React from 'react';

import type { Theme } from './type';
import { fonts } from './theming';
import color from './color';

const ThemeContext = React.createContext<Theme>({
  colors: color,
  fonts: fonts,
});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
