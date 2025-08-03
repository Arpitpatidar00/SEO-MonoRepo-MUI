import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

import { AppTypography } from './typography';
import { AppPalette } from './palette';
import { AppBreakpoints } from './breakpoints';
import { AppShadows } from './shadows';
import { AppComponents } from './components';

// 1. Create base theme first
const baseTheme = createTheme({
  palette: AppPalette,
  typography: AppTypography,
  breakpoints: AppBreakpoints,
  shadows: AppShadows,
} as ThemeOptions); // 👈 Ensure correct typing

// 2. Inject components using baseTheme
const themeWithComponents = {
  ...baseTheme,
  components: AppComponents(baseTheme),
};

// 3. Wrap in responsiveFontSizes
export const AppTheme = responsiveFontSizes(themeWithComponents);
