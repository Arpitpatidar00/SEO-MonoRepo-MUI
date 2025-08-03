'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppTheme } from '@seo-monorepo/ui-components';

type AppThemeWrapperProps = {
  children: React.ReactNode;
};

export const AppThemeWrapper = ({ children }: AppThemeWrapperProps) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
