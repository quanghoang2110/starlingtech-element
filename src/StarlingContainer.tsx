import type { ReactNode } from 'react';
import ThemeProvider from './theme/ThemeProvider';
import React from 'react';

const StarlingContainer = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default StarlingContainer;
