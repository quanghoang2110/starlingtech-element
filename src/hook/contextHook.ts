import { useContext } from 'react';
import StarlingThemeContext from '../theme/ThemeContext';

export function useThemeContext() {
  return useContext(StarlingThemeContext);
}

export function useThemeColor<T>() {
  const { colors } = useThemeContext();
  return { colors } as { colors: T };
}
