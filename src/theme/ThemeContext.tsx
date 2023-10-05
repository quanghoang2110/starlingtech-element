import * as React from 'react';

import type { StarlingTheme } from './type';
import { fonts } from './theming';
import color from './color';

const StarlingThemeContext = React.createContext<StarlingTheme>({
  colors: color,
  fonts: fonts,
});

StarlingThemeContext.displayName = 'ThemeContext';

export default StarlingThemeContext;
