import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

export interface KWThemeProviderProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
}

const KWThemeProvider = ({
  theme,
  children,
}: KWThemeProviderProps): JSX.Element => {
  let themeObj;

  switch (theme) {
    case 'light':
      themeObj = lightTheme;
      break;
    case 'dark':
      themeObj = darkTheme;
      break;
    default:
      themeObj = lightTheme;
      break;
  }
  return <ThemeProvider theme={{ ...themeObj }}>{children}</ThemeProvider>;
};

export { KWThemeProvider };
