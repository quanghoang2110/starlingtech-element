import { useContext } from 'react';
import StarlingThemeContext from '../theme/ThemeContext';

export function useThemeContext() {
  return useContext(StarlingThemeContext);
}
