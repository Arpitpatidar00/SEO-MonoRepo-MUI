import { AppColors } from '../colors';

declare module '@mui/material/styles' {
  interface Palette {
    custom?: typeof AppColors;
  }

  interface PaletteOptions {
    custom?: typeof AppColors;
  }

  interface Theme {
    custom?: typeof AppColors;
  }

  interface ThemeOptions {
    custom?: typeof AppColors;
  }
}
