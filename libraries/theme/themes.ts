/* eslint-disable prefer-destructuring */

import { colors, themes } from './colors';
import { typography } from './typography';
import { measures } from './measures';

const flexboxgrid = {
  gridSize: 12,
  gutterWidth: 1,
  outerMargin: 1,
  mediaQuery: 'only screen',
  breakpoints: {
    xs: 20,
    sm: 30,
    md: 48,
    lg: 64,
  },
};

export const commonThemeTokens = {
  breakpoints: {
    sm: '320px',
    md: '480px',
    lg: '768px',
    xl: '1024px',
  },
  flexboxgrid,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  typography,
  measures,
};

export const darkTheme = {
  id: 'dark',
  ...commonThemeTokens,
  colors: {
    ...colors,
    ...themes.dark,
  },
};

export const lightTheme = {
  id: 'light',
  ...commonThemeTokens,
  colors: {
    ...colors,
    ...themes.light,
  },
};
