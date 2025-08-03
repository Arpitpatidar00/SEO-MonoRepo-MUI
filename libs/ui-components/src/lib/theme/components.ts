// libs/ui-components/src/lib/theme/components.ts

import { Components, Theme } from '@mui/material/styles';

export const AppComponents = (theme: Theme): Components => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 600,
        padding: theme.spacing(1.2, 2.4),
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
      },
    },
  },
});
