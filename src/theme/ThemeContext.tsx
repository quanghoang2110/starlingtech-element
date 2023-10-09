import * as React from 'react';

import type { StarlingTheme } from './type';
import color from './light';

const StarlingThemeContext = React.createContext<StarlingTheme>({
  colors: color,
});

StarlingThemeContext.displayName = 'ThemeContext';

export default StarlingThemeContext;
