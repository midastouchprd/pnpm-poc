/* eslint-disable prefer-destructuring */
import {
  colors,
  fetchThemeColor,
  fetchColor,
  ThemeColor,
  ThemeTypes,
  ThemedElementProps,
  FetchThemeColorProps,
  DLS_COLOR,
  DLS_COLORS_NOTIFICATIONS,
  DLS_COLORS,
  THEME_PROVIDER_WARNING,
} from './colors';
import { KWThemeProvider } from './KWThemeProvider';
import { measures } from './measures';
import { typography } from './typography';

export {
  colors,
  measures,
  typography,
  KWThemeProvider,
  fetchThemeColor,
  fetchColor,
  DLS_COLOR,
  DLS_COLORS_NOTIFICATIONS,
  DLS_COLORS,
  THEME_PROVIDER_WARNING,
};

export type {
  ThemeColor,
  ThemeTypes,
  ThemedElementProps,
  FetchThemeColorProps,
};
