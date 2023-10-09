import type { ReactNode } from 'react';
import ThemeProvider from './theme/ThemeProvider';
import React from 'react';
import type { StarlingTheme } from './theme/type';

type Props = {
  children: ReactNode;
  theme?: Partial<StarlingTheme>;
};

const StarlingContainer = ({ children, theme }: Props) => {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
};
export default StarlingContainer;
