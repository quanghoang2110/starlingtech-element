import type { ReactNode } from 'react';
import ThemeProvider from './theme/ThemeProvider';
import React from 'react';
import type { StarlingTheme } from './theme/type';

const StarlingContainer = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: StarlingTheme;
}) => {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
};
export default StarlingContainer;
